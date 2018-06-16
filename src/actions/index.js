import {EMAIL_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from "./types";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({email, password}) => {

    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('User logged in success');
                loginUserSuccess(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        console.log('User create in success');
                        loginUserSuccess(dispatch, user);
                    })
                    .catch(error => {
                        console.log('User logged in failed=' + error);
                    })
            })
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: 'LOGIN_USER_SUCCESS', payload: user});
};