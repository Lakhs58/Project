import React, {Component} from 'react';

import Header from '../Components/Header';
import Login from '../Components/Login';
import Footer from '../Components/Footer';

class LoginPage extends Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <Login />
                <Footer />
            </React.Fragment>
        )
    }
}

export default LoginPage;