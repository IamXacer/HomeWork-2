import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers:number // need to fix any
    onEnter:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''// need to fix with (?:)

    return (
        <div className={s.greeting}>
         <div>   <input value={name} onChange={setNameCallback} className={inputClass}
                   onKeyDown={onEnter} onBlur={setNameCallback}
            />

            <div className={s.error}>{error}</div>
         </div>
            <button onClick={addUser} disabled={!name}>add</button>
            <div>{totalUsers}</div>
        </div>
    )
}

export default Greeting
