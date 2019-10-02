import React, {Component} from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import Footer from '../Components/Footer';

class AboutPage extends Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <About />
                <Footer />
            </React.Fragment>
        )
    }
}

export default AboutPage;