
import './App.css';
import { useEffect,useState } from 'react';

import Cards from './Components/Cards';

function App() {

  const fetchData = ()=>{
    fetch("https://api.tvmaze.com/search/shows?q=all")
    .then((res)=> res.json())
    .then((data)=> setMovieData(data))
  }

  const [movieData, setMovieData] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
      <Cards data = {movieData}/>
    </div>
  );
}

export default App;
