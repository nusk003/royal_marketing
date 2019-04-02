import React, { Component } from 'react';
import CartProduct from './CartProduct';
import { ClipLoader } from 'react-spinners';




class CartContent extends Component{


    token = localStorage.getItem('token')

    checkPromoCode = () => {
        if (localStorage.getItem('promoCode') != undefined){

            const promoCode = localStorage.getItem('promoCode')

                const cartTotal = this.props.cart.totalPrice

                if(this.token != undefined){
                
                    this.props.onApplyPromoCode(this.token,cartTotal,promoCode)
                }
                else{
    
                    this.props.onApplyPromoCode(null,cartTotal,promoCode)
    
                }
        }
    }
    render(){

        return(

        <div className="table-responsive shopping-cart">
            <table className="table">
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Unit Price</th>
                    <th className="text-center">Subtotal</th>
                    <th className="text-center">
                        
                    </th>
                    </tr>
                </thead>
                <tbody>
                {this.props.cart.loading ? 
                <div>
                <ClipLoader
               
                    sizeUnit={"px"}
                    size={50}
                    color={'#e8730d'}
               
               
               
                />
                </div>
                :    
                this.props.cart.cart.map((cartPro,i)=>
                
                    
                   <CartProduct
                   key={i}
                   CartProduct = {cartPro}
                   updateCart = {this.props.updateCart}
                   deleteCart = {this.props.deleteCart}
                   onQtyChange = {(token=null,cartProductId,qty)=>this.props.onUpdateQty(token,cartProductId,qty)}
                   onDelete = {(token=null,cartProductId)=>this.props.onDeleteCart(token,cartProductId)}
                   onGetCart = {(token=null)=>this.props.onGetCart(token)}
                   checkPromoCode = {() => this.checkPromoCode()}
                   index = {i}
                   
                />  
                       
                )
                }   
                </tbody>
            </table>
        </div>
        
        );
    }
}

export default CartContent;