import React from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  color: red;
  font-size: 3rem;
`;

const DOB = styled.p`
  color: black;
  font-size: 1.5rem;
`;

const Gender = styled.p`
  color: yellow;
  font-size: 1rem;
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
