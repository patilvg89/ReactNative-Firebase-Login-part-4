import React, {Component} from 'react'
import {Button, Card, CardSection, Input, Spinner} from "./common"
import {connect} from 'react-redux';
import {emailChanged, loginUser, passwordChanged} from "../actions";
import {Text} from "react-native";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        //this.state = {error: '', loading: false};
    }

    mRenderButton() {
        if (this.props.loading) {
            return <Spinner size={'large'}/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const {email, password} = this.props;
        console.log(email + '-' + password + ' Login Form');
        this.props.loginUser({email, password});
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder={'email'}
                        autoCorrect={false}
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder={'password'}
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}/>
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.props.error}</Text>

                <CardSection>
                    {this.mRenderButton()}
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);