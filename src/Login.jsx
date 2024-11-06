import { useState } from 'react';
import Shop from './Shop.jsx';
import AdminPanel from './AdminPanel'
export default function Login(){
    let items = [{id: 1, name: 'item1', price: 99}, {id: 2, name: 'item2', price: 999}, {id: 3, name: 'item3', price: 999}]

    let accounts = [
        {id: 1, username: 'customer', password: 'customer', role: 'customer'},
        {id: 2, username: 'admin', password: 'admin', role: 'admin'}
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [role, setRole] = useState("")

    const [enteredUsernames, setEnteredUsernames] = useState("")

    const [enteredPasswords, setEnteredPasswords] = useState("")

    function getUserName(event){
        setEnteredUsernames(event.target.value)
    }

    function getPassword(envent){
        setEnteredPasswords(event.target.value)
    }

    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
            
        })
    }

    function renderLogin() {
        return(
            <div>
                <h1> Login: </h1>
                Username: <input type='text' placeholder='username' id='username' onChange={getUserName} /> <br />
                Password: <input type='text' placeholder='password' id='password' onChange={getPassword} /> <br />
                <button onClick = {handleLogin} >Login</button>
            </div>
        )
    }

    function renderShop() {
        return(
            <Shop isLoggedIn = {isLoggedIn}
            items = {items} />
        )
    }

    function renderAdmin(){
        return(
            <>
                <AdminPanel isLoggedIn = {isLoggedIn} accounts ={accounts}/>
            </>
        )
    }

    if(isLoggedIn === false){
        return renderLogin()
    }
    else{
        if(role === 'admin'){
            return renderAdmin()
        }
        else{
            return renderShop()
        }
    }
}