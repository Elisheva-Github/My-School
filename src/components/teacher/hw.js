import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getAllHwFromServer } from '../../services/getAllHw';
import Avatar from '@material-ui/core/Avatar';
import Header from '../header';
import MarkToUpdate from './markToUpdate';

const Hw = (props) => {

    const [hw, setHw] = useState([]);
    const [oneHw, setOneHw] = useState();
    const [oneHwLessonName, setOneHwLessonName] = useState();

    useEffect(async () => {

        getAllHwFromServer(props.subject).then((data) => {
            setHw(data)
        })
    }, [])


    let history = useHistory();

    function newHw() {
        history.push("/newHw");
    }

    function hwStudents(hw, lessonName) {
        console.log("hw: " + hw);
        setOneHw(hw);
        setOneHwLessonName(lessonName);
    }
    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <Header />

        {<table>
            <tr>
                <td class="td1">שיעור</td>
                {/* <td class="td1"> ציון תלמיד וקובץ</td> */}
                <tr>
                    <td >הנבחנים </td>
                    {/* <td class="td1">תלמיד </td>
                    <td class="td2"> ציון</td> */}
                </tr>
            </tr>

            {hw?.map(m => (
                <tr>
                    <td>  {m.lessonName}</td>
                    {/* {m['arrHw']?.map(n =>
                        <tr>
                            <td > <a href={n.file} download="h.w of student">⬇</a></td>
                            <td class="td1"> {n?.studentId}</td>
                            <td class="td2"> {n?.mark}</td>
                        </tr>)} */}
                    <button onClick={() => hwStudents(m?.arrHw, m?._id)}>הנבחנים</button>
                </tr>
            ))}
        </table>}

        {/* {<table>
            <tr>
                <td class="td1">קובץ </td>
                <td class="td1">תלמיד </td>
                <td class="td2"> ציון</td>
            </tr>

            {oneHw?.map(m => (
                <tr>

                    <td > <a href={m.file} download="h.w of student">⬇</a></td>
                    <td class="td1"> {m?.studentId}</td>
                    <td class="td2"> {m?.mark}</td>
                </tr>
            ))}
        </table>} */}

        {<table>
            <thead>
                <tr>
                    <td class="td1">קובץ</td>
                    <td class="td2">ציון </td>
                </tr>
            </thead>
            {oneHw?.map(t => (
                <tr>
                    <td > <a href={t.file} download="h.w of student">⬇</a></td>
                    <MarkToUpdate type="Lessons" student={t?.studentId._id} studentName={t?.studentId.firstName} lesson={oneHwLessonName} mrk={t.mark}></MarkToUpdate>
                    {/* <tr>
                    <td class="td1"> {t?.studentId}</td>
                    <td class="td2"> {t?.mark}</td>
                </tr> */}
                </tr>
            ))}
        </table>}

        <button onClick={newHw}> שעורי בית חדשים </button>
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

export default connect(mapStateToProps, {})(Hw);
