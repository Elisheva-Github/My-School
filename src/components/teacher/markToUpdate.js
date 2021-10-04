import React, { useState } from 'react';
import { postMarkToServer } from '../../services/postMark';
import { connect, useDispatch } from "react-redux";


const MarkToUpdate = (props) => {

    const [mark, setMark] = useState('');

    const postMark = async (id, mark, lesson) => {
        let teacherId = props.id;
        let marks = { id, mark };
        let data = await postMarkToServer(teacherId, marks, lesson);
        console.log("data", data);
    }

    return (<div>
        <table>
            <tr>
                <td class="td1"> student:  {props.student.firstName}</td>
                <td>   <input type="number" min="60" max="100"
                    value={mark}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setMark(e.target.value)
                    }}
                    placeholder='הכנס ציון'
                /></td>
                <td class="td2"> <button onClick={() => postMark(props.student._id, mark, props.lesson)}>
                    עדכון ציון
                </button></td>
            </tr>
        </table>
        {/* student:  {props.student.firstName}
        <input type="number" min="60" max="100"
            value={mark}
            onChange={(e) => {
                console.log(e.target.value)
                setMark(e.target.value)
            }}
            placeholder='הכנס ציון'
        />

        <button  onClick={() => postMark(props.student._id, mark, props.lesson)}>
            עדכון ציון
        </button> */}
    </div>

    )

}


const mapStateToProps = (state) => {
    return {
        id: state.user?.user?._id,
        fname: state.user?.user?.firstName,
    };
};
export default connect(mapStateToProps, {})(MarkToUpdate);

