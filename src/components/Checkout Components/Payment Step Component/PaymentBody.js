import React,{Component} from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class PaymentBody extends Component{


    render(){

        return(

           
                <div>
                   <h4>Choose Payment Method</h4>
                    <hr className="padding-bottom-1x"/>
                    <RadioGroup
            
                      aria-label="Ringtone"
                      name="ringtone"
                      value={1}
                     
                    >
                      
                        <FormControlLabel value={1}  control={<Radio />} label={"Cash on Delivery"} />
                      
                    </RadioGroup>
                    <p className="text-muted">Note: We will call you after order has been placed to discuss about the delivery charge</p>
                </div>
           
           
    
        );
    }
}

export default PaymentBody;