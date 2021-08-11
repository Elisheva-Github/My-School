// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';

const ViewAttendance =()=>
{
    const viewAttendanceFromServer =()=>{
        //פניה לשרת
    }
    return(<div>
         {/* <h1>
            <Avatar>{props.fname}</Avatar>
        </h1> */}
         <Header />
     <div>
         {viewAttendanceFromServer()}
     </div>
    </div>
    )
}

export default ViewAttendance;