import React, {Component} from 'react';
import {AlertModal, Button, Card, CardSection} from "./common";
import {connect} from 'react-redux';
import EmployeeForm from "./EmployeeForm";
import {employeeDelete, employeeSave, employeeUpdate} from "../actions";
import _ from 'lodash';
import phoneManager from 'react-native-communications';

class EmployeeEdit extends Component {

    state = {showModal: false};

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

    onSendMessage() {
        const {phone, shift} = this.props;
        phoneManager.text(phone, `Your upcoming shift is on ${shift}`)
    }

    onAccept() {
        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline() {
        this.setState({showModal: false})
    }

    render() {

        return (
            <Card>

                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onSendMessage.bind(this)}>Send Message</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>Delete User</Button>
                </CardSection>

                <AlertModal
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete?
                </AlertModal>
            </Card>
        )
    }

}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeSave, employeeUpdate, employeeDelete})(EmployeeEdit)

