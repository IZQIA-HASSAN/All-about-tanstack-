import { useState  } from 'react'

import './App.css'
import { useQuery } from '@tanstack/react-query';


const Data = async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return await response.json();
}

function App() {
  const { data } = useQuery({
    queryKey: ['repoData'], //query key is used for fetcihing data and caching data 
    queryFn: Data


  })

  return (
    <>
      <div>i am learning tanstack query </div>

      <div>{JSON.stringify(data)}</div>
    </>
  )
}



export default App
