const fs = require('fs');

module.exports = function addLineToBeginningStream(filePath, lineToAdd) {
    const rs = fs.createReadStream(filePath, 'utf8');
    const ws = fs.createWriteStream(filePath + '.tmp', 'utf8');

    ws.write(lineToAdd + '\n');
  
    rs.pipe(ws).on('finish', () => {
        fs.rename(filePath + '.tmp', filePath, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }).on('error', (err) => {
        console.error(err);
    });
}