import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { viewTestsFromServer } from '../../services/viewTests'
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import HeaderS from '../headerS';
import { postMyFileToServer } from '../../services/postMark';
import UseUploadFile from '../fileReader';
import '../../style/student/s_previousLessons.css';

const ViewTests = (props) => {

    const [file, setFile] = useState('');
    const { fileData, onfileChange } = UseUploadFile()
    // const { file, onfileChange } = UseUploadFile()
    const [tests, setTests] = useState([]);
    // const [closeTest, setCloseTest] = useState(360);

    const postMyTestFile = async (lessonId, studentId, file) => {
        // debugger
        let res = '';
        // console.log(file);
        let type = "Test"
        res = await postMyFileToServer({ type, lessonId, studentId, file: fileData });
        console.log("postMyTestFileToServer", res);
    }



    // const postMyTestFile = async (lessonId, studentId, file) => {
    //     // debugger
    //     let res = '';
    //     // console.log(file);
    //     let type = "Test"
    //     res = await postMyFileToServer({ type, lessonId, studentId, file });
    //     console.log("postMyTestFileToServer", res);
    // }

    useEffect(async () => {
        viewTestsFromServer(props.subject).then((data) => {

            data = data.filter(x => new Date(x.date) - new Date() > 0 && new Date(x.date) - new Date() >= 30)
            data.sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            }
            )
            setTests(data);
        })
    }, [])




    return (<div>

        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <HeaderS />

        {/* {tests.map(tst => ( 
        <a href={tst.file} download="file">downloadTest</a> <iframe src={tst.file} frameborder="0"></iframe>
        )} */}

        {/* <a href={tests.file} download="file">downloadTest</a> <iframe src={tests.file} frameborder="0"></iframe> */}


        {/* <table>
                {tests?.map(t => (
                //     c = getDifferenceInDays(new Date(), t.date);
                // if ( c< closeTest)
                // setCloseTest(getDifferenceInDays(new Date(), t.date));
                <tr>

                    <td class="td1">   {t?.teacher}</td>

                </tr>
                ))}
            </table> */}

        <div className="table">


            <div class="pageTitle">
                המבחן הקרוב ביותר:        </div>
            <table>
                {/* צריך למיין לפי תאריך רק מ התאריך הנוכחי */}
                {<tr>

                    <td class="td1">   {tests[0]?.nameSubject}</td>
                    <td class="td3">   {tests[0]?.date.slice(0, 10)}</td>
                    {/* <td class="td4"> <a href={tests[0]?.file} download="file">download</a> <iframe src={tests[0]?.file} frameborder="0"></iframe></td> */}
                    <td class="td4"> <a href={tests[0]?.file} download="file">לחץ להורדה</a> </td>
                    <td>{<input type="file" onChange={onfileChange} placeholder="⬆" ></input>} </td>
                    <button class="sendBtn" onClick={() => postMyTestFile(tests[0]._id, props.id, file)}> שלח</button>
                </tr>}
            </table>
        </div>      
        <div className="table">

            <div class="pageTitle">
                בחודש הקרוב:        </div>
            <table>

                {tests?.slice(1).map(t => (
                    <tr>
                        <td class="td1">   {t?.nameSubject}</td>
                        <td class="td3">   {t?.date.slice(0, 10)}</td>
                        <td class="td4"> <a href={t?.file} download="file">לחץ להורדה</a> </td>
                        <td><input type="file" onChange={onfileChange} placeholder="⬆" ></input> </td>
                        <button class="sendBtn" onClick={() => postMyTestFile(t._id, props.id, file)}> שלח</button>
                    </tr>
                ))}
            </table>

        </div>

    </div>

    )
}

const mapStateToProps = (state) => {

    return {
        id: state.user?.user?._id,
        fname: state.user?.user?.firstName,
        subject: state.user?.user?.subject,
    };
};
export default connect(mapStateToProps, {})(ViewTests);
