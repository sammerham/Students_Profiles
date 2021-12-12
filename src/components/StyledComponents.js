import styled from 'styled-components';


// Create a StyledDivName component that'll render an <div> tag with some styles
export const StyledDivName = styled.div`
  display: flex;
`;
// Create a StyledName component that'll render an <h3> tag with some styles
export const StyledName = styled.h3`
  color: ${props => props.bg};
  font-size: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  position:absolute;
  left:200px;
`;

// Create a StyledExpanSign component that'll render an <span> tag with some styles
export const StyledExpanSign = styled.span`
position:absolute;
right:15px;
font-size:80px;
color:gray;
`;
// Create a StyledImage component that'll render an <img> tag with some styles
export const StyledImage = styled.img`
  width:150px;
  height:150px;
  border-radius:50%;
  border-width:20px;
  border-color:black;
  border:1px solid gray;
  background-color: white;
  margin-top:60px;
  margin-right:40px;
  position:absolute;
  left:20px;
`;
// Create a StyledInfoDiv component that'll render an <div> tag with some styles
export const StyledInfoDiv = styled.div`
  margin-top: 90px;
  line-height:1.9;
  position:relative;
  left:130px;
  display:inline-block;
`;

// Create a StyledTagInput component that'll render an <input> tag with some styles
export const StyledTagInput = styled.input`
font-size: 20px;
border-top: none;
border-left: none;
border-right: none;
border-color: lightgray;
margin-top:10px;
`;
// Create a StyledList component that'll render an <ul> tag with some styles
export const StyledList = styled.ul`
  list-style: none;
  position:relative;
  left:-40px;
`;
// Create a StyledDivTags component that'll render an <div> tag with some styles
export const StyledDivTags = styled.div`
  display: flex;
  width: 100;
`;
// Create a StyledDivTag component that'll render an <div> tag with some styles
export const StyledDivTag = styled.div`
  background-color: lightgray;
  display: flex;
  align-items:center;
  margin-right:10px;
  padding:4px;
  border-radius:20%;
`;

// Create a StyledSearchInput component that'll render an <input> tag with some styles
export const StyledSearchInput = styled.input`
  margin-top: 30px;
  width:98%;
  height:98%;
  padding:2px 23px 2px 30px;
  font-size:20px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: lightgray;
`;

// Create a StyledDivStudent component that'll render an <div> tag with some styles
export const StyledDivStudent = styled.div`
  display: flex;
  margin-left: 70px;
`;
