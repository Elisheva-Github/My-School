import React, { useEffect, useState } from 'react';
import { previousLessonToServer } from '../../services/previousLessons';


const PreviousLessons = () => {


    const [lesss, setless] = useState();

    // const viewPreviousLessonsToServer = async () => {
    //     const res = await previousLessonToServer();

    // }

    useEffect(() => {
        // previousLessonToServer(userid) 
            // previousLessonToServer(student) 
            previousLessonToServer() 

            // .then(data =>{debugger; (setless(data.result))})
            .then(data =>{
                
                console.log(data);
                 (setless(data))})
                



    }, [])

    return (<div>
        <div>{
            lesss?.map(less=><div>
            {less?.numLesson?.numLesson}
            {less?.lessonName?.lessonName}
            {less?.file?.file}
            {less?.date?.date}
            {less?.notes?.notes}
            {less?.time?.time}
            </div>)}
        </div>
    </div>
    )
}

export default PreviousLessons;