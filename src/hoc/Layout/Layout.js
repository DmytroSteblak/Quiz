import React, {Component} from 'react'
import s from './Layout.css'
import MenuToggle from "../../components/Navbar/MenuToggle/MenuToggle";
import Drawer from "../../components/Navbar/Drawer/Draver";

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () =>{
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={s.Layout}>
                <Drawer isOpen={this.state.menu}
                        onClose={this.menuCloseHandler}/>

                <MenuToggle onTogle={this.toggleMenuHandler}
                            isOpen={this.state.menu}/>

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout