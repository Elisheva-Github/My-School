
export const saveUser = (user) => {
    return function (dispatch) {
        dispatch({ type: "save_user", payload:user });
    };
};

