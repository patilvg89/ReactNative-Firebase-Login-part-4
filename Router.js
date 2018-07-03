import React from 'react';
import LoginForm from "./src/components/LoginForm";
import {Actions, Router, Scene, Stack} from "react-native-router-flux";
import EmployeeList from "./src/components/EmployeeList";
import EmployeeCreate from "./src/components/EmployeeCreate";


const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="auth" initial>
                    <Scene key="login" component={LoginForm} title="login"/>
                </Scene>

                <Scene key="main">
                    <Scene
                        onRight={() =>
                            Actions.employeeCreate()
                        }
                        rightTitle={"Add"}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees" initial/>

                    <Scene key="employeeCreate" component={EmployeeCreate} title={"Create Employee"}/>
                </Scene>
            </Stack>
        </Router>
    )
};


export default RouterComponent;