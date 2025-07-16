import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import ListOfProfile from './components/ListOfProfile.jsx'
import AddCard from './components/AddCard.jsx'
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://127.0.0.1:3000/";
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`response status: ${response.status}`);
        };
        const json = await response.json();
        setData(json);
        setLoading(False);
      } catch (error) {
        setError(error)
      }
    }
    fetchData();
  }
  , [])
  
  return (<>
    <Header />
    <ListOfProfile data={data}/>
    <AddCard />
  </>)
}

export default App;
