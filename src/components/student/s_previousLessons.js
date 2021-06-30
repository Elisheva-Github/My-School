import React, { useEffect, useState } from 'react';
import { previousLessonToServer } from '../../services/previousLessons';
import {connect, useDispatch} from "react-redux";

const PreviousLessons = (props) => {


    const [lesss, setless] = useState();

    // const viewPreviousLessonsToServer = async () => {
    //     const res = await previousLessonToServer();

    // }

    useEffect(() => {
        // previousLessonToServer(userid) 
            // previousLessonToServer(student) 
            previousLessonToServer() 

            // .then(data =>{debugger; (setless(data.result))})
            .then(data =>{
                
                console.log(data);
                 (setless(data))})

               
    }, [])


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
    <div>
    {lesss.filter(ls => ls.subject === props.subject).map(herLess => (
      <li>
       {herLess?.numLesson?.numLesson}
            {herLess?.lessonName?.lessonName}
            {herLess?.file?.file}
             {herLess?.date?.date}
             {herLess?.notes?.notes}
             {herLess?.time?.time}
      </li>
    ))}
  </div>
    )
}

//export default PreviousLessons;


const mapStateToProps = (state) => {
    
    return {
      fname: state.user?.user?.firstName,
      subject: state.user?.user?.subject,
    };
  };

  export default connect(mapStateToProps, {})(PreviousLessons);