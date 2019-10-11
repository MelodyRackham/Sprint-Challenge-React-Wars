import React from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  color: red;
  font-size: 3rem;
  font-family: 'Mansalva', cursive;
`;

const DOB = styled.p`
  color: black;
  font-size: 1.5rem;
  font-family: 'Mansalva', cursive;
`;

const Gender = styled.p`
  color: yellow;
  font-size: 1.5rem;
  font-family: 'Mansalva', cursive;
`;

const SWCharacter = props => {
  return (
    <div>
      <Name>Hi My Name is: {props.name}</Name>
      <DOB>DOB: {props.DOB} </DOB>
      <Gender>Gender: {props.gender}</Gender>
    </div>
  );
};

export default SWCharacter;
