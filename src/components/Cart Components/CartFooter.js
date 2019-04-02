import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import Verified from '../../assets/images/check-circle-solid.svg';

class CartFooter extends Component{

    token = localStorage.getItem('token')

    
    
    promoCodeChangeHandler = event => {
        this.setState({
            promoCode:event.target.value
        })
    }

    promoCodeSubmitHandler = event => {
        event.preventDefault()
       
        const promoCode = this.state.promoCode
        const cartTotal = this.props.cart.totalPrice
        //alert(cartTotal)
        //return
        if (this.token == undefined){
            this.props.onApplyPromoCode(null,cartTotal,promoCode)
        }
        else{
            this.props.onApplyPromoCode(this.token,cartTotal,promoCode)
        }
    }
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
   

    componentDidMount(){
        
       setTimeout(this.checkPromoCode,2000)
    }


    

	render(){
       
		return(
			<div>
			<div className="shopping-cart-footer">
            <div className="column">
            { this.props.applyPromoCode.discount == null ? 
                <form className="coupon-form" method="post" onSubmit={this.promoCodeSubmitHandler}>
                    <input className="form-control form-control-sm" onChange={this.promoCodeChangeHandler} type="text" placeholder="Promo Code" required />
                    <button className="btn btn-outline-primary btn-sm"  type="submit">
                    {!this.props.applyPromoCode.loading ? 
                    "Add Promocode"
                    :
                    <BeatLoader
                    
                    sizeUnit={"px"}
                    size={15}
                    color={'#e8730d'}
                    loading = {this.props.applyPromoCode.loading}
                    
                  />

                    }
                   
                    
                    </button>
                    {this.props.applyPromoCode.error != null ? 
                        <p>{this.props.applyPromoCode.error}</p>
                        :
                        null
                        }
                    
                </form>
                
            :

            <span><img src = {Verified} width={20} />  Promo Code Accepted</span>
            
            }
                
            </div>
            
            
            {this.props.applyPromoCode.discount != null ?
            
            <div className="column text-lg" >
            Total: <span className="text-medium">Rs.{this.props.cart.totalPrice.toFixed(2)}</span><br/>
            Discount: <span className="text-medium">-{this.props.applyPromoCode.discount.toFixed(2)}</span><br/>
            Net: <span className="text-medium">Rs.{(this.props.cart.totalPrice-this.props.applyPromoCode.discount).toFixed(2)}</span></div>
            
            :

            <div className="column text-lg" >Total: <span className="text-medium">Rs.{this.props.cart.totalPrice.toFixed(2)}</span></div>
            }
            
        </div>
        <div className="shopping-cart-footer">
            <div className="column">
                <Link className="btn btn-outline-secondary" to="/home"><i className="icon-arrow-left"></i>&nbsp;Back to Shopping</Link>
            </div>
            <div className="column">
                <Link className="btn btn-success" to="/checkout">Checkout</Link>
            </div>
        </div>
        </div>

			);
	}
}

export default CartFooter;