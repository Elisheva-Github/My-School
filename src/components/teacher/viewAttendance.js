// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import Header from '../header';

const ViewAttendance =()=>
{
    const viewAttendanceFromServer =()=>{
        //פניה לשרת
    }
    return(<div>
         <Header />
     <div>
         {viewAttendanceFromServer()}
     </div>
    </div>
    )
}

export default ViewAttendance;