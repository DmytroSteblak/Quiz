import React from "react"
import s from "./Auth.module.css"
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends React.Component{

    state = {
        formControls:{
            email:{
                value: "",
                type: "email",
                label: "Email",
                errorMessage: "Введите коректный email",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password:{
                value: "",
                type: "password",
                label: "Password",
                errorMessage: "Введите коректный пароль",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }


    loginHandler = (e) =>{

    }



    registerHandler = () =>{

    }

    submitHandler = (e) =>{
        e.preventDefault()
    }

    onChangeHandler = (e, controlName) =>{
        console.log(`${controlName}:`,e.target.value)
    }

    renderInputs(){
        return  Object.keys(this.state.formControls).map((controlName, index) =>{
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.error}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return(
            <div className={s.auth}>
                <div>
                    <h1>Авторизация</h1>
                    
                    <form onSubmit={this.submitHandler} className={s.authForm}>

                        {this.renderInputs()}

                        <Button type="success"
                                onClick={this.loginHandler}>Sing in</Button>
                        <Button type="primary" onClick={this.registerHandler}>
                            Sing up
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;