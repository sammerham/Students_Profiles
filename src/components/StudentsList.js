import React from 'react';
import Student from './Student';


/*
 * StudentsList
 *
 * This is the page where you rednder a list of all students or filtered students 
 * State: none
 * props: 
      *students [{city: 'Fushë-Muhurr', company: 'Yadel', email: 'iorton0@imdb.com', firstName: 'Ingaberg', grades: [89, ...], …}, .....]
      * addStudentTags: fn to add tags into student
 * App ---->> StudentsList
 */


function StudentsList({ students, addStudentTags }) {
  return (
    <div>
      {students.map(student =>
        <Student key={student.id} student={student} addStudentTags={addStudentTags} />
      )}
    </div>
  )
}

export default StudentsList;
