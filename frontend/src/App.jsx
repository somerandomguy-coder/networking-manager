import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import ListOfProfile from './components/ListOfProfile.jsx'
import AddCard from './components/AddCard.jsx'
function App() {
  return (<>
    <Header />
    <ListOfProfile />
    <AddCard />
  </>)
}

export default App;
