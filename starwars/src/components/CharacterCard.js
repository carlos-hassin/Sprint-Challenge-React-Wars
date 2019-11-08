import React from "react";
import styled from "styled-components";

const Containerdiv = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
width:100%;
margin: 20px;
`;

const StylesDiv = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
flex-warp: wrap;
background-color: #808080;
width:30%;
`;


const AttributesDiv = styled.div`
z-index: 2
`;


const CharacterCard = props => {
  return (
    <Containerdiv>
      <StylesDiv>
        <div>
          <h1>{props.name}</h1>
          <AttributesDiv>
            <h2>Facts and Attributes</h2>
            <p>Birth year: {props.birth_year}</p>
            <p>Number of films: {props.films.length}</p>
            <p>Gender: {props.gender}</p>
            <p>Hair color: {props.hair_color}</p>
            <p>Skin color: {props.skin_color}</p>
          </AttributesDiv>
        </div>
      </StylesDiv>
    </Containerdiv>
  )
}

export default CharacterCard;