import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const Schedule =()=>
{
    const scheduleFromServer=()=>{
        //פניה לשרת
    }
    return(<div>
     <div>
         {scheduleFromServer()}
     </div>
    </div>
    )
}

export default Schedule;