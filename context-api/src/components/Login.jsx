import styles from './Login.module.css'

import { UserContext } from '../context/UserContext'
import { useContext, useState } from 'react'
function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const errorMessage = validate(username,password)

  const userContext = useContext(UserContext) 
  console.log(userContext)
  return (
    <form className={styles.form} onSubmit={e => {
        e.preventDefault()
        login(username)
    }}>
        <h2 className={styles.text}>Login</h2>
        <div>
            <label htmlFor="user">Username</label>
            <input className={styles.input} type="text" id='user' name='username' value={username} 
            onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input className={styles.input} type="password" name='password' value={password} 
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <p>{errorMessage}</p>
        <button type='submit' disabled={errorMessage}>Login</button>
    </form>
  )
}

const validate = (username,password) => {
    if(username.length < 8) return 'Username debe tener una longitud mayor a 7'
    if(!password.includes('@')) return 'Formato de password incorrecto. Debe contener un @'
}

const login = (username) => {
    alert('Bienvenido ' + username)
}

export default Login