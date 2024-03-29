 import React, {useState} from 'react'
import Affairs, {AffairsPropsType} from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'   // need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Redux', priority: 'low'},
    {_id: 3, name: 'Js', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
  /* else if (filter === 'high') return affairs.filter((f=>f.priority === 'high'))
    else if (filter === 'middle') return affairs.filter((f=>f.priority === 'middle'))
    else {}
    return []*/
  else return affairs.filter((a)=>a.priority === filter)
}
export const deleteAffair = (affairs:AffairType[],_id:number):AffairType[] =>{
    return affairs.filter(a =>a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id:number) => setAffairs (deleteAffair (affairs,_id) )// need to fix any


    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
