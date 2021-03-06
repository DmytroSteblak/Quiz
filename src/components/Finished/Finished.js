import React from "react"
import s from "./Finished.module.css"
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const Finished = (props) => {

    const successCount = Object.keys(props.results).reduce((total,key) =>{
            if (props.results[key] === "success"){
                total++
            }
            return total
        },0)

    return (
        <div className={s.finished}>
            <ul>
                {props.quiz.map((quizItem,index) =>{
                    const cls = [
                        "fa",
                        props.results[quizItem.id] === "error"
                            ? "fa-times"
                            : "fa-check",
                        s[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(" ")}/>
                        </li>
                    )
                })}
                {/*<li>*/}
                {/*    <strong>1. </strong>*/}
                {/*    how are you?*/}
                {/*    <i className={"fa fa-times " + s.error}/>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <strong>1. </strong>*/}
                {/*    how are you?*/}
                {/*    <i className={"fa fa-check " + s.success}/>*/}
                {/*</li>*/}
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary" >Повторить</Button>
                <Link to={"/"}>
                    <Button type="success" >перейти в список тестов</Button>
                </Link>

            </div>
        </div>
    )
}

export default Finished;