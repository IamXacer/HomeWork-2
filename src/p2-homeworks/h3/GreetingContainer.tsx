import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

 const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
   const TrimName = e.currentTarget.value.trim()
     if(TrimName){
         setName(TrimName)
       error &&  setError('')
     }
     else {
         setName('')
         setError('Title Is reQAuer')
     }
 }

    const addUser = () => {
       addUserCallback(name)
        alert(`Helo !${name}`)
        setName('')
    }
   const onEnter = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key ==='Enter' && name){
            addUser()
        }
   }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
