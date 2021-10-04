import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { previousLessonToServer } from '../../services/previousLessons';
import { connect, useDispatch } from "react-redux";
import HeaderS from '../headerS';
import Avatar from '@material-ui/core/Avatar';
import '../../style/student/s_previousLessons.css';


const PreviousLessons = (props) => {
  let history = useHistory();
  const [lesss, setless] = useState();

  useEffect(() => previousLessonToServer(props.subject).then(res => setless(res)).catch(err => alert(err)), [])



  useEffect(() => setless(history.location.state?.res || []), [history.location]);
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
      <HeaderS />
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
            <td class="td2">מס' שיעור</td>
            <td class="td3">נושא</td>
            <td class="td4">חומר לשיעור</td>
            <td class="td5">תאריך</td>
            <td class="td6">הערות</td>

          </tr>


          {lesss?.map(herLess => (
            //  {lesss.filter(ls => ls.subject === props.subject).map(herLess => (
            <tr>
              <td class="td1">   {herLess?.teacher}</td>
              <td class="td2">   {herLess?.numLesson}</td>
              <td class="td3">    {herLess?.lessonName}</td>
              <td class="td4"> <a href={herLess.file} download="file">download</a> <iframe src={herLess.file} frameborder="0"></iframe></td>
              <td class="td5">   {herLess?.date}</td>
              <td class="td6"> {herLess?.notes}</td>


            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    // id:state.user?.user?.id,
    userId: state.user?.user?.id,
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
  };
};

export default connect(mapStateToProps, {})(PreviousLessons);