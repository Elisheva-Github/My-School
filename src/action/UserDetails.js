
export const saveUser = (user) => {
    return function (dispatch) {
        dispatch({ type: "save_user", payload:user });
    };
};

export const saveTeacher = (teacher) => {
    return function (dispatch) {
        dispatch({ type: "save_teacher", payload:teacher });
    };
};



