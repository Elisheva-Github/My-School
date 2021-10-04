import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getAllHwFromServer } from '../../services/getAllHw';
import Avatar from '@material-ui/core/Avatar';
import Header from '../header';

const Hw = (props) => {

    const [hw, setHw] = useState([]);

    useEffect(async () => {

        getAllHwFromServer(props.subject).then((data) => {
            setHw(data)
        })
    }, [])


    let history = useHistory();

    function newHw() {
        history.push("/newHw");
    }

    return (<div>
        <Avatar>{props.fname && props.fname[0]}</Avatar>
        <Header />

        {<table>
            <tr>
                <td class="td1">שיעור</td>
                {/* <td class="td1"> ציון תלמיד וקובץ</td> */}
                <tr>
                            <td >קובץ </td>
                            <td class="td1">תלמיד </td>
                            <td class="td2"> ציון</td>
                        </tr>
            </tr>

            {hw?.map(m => (
                <tr>
                    <td>  {m.lessonName}</td>
                    {m['arrHw']?.map(n =>
                        <tr>
                            <td > <a href={n.file} download="h.w of student">⬇</a></td>
                            <td class="td1"> {n?.studentId}</td>
                            <td class="td2"> {n?.mark}</td>
                        </tr>)}
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
