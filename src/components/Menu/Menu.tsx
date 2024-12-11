import MenuLink from "./MenuLink";
import { useAddTaskMenuContext } from "../../hooks/useAddTaskMenu";
import "./Menu.scss";

export default function Menu() {
    const { toggleIsOpen } = useAddTaskMenuContext();
    
    return (
        <nav className="menu">
            <div className="top" onClick={() => window.location.href = '/'}>
                <div className="author">
                    <img className="shizu-img" src="./img/logo/shizu.png" alt="" />
                    <h4>Shizu</h4>
                </div>
                <img className="github" src="./img/icons/github.png" alt="" />
            </div>
            <ul className="menu-list">
                <MenuLink text="Add task" icon={<svg enableBackground="new 0 0 48 48" height="21px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="21px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"><g id="Layer_3"><path d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M35,26h-9v8.998h-4V26h-9v-4   h9v-8.998h4V22h9V26z" fill="#f73b2a"/></g></svg>} onClick={() => toggleIsOpen('')} />
                <MenuLink text="Home" icon={<svg width="21px" height="21px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="10-House" id="_10-House"><path d="M31.62,12.22l-15-12a1,1,0,0,0-1.25,0l-15,12A1,1,0,0,0,1,14H3V31a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V14h2a1,1,0,0,0,.62-1.78ZM18,30H14V22h4ZM28,12a1,1,0,0,0-1,1V30H20V21a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v9H5V14H22V12H3.85L16,2.28,28.15,12Z"/></g></svg>} onClick={() => window.location.href = '/'} />
            </ul>
        </nav>
    );
}