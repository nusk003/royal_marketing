import React,{Component} from 'react'
import ShippingBody from './ShippingBody';
import Sidebar from '../Sidebar';

class ShippingContent extends Component{

    render(){

        return(

            <div className="container padding-top-1x padding-bottom-3x">
        <div className="row">

        <ShippingBody/>
        <Sidebar/>

        </div>

</div>
        );
    }
}

export default ShippingContent;