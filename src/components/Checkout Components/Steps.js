import React,{Component} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressBody from './Address Step Components/AddressBody';
import PaymentBody from './Payment Step Component/PaymentBody';
import PositionedSnackbar from './SelectAddressAlert'
import ConfirmOrder from './confirmOrder';





class VerticalLinearStepper extends Component {
 
    state = {
        activeStep: 0,
        address : "None",
        alertOpen : false,
        message : "",

    }
  steps = this.props.steps;

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressBody {...this.props} value={this.state.address} changeHandler={(event,newValue)=>this.changeHandler(event,newValue)}/>
      case 1:
        return <PaymentBody {...this.props}/>
      
      default:
        return 'Unknown step';
    }
  }

  handleClose = () => {

        this.setState({
            alertOpen : false,
            message : "",
            openConfirm : false
        })
  }

  setActiveStep = prevActiveStep => {
      this.setState({
          activeStep:prevActiveStep
      })
  }

  handleNext = () => {

    this.setActiveStep((this.state.activeStep+1));

    if(this.state.activeStep+1 === this.steps.length){
      this.setState({
        openConfirm: true
      })
    }
    
  }

  handleBack = () => {
    this.setActiveStep((this.state.activeStep)-1)
  }

    handleReset = () => {
    this.setActiveStep(0);
  }

  changeHandler = (event,newValue) =>{
    this.setState({
        address : newValue
    })

    const checkout = JSON.parse(localStorage.getItem('checkout'))
    checkout.deliverAddress = newValue
    localStorage.setItem('checkout',JSON.stringify(checkout))
}

    openAlert = (message) => {

        this.setState({
            alertOpen : true,
            message : message,
        })
    }

  render(){
    
   
  return (
    <div>
    <Stepper  activeStep={this.state.activeStep} alternativeLabel>
      {this.steps.map(label => (
        <Step  key={label}>
          <StepLabel >{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    <div>
      
        <ConfirmOrder open = {this.state.openConfirm} {...this.props} />
     
        <div>
          <Typography>{this.getStepContent(this.state.activeStep)}</Typography>
          <div>
            <Button
              disabled={this.state.activeStep === 0}
              onClick={this.handleBack}
            >
              Back
            </Button>
            {this.state.address != "None" ?
            <Button variant="contained" color="primary"  onClick={this.handleNext}>
            {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
            :
            <Button variant="contained" color="primary" onClick = {() => this.openAlert("Please select the Address")} >
              {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
            </Button>

            }
            <PositionedSnackbar
                open = {this.state.alertOpen}
                close = {this.handleClose}
                message = {this.state.message}
                vertical = {"bottom"}
                horizontal = {"center"}
           
            />
            
          </div>
        </div>
      
    </div>
  </div>
  );}
}

export default VerticalLinearStepper;