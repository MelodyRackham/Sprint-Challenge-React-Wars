import React from 'react';

const SWCharacter = props => {
  return (
    <div>
      <h1>Hi My Name is: {props.name}</h1>
      <p>DOB: {props.DOB} </p>
      <p>Gender: {props.gender}</p>
    </div>
  );
};

export default SWCharacter;
