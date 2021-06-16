import React, { useState } from "react";

function Person({ person }) {
  const { id, name, image, status, city, DOB } = person; //kibontjuk az objectet ezert lejebb mar nem kell person.name,person.city.....

  const [show, setShow] = useState(true);

  function calculateAge(birthday) {
    // birthday is a date   -new date (DOB) adja oda
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch

    return Math.abs(ageDate.getUTCFullYear() - 1970); //1970 tol szamola a computer
  }
  return (
    <>
      {status === "active" && (
        <article key={id} className="person">
          <div className="members">
            {show ? (
              <>
                {" "}
                <img src={image} alt={name} />
                <h3>{name}</h3>
                {city && <h3>{city}</h3>}
                <p> {calculateAge(new Date(DOB))} years</p>
                <button onClick={() => setShow(!show)}>Hide </button>
              </>
            ) : (
              <button onClick={() => setShow(!show)}>Show {name} </button>
            )}
          </div>
        </article>
      )}
    </>
  );
}

export default Person;
