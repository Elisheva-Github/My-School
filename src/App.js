import React, { useEffect } from "react";
import Login from './components/login';
import TeacherEnter from './components/teacher/teacherEnter';
import StudentEnter from './components/student/studentEnter';
import NewClassRoom from './components/teacher/newClassRoom';
import ViewAttendance from './components/teacher/viewAttendance';
import Schedule from './components/teacher/schedule';
import ViewTasks from './components/teacher/viewTasks';
import ViewTests from './components/teacher/viewTests';
import PreviousLessons from './components/teacher/previousLessons';
import ForgotPassword from './components/forgotPassword';
import Signup from './components/signup';
import S_previousLessons from './components/student/s_previousLessons';
import S_schedule from './components/student/s_schedule';
import S_viewTests from './components/student/s_viewTests';
import ViewHw from './components/student/viewHw';
import ViewMarks from './components/student/viewMarks';
import Admin from './components/admin';
import Zoom from './components/zoom';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/teacher">
          <TeacherEnter />
        </Route>
        <Route path="/student">
          <StudentEnter  />
        </Route>
        <Route path="/previousLessons">
          <PreviousLessons />
        </Route>
        <Route path="/newClassRoom">
          <NewClassRoom />
        </Route>
        <Route path="/attendance">
          <ViewAttendance />
        </Route>
        <Route path="/tasks">
          <ViewTasks />
        </Route>
        <Route path="/tests">
          <ViewTests />
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>

        <Route path="/s_previousLessons">
          <S_previousLessons />
        </Route>
        <Route path="/s_schedule">
          <S_schedule />
        </Route>
        <Route path="/viewHw">
          <ViewHw />
        </Route>
        <Route path="/viewMarks">
          <ViewMarks />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/zoom">
          <Zoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;