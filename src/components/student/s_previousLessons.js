import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { previousLessonToServer } from '../../services/previousLessons';
import {connect, useDispatch} from "react-redux";
import HeaderS from '../headerS';
import Avatar from '@material-ui/core/Avatar';
import '../../style/student/s_previousLessons.css';


const PreviousLessons = (props) => {
  let history = useHistory();
    const [lesss, setless] = useState();
    const res= history.location.state? history.location.state.res : [];
  useEffect(() => setless(res),[]);
 //   useEffect(() => setless(res22),[])
console.log("less",{lesss})
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
            // // .then(data =>{debugger; (setless(data.result))})
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
       <h1>
        <Avatar>{props.fname}</Avatar>
      </h1>
      {/* <HeaderS/>
    
       {res.filter(ls => ls.subject === props.subject).map(herLess => (
      <li>
       {herLess?.numLesson?.numLesson}
             {herLess?.lessonName?.lessonName}
            {herLess?.file?.file}
             {herLess?.date?.date}
            {herLess?.notes?.notes}
            {herLess?.time?.time}
       </li>
    ))}
 */}


<div className="Table_lessons">

<table>
  <tr>
    <td class="td1">שם המורה</td>
    <td  class="td2">מס' שיעור</td>
    <td  class="td3">נושא</td>
    <td class="td4">חומר לשיעור</td>
    <td class="td5">תאריך</td>
    <td class="td6">הערות</td>

  </tr>
  

 {res.filter(ls => ls.subject === props.subject).map(herLess => (
  <tr>
    <td class="td1">   {herLess?.numLesson?.numLesson}</td>
         <td class="td2">    {herLess?.lessonName?.lessonName}</td>
          <td class="td3">  {herLess?.file?.file}</td>
          <td class="td4">   {herLess?.date?.date}</td>
           <td class="td5"> {herLess?.notes?.notes}</td>
           <td class="td6"> {herLess?.time?.time}</td>

      </tr> 
 ))}
 
</table>

</div>






    </div>
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