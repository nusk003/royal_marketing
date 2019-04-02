import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withRouter} from 'react-router-dom'
import { BeatLoader } from 'react-spinners';


class ConfirmOrder extends Component {

    state = {
        message : "Are you Agree to place your order",
        loading : false
    }
    componentWillMount(){
        console.log(this.props)
      }
      

    handleClose = () => {

        this.props.history.push('/cart')
    }

    agreeClickHandler = () => {

        const order = localStorage.getItem('checkout')
        if (localStorage.getItem('token') != undefined){
            this.setState({loading:true})
            this.props.onCreateOrder(localStorage.getItem('token'),JSON.parse(order))

            setTimeout(()=>{
                let message = ""
                if(this.props.createOrder.message != null){
                    message = this.props.createOrder.message
                }
                else{
                    message = "Something went wrong contact the Hotline"
                }
                this.setState({message:message,loading:false})
            },3000)
        }
        else{
            this.props.history.push('/login')
        }
    }

    componentWillReceiveProps (prevProps) {

      if(prevProps.createOrder.message != this.props.createOrder.message){
        //alert("cok")
        this.props.onGetCart(localStorage.getItem('token'))
      }

    }


  render(){
  return (
    <div>
      <Dialog
        open={this.props.open}
        disableBackdropClick
        disableEscapeKeyDown
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Create Order"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {!this.state.loading ?
            this.state.message
            :
            <BeatLoader
            size = {25}
            />
            }
          </DialogContentText>
        </DialogContent>
        
            {this.state.message == "Are you Agree to place your order" ?
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.agreeClickHandler} color="primary">
            Agree
          </Button>
        </DialogActions>
            :  
            <DialogActions>
            <Button onClick={() => this.props.history.push('/home')} color="primary">
            Go Home
          </Button>
          
        </DialogActions>
            
            }
          
      </Dialog>
    </div>
  );}
}

export default withRouter(ConfirmOrder);