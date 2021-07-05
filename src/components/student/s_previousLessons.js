import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { previousLessonToServer } from '../../services/previousLessons';
import {connect, useDispatch} from "react-redux";

const PreviousLessons = (props) => {
  let history = useHistory();
    const [lesss, setless] = useState();
    const [dd, setdd] = useState();

    console.log("his", history.location.state);
    // const viewPreviousLessonsToServer = async () => {
    //     const res = await previousLessonToServer();
    // }
    // useEffect(() => {
    //     // previousLessonToServer(userid) 
    //         // previousLessonToServer(student)
    //         let res = ''; 
    //         res = await previousLessonToServer(props.userId) 
    //         // console.log("lesss",dd)
    //          console.log("res",res)
    //         // // .then(data =>{debugger; (setless(data.result))})
    //         // .then(data =>{
                
    //         //     console.log(data);
    //         //      (setless(data))})

               
    // }, [])


// 

    return (
    // <div>
    //     <div>{
    //         lesss?.map(herLess=><div>
    //         {herLess?.numLesson?.numLesson}
    //         {herLess?.lessonName?.lessonName}
    //         {herLess?.file?.file}
    //         {herLess?.date?.date}
    //         {herLess?.notes?.notes}
    //         {herLess?.time?.time}
    //         </div>)}
    //     </div>
    // </div>
  //   {lesss.filter(ls => ls.subject === props.subject).map(herLess => (
  //     <li>
  //      {herLess?.numLesson?.numLesson}
  //           {herLess?.lessonName?.lessonName}
  //           {herLess?.file?.file}
  //            {herLess?.date?.date}
  //            {herLess?.notes?.notes}
  //            {herLess?.time?.time}
  //     </li>
  //   ))}


    <div>{props.userId}</div>
    )
}

//export default PreviousLessons;


const mapStateToProps = (state) => {
    
    return {
      // id:state.user?.user?.id,
      userId: state.user?.user?.id,
      fname: state.user?.user?.firstName,
      subject: state.user?.user?.subject,
    };
  };

  export default connect(mapStateToProps, {})(PreviousLessons);