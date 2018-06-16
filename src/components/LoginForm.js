import React, {Component} from 'react'
import {Button, Card, CardSection, Input} from "./common"
import {connect} from 'react-redux';
import {emailChanged, loginUser, passwordChanged} from "../actions";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        //this.state = {error: '', loading: false};
    }

    mRenderButton() {
        if (this.props.loading) {
            return <Spinner size={'small'}/>
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

                {/*<Text style={styles.errorTextStyle}>{this.state.error}</Text>*/}

                <CardSection>
                    {this.mRenderButton()}
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);