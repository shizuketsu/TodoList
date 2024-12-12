const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const addLineToBeginningStream = require('./utils/addLine');
const params = require('../src/config.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/addTask', async (req, res) => {
    const { name, prior } = req.body;
    const newLine = `${name};${prior}`;
    addLineToBeginningStream(path.join(__dirname, 'tasks.txt'), newLine);

    return res.send('1');
});

app.post('/api/deleteTask', async (req, res) => {
    const { text } = req.body;
    const filepath = path.join(__dirname, 'tasks.txt');

    const lines = fs.readFileSync(filepath, 'utf-8').split('\n');
    const updatedLines = lines.filter(line => line.split(';')[0].trim() !== text.trim());
    fs.writeFileSync(filepath, updatedLines.join('\n'));

    return res.send('1');
});

app.get('/api/getTasks', async (req, res) => {
    const result = { primary: [], secondary: [], tertiary: [] };
    const lines = fs.readFileSync(path.join(__dirname, 'tasks.txt'), 'utf-8').split('\n');

    for(let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim();
        if(!lines[i]) continue;

        const params = lines[i].split(';');
        if(params.length < 2) continue;

        const taskObj = { text: params[0].trim(), prior: params[1].trim() };
        const priority = taskObj.prior.replaceAll(' ', '');

        switch(priority) {
            case 'Primary':
                result.primary.push(taskObj);
                break;
            case 'Secondary':
                result.secondary.push(taskObj);
                break;
            case 'Tertiary':
                result.tertiary.push(taskObj);
                break;
            default:
                console.warn(`Undefined priority: ${priority}`);
        }
    }

    res.send(result);
});

app.listen(params.server.port, 'localhost', () => {
    console.log('Server was started at port ' + params.server.port);
});