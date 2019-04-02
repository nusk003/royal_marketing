import React,{Component} from 'react'

class Sidebar extends Component{

    render(){

        return(

            <div className="col-lg-3 order-sum">
                <aside className="sidebar">
                    <div className="hidden-lg-up"></div>
                    <section className="widget widget-order-summary">
                        <h3 className="widget-title">Order Summary</h3>
                        <table className="table">
                            <tr>
                                <td>Cart Subtotal:</td>
                                <td className="text-medium">Rs.{this.props.getCart.totalPrice}</td>
                            </tr>
                            {this.props.applyPromoCode.discount != null ? 
                                <tr>
                                <td>Promo Code Applied:</td>
                                <td className="text-medium">Rs.{this.props.applyPromoCode.discount}</td>
                            </tr>
                            :
                                null
                            }
                            
                           
                            <tr>
                                <td></td>
                                <td className="text-lg text-medium">Rs.{this.props.applyPromoCode.discount != null ? this.props.getCart.totalPrice-this.props.applyPromoCode.discount : this.props.getCart.totalPrice }</td>
                            </tr>
                        </table>
                    </section>
                  
                </aside>
            </div>
        );

    }
}

export default Sidebar;