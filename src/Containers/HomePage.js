import React, {Component} from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Footer from '../Components/Footer';

class HomePage extends Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <Banner />
                <About />
                <Footer />
            </React.Fragment>
        )
    }
}

export default HomePage;