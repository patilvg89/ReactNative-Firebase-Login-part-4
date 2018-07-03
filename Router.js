import React from 'react';
import LoginForm from "./src/components/LoginForm";
import {Router, Scene, Stack} from "react-native-router-flux";
import EmployeeList from "./src/components/EmployeeList";


const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="auth" initial>
                    <Scene key="login" component={LoginForm} title="login"/>
                </Scene>

                <Scene key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees"/>
                </Scene>
            </Stack>
        </Router>
    )
};


export default RouterComponent;