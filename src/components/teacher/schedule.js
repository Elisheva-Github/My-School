import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../header';

const Schedule =()=>
{
    const scheduleFromServer=()=>{
        //פניה לשרת
    }
    return(<div>
    <Header />
     <div>
         {scheduleFromServer()}
     </div>
    </div>
    )
}

export default Schedule;