import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-Out-Standing-Doctor'>
                <div className='section-contener'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-Out-Standing-Doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-Out-Standing-Doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư</div>
                                        <div>Cơ xương khớp 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-Out-Standing-Doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư</div>
                                        <div>Cơ xương khớp 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-Out-Standing-Doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư</div>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-Out-Standing-Doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư</div>
                                        <div>Cơ xương khớp 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='section-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-Out-Standing-Doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư</div>
                                        <div>Cơ xương khớp 5</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
