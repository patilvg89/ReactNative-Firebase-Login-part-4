import React, {Component} from 'react';
import {Button, Card, CardSection} from "./common";
import {connect} from 'react-redux';
import EmployeeForm from "./EmployeeForm";
import {employeeSave, employeeUpdate} from "../actions";
import _ from 'lodash';

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value})
        })
    }

    onButtonPress() {
        const {name, phone, shift,} = this.props;
        console.log(name, phone, shift);
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    render() {

        return (
            <Card>

                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
            </Card>
        )
    }

}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeSave, employeeUpdate})(EmployeeEdit)

