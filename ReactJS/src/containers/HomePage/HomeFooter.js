import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import css files
// import "node_modulesslick-carousel/slick/slick.css";
// import "node_modulesslick-carousel/slick/slick-theme.css";


class HomeFooter extends Component {
    

render() {
   
    return (

        <div className='homeFooter'>
            <p>&copy; 2022 kevin Trần. <a target='blank' href='https://bookingcare.vn/'>More infomation, please visit my youtobe</a></p>
        </div>

    );
}

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
