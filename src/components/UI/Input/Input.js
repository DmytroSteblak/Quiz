import React from "react"
import s from "./Input.module.css"


function inInvalid  ({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = (props) => {

    const inputType = props.type || "text"
    const cls = [s.input]
    const htmlFor = `${inputType}-${Math.random()}`


    return (
        <div className={cls.join(" ")}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType}
                   id={htmlFor}
                   value={props.value}
                   onChange={props.onChange}/>
            {inInvalid(props)
            ? <span>{props.errorMessage || "Введите верное знаение"}</span>
            : null}

        </div>
    )
}

export default Input;