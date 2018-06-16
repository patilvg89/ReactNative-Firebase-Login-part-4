import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from "./src/components/common";
import LoginForm from "./src/components/LoginForm";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './src/reducers';

export default class App extends Component<Props> {

    initializeFirebase() {
        firebase = require("firebase");
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCT0zNcnU_nMmd2ZvjAkzhCkfAkvXb4FUU",
            authDomain: "my-society-app.firebaseapp.com",
            databaseURL: "https://my-society-app.firebaseio.com",
            projectId: "my-society-app",
            storageBucket: "my-society-app.appspot.com",
            messagingSenderId: "56805290687"
        };
        firebase.initializeApp(config);
    }

    componentWillMount() {
        this.initializeFirebase();
    }

    render() {
        const ReduxThunk = require('redux-thunk').default;
        // const applyMiddleware = require('redux');
        const store = createStore(reducers, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View>
                    <Header headerText={'Login'}/>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }


}
