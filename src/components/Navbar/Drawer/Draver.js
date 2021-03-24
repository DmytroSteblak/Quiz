import React from "react"
import s from "./Draver.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";


const links = [
    {to: "/", label: "Список",exact: true},
    {to: "/auth", label: "Автор",exact: false},
    {to: "/quiz-creator", label: "Создать текст",exact: false}
]

class Drawer extends React.Component {

    clickHandler = () =>{
        this.props.onClose()
    }

    renderLinks(){
        return links.map((link,index) =>{
            return (
                <li key={index}>
                    <NavLink to={link.to}
                             activeClassName={s.active}
                             onClick={this.clickHandler}
                             exact={link.exact}>
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [s.drawer]
        if (!this.props.isOpen){
            cls.push(s.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(" ")}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>

        )
    }
}

export default Drawer;