import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Registration from '../Components/Registration';

class RegistrationPage extends Component{
    render(){
        return (
            <React.Fragment>
                 <Header />
                 <Registration />
                <Footer />
            </React.Fragment>
        )
    }
}

export default RegistrationPage;