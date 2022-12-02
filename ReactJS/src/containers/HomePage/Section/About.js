import React, { Component } from 'react';
import { connect } from 'react-redux';


class About extends Component {
    

render() {
   
    return (

        <div className='section-share section-about'>
           <div className='section-about-header'>
            Truyền thông nói gì về bạn
           </div>
           <div className='section-about-content'>
                <div className='content-left'>
                <iframe width="100%" height="420" src="https://www.youtube.com/embed/Ntm6M9LwjL4" title="SAO MÀ ĐỠ ĐƯỢC | Tổng hợp những khoảnh khắc hậu trường HÀI HƯỚC và KHÓ ĐỠ của Team ACTION C |" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='content-right'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
           </div>
           
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
