import React,{Component} from 'react'
import MyAddresses from '../../My Account Components/MyAddresses/MyAddressesBody';
import SelectAddress from './SelectAddress';

class AddressBody extends Component{



    render(){

        return(

            <div>
                
                <h4>Delivery Address</h4>
                <hr className="padding-bottom-1x"/>
                <MyAddresses {...this.props}/>
                <SelectAddress {...this.props} value = {this.props.value} changeHandler = {(event,newValue)=>this.props.changeHandler(event,newValue)} />
                
            </div>

        );
    }
}

export default AddressBody;