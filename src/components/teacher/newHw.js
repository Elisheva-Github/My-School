
import React, { useState, useEffect } from 'react';
import '../../style/teacher/newClassRoom.css';
import { postHwToServer } from '../../services/postHw';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';
import UseUploadFile from '../fileReader';
import '../../style/teacher/newClassRoom.css'
//  ' ../style/teacher/newClassRoom.css';

const NewHw = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [numLesson, setNumLesson] = useState(0);
    const [nameSubject, setNameSubject] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile] = useState('');
    const { fileData, onfileChange } = UseUploadFile()
    // const { file, onfileChange } = UseUploadFile();
    const [comment, setComment] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    let a = history.location.state?.id;
    //id = history.location.state.id;
    console.log("aaa " + history.location.state?.id)
    // setNumLesson("5");
    // if (numLesson == 0)


    const postHw = async (numLesson, nameSubject, date, file, comment, question1, question2) => {
        debugger
        let res = '';

        res = await postHwToServer({ numLesson, nameSubject, date, file: fileData, comment, question1, question2, subject: props.subject });
        history.push("/hw");
        console.log(res);
        alert("test send to server👍👍👍")




    }
    // useEffect(() => setTeacher(history.location.state), [])

    return (
        <>
            <Avatar>{props.fname && props.fname[0]}</Avatar>
            <Header />
            <div class="all">
                <div className="aa "> יצירת ש.ב. חדש</div>

                <input type="text" className="a b" placeholder=":נושא"
                    value={nameSubject} onChange={(e) => {
                        console.log(e.target.value)
                        setNameSubject(e.target.value)
                    }} />

                <input type="file" className="a c" onChange={onfileChange}></input>

                <input type="date" className="a d"
                    value={date} onChange={(e) => {
                        console.log(e.target.value)
                        setDate(e.target.value)
                    }}
                />
                <input placeholder=" הכנס הערה" className="a e"
                    value={comment} onChange={(e) => {
                        console.log(e.target.value)
                        setComment(e.target.value)
                    }} />

                <input placeholder=" שאלה 1 " className="a f"
                    value={question1} onChange={(e) => {
                        console.log(e.target.value)
                        setQuestion1(e.target.value)
                    }} />

                <input placeholder=" שאלה 2 " className="a g"
                    value={question2} onChange={(e) => {
                        console.log(e.target.value)
                        setQuestion2(e.target.value)
                    }} />

                <button className="buttn" onClick={() => { postHw(history.location.state?.id ? history.location.state?.id : numLesson, nameSubject, date, file, comment, question1, question2) }}>  הוספה   </button>


                {/* {!history.location.state?.id &&
                    <input type="number" placeholder=":הכנס מס שעור"
                        value={numLesson} onChange={(e) => {
                            console.log(e.target.value)
                            setNumLesson(e.target.value)
                        }} />} */}
            </div>
        </>)
}


const mapStateToProps = (state) => {

    return {

        teacher: state.user?.user?.firstName,
        subject: state.user?.user?.subject,
        fname: state.user?.user?.firstName,

    };
};
export default connect(mapStateToProps, {})(NewHw);