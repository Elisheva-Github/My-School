import React, { useState ,useEffect} from 'react';
import { useHistory } from "react-router-dom";
// import { previousLessonToServer } from '../../services/previousLessons';

import { getAllStudentsFromServer } from '../../services/getAllStudent';

const Tasks = () => {


  let history = useHistory();
  const [students, setStudents] = useState('');

   useEffect(async() => {
    
        getAllStudentsFromServer().then((data)=>{
            console.log("datadata", data);
             (setStudents(data))
        
        })
      },[])
       
        // .then(data =>{debugger; (setless(data.result))})

  function newMarksAndDiv() {
    newMarks()
    showDivNewMarks()
  }

  function viewMarksAndDiv() {
    viewMarks()
    showDivViewMarks()
  }

  const newMarks= async () => {
   // const login = async () => {
  
   // students = await getAllStudentsFromServer();
      console.log("res",students);

  //  }

    console.log("new");
  }

  function viewMarks() {
    console.log("view");
  }

  function showDivNewMarks() {

    document.getElementById("divViewMark").style.visibility = "hidden";

    document.getElementById("divNewMark").style.visibility = "visible";
  }

  function showDivViewMarks() {
    document.getElementById("divViewMark").style.visibility = "visible";

    document.getElementById("divNewMark").style.visibility = "hidden";
  }

  return (<div>

    <button onClick={() => newMarksAndDiv()}>  הכנס ציון חדש   </button>
    <button onClick={() => viewMarksAndDiv()}>  צפיה בציונים   </button>

    <div id="divViewMark" style={{ visibility: "hidden" }}>הצגת ציונים
    

        {students.map(st => (
          <li>
            {st?.firstName}
          </li>
        ))}
    </div>

    <div id="divNewMark" style={{ visibility: "hidden" }}>הכנסת ציונים חדשים

      </div>
  </div>

  );

}

export default Tasks;



