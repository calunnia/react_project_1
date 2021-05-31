import './App.css'
import React, {useEffect, useState} from 'react'
import List from './components/List/List.jsx'
import data from './data.js'

const App = () => {

const [people, setPeople] = useState(data)



  return (
    <div className="App">
      <section>
      <h1>Birthday Remainder</h1>
      <h3>{people.length} Birthday today</h3>
      <List people={people}/>
      <button onClick={()=>(setPeople([]))}>Clear All</button>
     
      </section>

    </div>
  )
}

export default App
