import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';
import { previousLessonToServer } from '../../services/previousLessons';


const PreviousLessons = (props) => {
  // 
  let history = useHistory();
  const [lesss, setless] = useState([]);
  // const res = history.location.state ? history.location.state.res : [];
  useEffect(() => previousLessonToServer(props.subject).then(res => setless(res)).catch(err => alert(err)), [])


  function newLesson() {
    history.push("/newLesson");
  }
  function goToHw(id) {
    history.push("/newHw", {id:id});
  }

  // useEffect(() => setless(res), []);
  //   useEffect(() => setless(res22),[])
  console.log("less", { lesss })
  // console.log("his", history.location.state);
  // const viewPreviousLessonsToServer = async () => {
  //     const res = await previousLessonToServer();
  // }
  //   useEffect(() => {
  // previousLessonToServer(userid) 
  // previousLessonToServer(student)
  //   let res22 = ''; 
  //  res22 =  previousLessonToServer() 
  // console.log("lesss",dd)
  //      console.log("res22",res)
  // // .then(data =>{; (setless(data.result))})
  // .then(data =>{

  //     console.log(data);
  //      (setless(data))})


  //   }, [])


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


    <div>
      <Avatar>{props.fname && props.fname[0]}</Avatar>
      <Header />

      {lesss.map(herLess => (
        <li>
          {herLess?.numLesson}
          {herLess?.lessonName}
          {herLess?.file}
          {herLess?.date}
          {herLess?.notes}
          {herLess?.time}
        {  <button onClick={()=>goToHw(herLess._id)}></button>}
        </li>
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {

  return {
  
    userId: state.user?.user?.id,
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
  };
};

export default connect(mapStateToProps, {})(PreviousLessons);