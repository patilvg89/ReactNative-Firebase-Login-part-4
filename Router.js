import React from 'react';
import LoginForm from "./src/components/LoginForm";
import {Router, Scene, Stack} from "react-native-router-flux";


const RouterComponent = () => {
    return (
        <Router hideNavBar="true">
            <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={LoginForm} title="login" initial={true}/>
            </Stack>
        </Router>
    )
};


export default RouterComponent;