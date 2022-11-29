import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/images/logo.svg'
import { FormattedMessage } from 'react-intl';
class HomeHeader extends Component {

    render() {
        console.log('check props', this.props);
        return (
            <Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fa fa-bars" ></i>
                            <img className='header-logo' src={logo} alt='...' />
                            
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div > <b> <FormattedMessage id="home-header.speciality" /> </b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div > <b>Cơ sở y tế</b></div>
                                <div className='subs-title'>Chọn bệnh viện phòng khám </div>
                            </div>
                            <div className='child-content'>
                                <div > <b>Bác sĩ</b></div>
                                <div className='subs-title'>Chọn gói bác sĩ</div>
                            </div>
                            <div className='child-content'>
                                <div > <b>Gói khám</b></div>
                                <div className='subs-title'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fa fa-question"></i>Hỗ trợ</div>
                            <div className='language-vi' >VN</div>
                            <div className='language-en' >EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title-1'>NỀN TẢNG Y TẾ</div>
                        <div className='title-2'>CHĂM SÓC SƯC KHỎE TOÀN DIỆN</div>
                        <div className='search'>
                            <i className="fa fa-search"></i>
                            <input type='text' placeholder='tìm chuyên khoa khám bệnh' />
                        </div>

                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='options-child'>
                                <div className='icon-child'>
                                    <i className="fa fa-hospital-alt"></i>
                                </div>
                                <div className='text-child'>
                                    Khám chuyên khoa
                                </div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'>
                                    <i className="fa fa-mobile-alt"></i>
                                </div>
                                <div className='text-child'>
                                    Khám từ xa
                                </div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'>
                                    <i className="fa fa-hospital"></i>
                                </div>
                                <div className='text-child'>
                                    Khám tổng quát
                                </div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'>
                                    <i className="fa fa-flask"></i>
                                </div>
                                <div className='text-child'>
                                    Xét nghiệm y học
                                </div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'>
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <div className='text-child'>
                                    Sức khỏe tinh thần
                                </div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'>
                                    <i className="fa fa-briefcase-medical"></i>
                                </div>
                                <div className='text-child'>
                                    Khám nha khoa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
