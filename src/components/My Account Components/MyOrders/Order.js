import React,{Component} from 'react'
import { Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import OrderDetails from './OrderDetails';
import withMobileDialog from '@material-ui/core/withMobileDialog';


class Order extends Component{
    state = {
        modalOpen : false
    }
    onClose = () => {
        
        this.setState({
            modalOpen : false
        })
        console.log(this.state)
    }

    orderClickHandler = () => {
        this.setState({
            
            modalOpen : true
        })
    }
    render(){
        return(
            <tr >
                <td><a onClick={this.orderClickHandler} className="text-medium navi-link" href="#" data-toggle="modal" data-target="#orderDetails">{this.props.order.invoiceNo}</a></td>
                <td>{this.props.order.orderDate}</td>
                <td><span className="text-danger">{this.props.order.orderStatus}</span></td>
                <td><span className="text-medium">Rs.{this.props.order.totalAmount}</span></td>
                <Dialog
                        open={true} 
                        aria-labelledby="responsive-dialog-title" 
                        fullScreen={this.props.fullScreen} 
                        open ={this.state.modalOpen} 
                        onClose={this.onClose}
                        scroll = {'body'}
                        
                        >
                         <DialogTitle id="responsive-dialog-title">{"Invoice No: "+this.props.order.invoiceNo}
                         
                         </DialogTitle>
                         <DialogContent>
                           <OrderDetails  details = {this.props.order.orderProducts}/>
                        </DialogContent>

                        <DialogActions>
                        <Button onClick={this.onClose} color="primary">
                            Close
                        </Button>
                        </DialogActions>

                </Dialog>
            </tr>
        );
    }
}

export default withMobileDialog()(Order)