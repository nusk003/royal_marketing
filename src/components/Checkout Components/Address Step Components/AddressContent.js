import React,{Component} from 'react'
import AddressBody from './AddressBody';
import Sidebar from '../Sidebar';

class AddressContent extends Component{

    render(){

        return(

            <div className="container padding-top-1x padding-bottom-3x">
        <div className="row">

        <AddressBody/>
        <Sidebar/>

        </div>

</div>
        );
    }
}

export default AddressContent;