import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import UseUploadFile from '../fileReader';
import Avatar from '@material-ui/core/Avatar';
import Header from '../header';
import { useHistory } from "react-router-dom";
import { getAllTestsFromServer } from "../../services/getAllTests"
import { viewTestsFromServer } from '../../services/viewTests';
import { previousLessonToServer } from '../../services/previousLessons';
import MarkToUpdate from './markToUpdate';
import '../../style/student/s_previousLessons.css';

const ViewTests = (props) => {

    const [tests, setTests] = useState([]);
    const [show, setShow] = useState(false);
    const [oneTst, setOneTst] = useState();
    const [oneTstLessonName, setOneTstLessonName] = useState();


    // useEffect(async () => {
    //     
    //     getAllTestsFromServer().then((data) => {
    //         (setTests(data))
    //         
    //         console.log(tests);
    //     })
    // }, [])
    useEffect(async () => {
        viewTestsFromServer(props.subject).then((data) => {
            setTests(data);
            console.log("viewTests", tests);
        })
    }, [])

    // const { fileData, onfileChange } = UseUploadFile()
    let history = useHistory();

    function newTest() {
        history.push("/newTest");
    }

    //**** */
    function tst(test, lessonName) {
        console.log("test: " + test);
        setShow(true);
        setOneTst(test);
        setOneTstLessonName(lessonName);
    }
    console.log("oneTst", oneTst);


    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <Header />
        <div className="wrapper">
        <div className="tableR">
        <div class="pageTitle">
רשימת המבחנים:        </div>
        <br />
        {<table>
            <thead>
                <tr class="title">
                    <td class="td1">נושא</td>
                    <td class="td2">תאריך </td>
                </tr>
            </thead>

            {tests?.map(test => (
                <tr>
                    <td class="td1"> {test?.nameSubject}</td>
                    <td class="td2"> {test?.date.slice(0,10)}</td>
                    <button class="sendBtn" onClick={() => tst(test.marks, test?._id)}>הנבחנים</button>
                </tr>
            ))}
        </table>}
        </div>
        <div className="tableL">
        <div class="pageTitle">
ציוני התלמידים:        </div>
        <br />
        {<table>
            <thead>
                <tr class="title">
                    <td class="td1">תלמיד</td>
                    <td class="td2">ציון </td>
                </tr>
            </thead>
            {oneTst?.map(t => (
                <>
                    <MarkToUpdate type="Test" student={t?.studentId._id} studentName={t?.studentId.firstName} lesson={oneTstLessonName} mrk={t.mark}></MarkToUpdate>
                    {/* <tr>
                    <td class="td1"> {t?.studentId}</td>
                    <td class="td2"> {t?.mark}</td>
                </tr> */}
                </>
            ))}
        </table>}
        </div>
        <button className="sendBtn newTest"onClick={newTest}>מבחן חדש</button>

        </div>



        {/* <input type="file" onChange={onfileChange}></input> */}
        {/* <div>
            {show ? <div>

            </div>
        
        </div> */}


       
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fname: state.user?.user?.firstName,
        subject: state.user?.user?.subject,
    };
};
export default connect(mapStateToProps, {})(ViewTests);



