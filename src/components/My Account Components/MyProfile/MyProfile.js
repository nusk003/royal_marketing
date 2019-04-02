import React,{Component} from 'react';
import Header from '../../Header Components/header';
import MyProfileContent from './MyProfileContent';
import loadScript from '../../loadScripts';


class MyProfile extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "My Profile"
    alert("this.props.getProfile.profile.name")
  }

    render(){

       
        return(
            <div>
            <Header/>
            <div className="offcanvas-wrapper">
            <MyProfileContent/>
            </div>
            <a className="scroll-to-top-btn" href="#">
            <i className="icon-arrow-up"></i>
            </a>
            <div className="site-backdrop"></div>
            </div>
        );
    }
}

export default MyProfile;