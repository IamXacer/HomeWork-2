import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affair}>
       <div className={s.affair}>     <div className={s.FigmaB}>{props.affair.name}</div>
                <div className={s.affair}>{props.affair.priority}
                    <button onClick={deleteCallback}className={s.button} >X</button>
                </div>
            </div>



        </div>
    )
}

export default Affair
