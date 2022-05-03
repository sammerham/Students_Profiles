import { React, useState, useMemo } from 'react';
import {
  StyledTagInput,
  StyledName,
  StyledExpanSign,
  StyledInfoDiv,
  StyledDivTags,
  StyledDivTag,
  StyledImage,
  StyledList,
  StyledDivStudent,
  StyledDivName,
} from './StyledComponents';


/*
 * Student
 *
 * This is the page where you rednder all info about single student
 * State: clicked : null or studentId
 *        newTag: str
 * props:
      *student {city: 'Fushë-Muhurr', company: 'Yadel', email: 'iorton0@imdb.com', firstName: 'Ingaberg', grades: [89, ...], …}
      * addStudentTags: fn to add tags into student
 * App ---->> StudentsList ----> Student
 */


function Student({ student, addStudentTags}) {
  const [clicked, setClicked] = useState(null);
  const [newTag, setNewTag] = useState('');
  const { email, firstName, lastName, pic, skill, grades, company, id , tags=[]} = student;

  // calculate avg score from grades - sum / length
  const average = useMemo(()=> grades.reduce((acc, n) => acc + (+n), 0) / grades.length, [grades])
   
  // fn to toggle clicked state 
  const toggle = id => {
    if (clicked === id) {
      setClicked(null)
    } else {
      setClicked(id)
    }
  }

  // handle change tag
  const handleChange = e => {
    const { value } = e.target;
    setNewTag(value);
  };

  // fn to add tag into tags 
  const addA_Tag = t => {
    const updatedTags = [...tags, t]
    addStudentTags(id, updatedTags);
  };

  // fn submit form
  const handleSubmit = e => {
    e.preventDefault();
    addA_Tag(newTag);
    setNewTag('')
  };

  return (
    <StyledDivStudent>
      {/* student image */}
      <StyledImage src={pic} alt="student image" />
      {/* sub container that has student info */}
      <div>
        <StyledDivName>
          <StyledName bg={'black'}>{firstName} {lastName}</StyledName>
          <StyledExpanSign onClick={() => toggle(id)}>{clicked === id ? '-' : '+'} </StyledExpanSign>
        </StyledDivName>

        <StyledInfoDiv >
          <div><b>Email:</b> {email}</div>
          <div><b>Company:</b> {company}</div>
          <div><b>Skill:</b> {skill}</div>
          <div><b>Average:</b> {average.toFixed(2)} % </div>
     
          {clicked &&
            <StyledList>
            {grades.map((grade, i) => <li key={i}>Test {i + 1}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grade}%</li>)}
            </StyledList>
          }

          <StyledDivTags>
            {(tags.length > 0) && tags.map((t, i) => (
              <StyledDivTag key={i} >{t}</StyledDivTag>
            ))}
          </StyledDivTags>

          <form onSubmit={handleSubmit}>
            <StyledTagInput
            type="text"
            name="tag"
            id="tag"
            placeholder="Add a tag"
            value={newTag}
            onChange={handleChange}
            />
          </form>
        </StyledInfoDiv>   
      </div>
    </StyledDivStudent>
  )
}

export default Student;
