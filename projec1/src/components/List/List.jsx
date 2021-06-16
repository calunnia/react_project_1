import React, {useEffect, useState} from 'react'
import Person from '../Person'

function List({ people }) {


  return (
    <div className="list">
      {people.map( (person,i) => <Person person={person} key={i.toString()} />  )}
    </div>
  );
}

export default List;
