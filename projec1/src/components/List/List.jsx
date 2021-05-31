import React, {useEffect, useState} from 'react'
import data from "../../data";

function List({ people }) {

    const [clear, setClear] = useState('')

  return (
    <div className="list">
      {/*  {people.map((person)=>( <div>{ person.name}</div> ))} */}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <articl key={id} className="person">
            <div className="members">
              <img src={person.image} alt={name} />
              <h3>{person.name}</h3>
              <p> {person.age} years</p>
              <button onClick={()=>(setClear(people.filter((person)=>(person.id !== people.id))))}>Clear the one onClicked</button>
            </div>
           
          </articl>
        );
      })}
    </div>
  );
}

export default List;
