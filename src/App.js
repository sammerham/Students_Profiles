import axios from 'axios';
import { React, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import StudentsList from './components/StudentsList';

const URL = 'https://api.hatchways.io/assessment/students'


function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTag, setSearchTag] = useState('');


  // fetch data from API on first render
  useEffect(() => {
    async function fetchData() {
      const res = await (await axios.get(URL)).data.students;
      setStudents(students => res);
    }
    fetchData();
  }, []);


  // fn to add to tags to student

  const addStudentTags = (id, tags) => {
    setStudents(students => students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          tags
        }
      }
      return {
        tags: [],
        ...student,
      };
    }))
  };

  // fn to handle change for search by tag
  const handleChangeTag = e => {
    const { value } = e.target;
    setSearchTag(value.trim());
  };

  // fn to handle change for search by name
  const handleChangeSearch = e => {
    const { value } = e.target;
    setSearchTerm(value.trim());
  };

  //* Filter all students that match searchTerm AND searchTag
  const newstudents = students.filter(student => {
    const hasFirst = searchTerm && student.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    const fullName = student.firstName.toLowerCase() + " " + student.lastName.toLowerCase();
    const hasFullName = searchTerm && fullName.includes(searchTerm.toLowerCase());
    const hasLast = searchTerm && student.lastName.toLowerCase().includes(searchTerm.toLowerCase());

    // if search terms is empty, show all students
    if (searchTerm === '') {
      return true;
    }
    // if search term has full name, show student that matches that name;

    if (hasFullName) {
      return hasFullName;
    }

    // if anything matches, show it
    if (searchTerm !== '') {
      return hasFirst || hasLast;
    }
    // Filter these results if there is a search tag
  }).filter(student => {
    const hasTags = student.tags?.some(t => t.toLowerCase().includes(searchTag.toLowerCase()));
    // if search tag is empty, show all students
    if (searchTag === '') {
      return student;
    }
    // if anything matches, show it
    if (searchTag !== '') {
      return hasTags;
    }
  });

  return (
    <div className="App">
      <SearchBar handleChangeSearch={handleChangeSearch} handleChangeTag={handleChangeTag} />
      <StudentsList students={newstudents} addStudentTags={addStudentTags} />
    </div>
  );
}

export default App;
