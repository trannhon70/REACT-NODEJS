import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeFooter from './HomeFooter';
import Homeheader from './HomeHeader';
import './HomePage.scss';
import About from './Section/About';
import HandBook from './Section/HandBook';
import MedicalFacilty from './Section/MedicalFacilty';
import OutStandingDoctor from './Section/OutStandingDoctor';
import Speciality from './Section/Specialty';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        ></div>
    )
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        ></div>
    )
}
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div>
                <Homeheader />
                <Speciality
                    settings={settings}
                />
                <MedicalFacilty
                    settings={settings}
                />
               <OutStandingDoctor
               settings={settings}
               />
               <HandBook
               settings={settings}
               />
               <About />
               <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
