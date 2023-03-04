import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { UsersForm } from './components/Form'
import { UsersList } from './components/List'

function App() {

  return (
    <div className="App">
      <UsersForm></UsersForm>
      <UsersList></UsersList>
    </div>
  )
}

export default App
