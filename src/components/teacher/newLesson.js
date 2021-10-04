
import React, { useState, useEffect } from 'react';
import '../../style/teacher/newClassRoom.css';
import { postTestToServer } from '../../services/postTest';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';
import UseUploadFile from '../fileReader';
import '../../style/teacher/newClassRoom.css'

const NewLesson = (props) => {
    const dispatch = useDispatch();

    const [nameSubject, setNameSubject] = useState('');
    const [date, setDate] = useState('');
    const { file, onfileChange } = UseUploadFile()
    const [comment, setComment] = useState('');

    const history = useHistory()
    const postTest = async (nameSubject, date, file, comment) => {

        let res = '';

        res = await postTestToServer({ teacher: props.teacher, nameSubject, date, file, comment, subject: props.subject });

        console.log(res);
        alert("test send to server👍👍👍")

    }
    // useEffect(() => setTeacher(history.location.state), [])

    return (
        <>
            <Avatar>{props.fname && props.fname[0]}</Avatar>
            <Header />
            <div class="all">
                <div className="aa "> יצירת מבחן חדש</div>


                <input type="text" className="a c" placeholder=":נושא"
                    value={nameSubject} onChange={(e) => {
                        console.log(e.target.value)
                        setNameSubject(e.target.value)
                    }} />


                <input type="file" className="a d" onChange={onfileChange}></input>

                <input type="date" className="a e"
                    value={date} onChange={(e) => {
                        console.log(e.target.value)
                        setDate(e.target.value)
                    }}
                />
                <input placeholder=" הכנס הערה" className="a f"
                    value={comment} onChange={(e) => {
                        console.log(e.target.value)
                        setComment(e.target.value)
                    }} />

                <button className="buttn" onClick={() => postTest(nameSubject, date, file, comment)}>  הוספה   </button>

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
export default connect(mapStateToProps, {})(NewLesson);