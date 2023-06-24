import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

export type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (

        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const setClass = (filter:FilterType) => {
       return style.button + (props.filter ===filter ? ' ' + style.active : '')
    }
    return (
        <div >

            {mappedAffairs}

           <button onClick={setAll} className={style.AllButton}>All</button>
            <button onClick={setHigh} className={style.HigButton}>High</button>
           <button onClick={setMiddle} className={style.MidleButton}>Middle</button>
            <button onClick={setLow} className={style.LowButton}>Low</button>

            <button onClick={set} className={setClass('all')} value={'all'}>All</button>
            <button onClick={set} className={setClass('high')} value={'high'}>High</button>
            <button onClick={set} className={setClass('middle')} value={'middle'}>Middle</button>
            <button onClick={set} className={setClass('low')} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs
