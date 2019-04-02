import React,{Component} from 'react';
import { BeatLoader } from 'react-spinners';
import Order from './Order';
import {Switch,Route,BrowserRouter,Link} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';


import OrderDetails from './OrderDetails';
import LoginBody from '../../Login Component/LoginBody';

class MyOrders extends Component{
    state ={
        loading : true,
        modalOpen : false,
        OrderDetails : []
    }

    componentWillMount(){
        console.log(this.props)
        setTimeout(
            () => {
                this.setState({loading:false})
            }
        )
    }



    render(){
        
        return(
        !this.state.loading ?
            <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up"></div>
                <div className="table-responsive">
                    <table className="table table-hover margin-bottom-none">
                        <thead>
                        <tr>
                            <th>Invoice #</th>
                            <th>Date Purchased</th>
                            <th>Status</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {this.props.getMyOrders.orders.map((order,j)=>
                        
                            <Order
                            order = {order}
                            
                            />
                            
                            )}

                        
                        

                        </tbody>
                    </table>
                </div>
                <hr/>
                          
            </div>
        :

        <div style = {{textAlign:'center'}}>
            <BeatLoader
            size={50}
            />
        </div>

        );
    }
}

export default withMobileDialog()(MyOrders);