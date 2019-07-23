import React from 'react'
import PageHeader from '../PageHeader';
import Footer from '../Footer components/footer';
import loadScript from '../loadScripts';

class AboutUs extends React.Component{
    componentWillMount() 
        {
        const load = new loadScript()
        load.linkScripts()

        document.title = "About Us"
    }
    render(){
        const {aboutUs} = this.props
        return(
            <div>
    <PageHeader name="About us" bread = "About us" />
   
    <div class="container">
        {
            aboutUs.map((about,i)=>
            <div>
            <div class="row align-items-center padding-bottom-3x">
            <div class="col-md-5">
                <img class="d-block w-270 m-auto" src={about.image} alt="Online Shopping"/>
            </div>
            <div class="col-md-7 text-md-left text-center">
                <div class="hidden-md-up"></div>
                <h2>{about.title}</h2>
                <p>{about.description}</p>
            </div>
        </div>
        <hr/>
        </div>
            )
        }
        
        {/* <hr/>
        <div class="row align-items-center padding-top-3x padding-bottom-3x">
            <div class="col-md-5 order-md-2">
                <img class="d-block w-270 m-auto" src="assets/images/features/02.jpg" alt="Delivery"/>
            </div>
            <div class="col-md-7 order-md-1 text-md-left text-center">
                <div class="hidden-md-up"></div>
                <h2>Fast & Free Delivery</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters ...</p>
            </div>
        </div>
        <hr/> */}
        
        {/* <div class="row padding-top-3x padding-bottom-3x">
            <div class="col-md-3 col-sm-6 text-center home-cat"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="assets/images/team/01.jpg" alt="Team"/>
                <h6>Julia Roberts</h6>
                <p class="text-muted mb-2">Founder, CEO</p>
                <div class="social-bar">
                    <a class="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="socicon-facebook"></i></a>
                    <a class="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="socicon-twitter"></i></a>
                    <a class="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i class="socicon-googleplus"></i></a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 text-center home-cat"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="assets/images/team/02.jpg" alt="Team"/>
                <h6>Tony Stark</h6>
                <p class="text-muted mb-2">Founder, CTO</p>
                <div class="social-bar">
                    <a class="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="socicon-facebook"></i></a>
                    <a class="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="socicon-twitter"></i></a>
                    <a class="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i class="socicon-googleplus"></i></a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 text-center home-cat"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="assets/images/team/03.jpg" alt="Team"/>
                <h6>Rick Armstrong</h6>
                <p class="text-muted mb-2">Founder, CEO</p>
                <div class="social-bar">
                    <a class="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="socicon-facebook"></i></a>
                    <a class="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="socicon-twitter"></i></a>
                    <a class="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i class="socicon-googleplus"></i></a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 text-center home-cat"><img class="d-block w-150 mx-auto img-thumbnail rounded-circle mb-2" src="assets/images/team/04.jpg" alt="Team"/>
                <h6>Julia Doe</h6>
                <p class="text-muted mb-2">Founder, CTO</p>
                <div class="social-bar">
                    <a class="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="socicon-facebook"></i></a>
                    <a class="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="socicon-twitter"></i></a>
                    <a class="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i class="socicon-googleplus"></i></a>
                </div>
            </div>
        </div> */}
    </div>
</div>
        )
    }
}

export default AboutUs