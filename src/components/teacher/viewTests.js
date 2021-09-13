import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import UseUploadFile from '../fileReader';
import Avatar from '@material-ui/core/Avatar';
import Header from '../header';
import { useHistory } from "react-router-dom";
import { getAllTestsFromServer } from "../../services/getAllTests"
import { viewTestsFromServer } from '../../services/viewTests';
import { previousLessonToServer } from '../../services/previousLessons';

const ViewTests = (props) => {

    const [tests, setTests] = useState([]);


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
            setTests(data)
        })
    }, [])

    // const { fileData, onfileChange } = UseUploadFile()
    let history = useHistory();

    function newTest() {
        history.push("/newTest");
    }
    function tst(test) {
        {
            console.log("test: " + test)
            // <table>
            //     <tr>
            //         <td class="td1">תלמידה</td>
            //         <td class="td2">ציון </td>
            //     </tr>


            //     {test?.map(st => (
            //         <tr>
            //             <td class="td2">   {st?.studentId}</td>
            //             <td class="td4">   {st?.mark}</td>
            //         </tr>
            //     ))}
            // </table>

        }
    }

    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <Header />

        <table>
            <tr>
                <td class="td1">נושא</td>
                <td class="td2">תאריך </td>
                <td class="td3">קובץ</td>
            </tr>


            {tests?.map(test => (
                <tr>
                    {/* <td  class="td1">   {test?.nameSubject}</td> */}
                    <button onClick={tst(test)}>{test?.nameSubject}</button>
                    <td class="td2"> {test?.date}</td>
                    <td class="td4"> {test?.file}</td>
                </tr>
            ))}
        </table>

        {/* <input type="file" onChange={onfileChange}></input> */}

        <button onClick={newTest}>מבחן חדש</button>
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

