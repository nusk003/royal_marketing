import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class CartProduct extends Component{
    token = localStorage.getItem('token')
    styleOut = {}
    controlOut ={}
    styleload = {}
    state = {
        loading : false
    }
    qtyChangeHandler = event => {
        this.setState({loading:true})
        if(this.token == undefined){

            this.props.onQtyChange(null,this.props.index,event.target.value)

        }
        else{

            this.props.onQtyChange(localStorage.getItem('token'),this.props.CartProduct.cartProductId,event.target.value)
        }
        
        setTimeout(()=>{this.setState({loading:false})},500)

        setTimeout(this.props.checkPromoCode,2000)

    }
    
    deleteClickHandler = event => {

        event.preventDefault()
        this.setState({loading:true})
        if (this.token != undefined){
            this.props.onDelete(this.token,this.props.CartProduct.cartProductId)
        }
        else{
            this.props.onDelete(null,this.props.index)

        }
        setTimeout(()=>{this.setState({loading:false})},500)

        setTimeout(this.props.checkPromoCode,2000)
    }

    componentWillMount(){
        console.log(this.props.index)
        if(!this.props.CartProduct.isStock){
            this.styleOut = {fontStyle:'italic',color:'gray',opacity:0.5}
            this.props.CartProduct.qty = 0
        }

        if(this.props.deleteCart.loading || this.props.updateCart.loading){
            this.styleload = {
                opacity : 0.5
                
            }
        }
        
    }

    

    render(){

        const name = this.props.CartProduct.title.split(' ').join('-').toLowerCase();

        

        return(    
        <tr style={this.styleload}>
            <td>
                        <div className="product-item" >
                        <Link className="product-thumb" to={"/"+name+"/prid/"+this.props.CartProduct.id}>
                 
                            <img style={this.styleOut} src={this.props.CartProduct.Image} alt="Product" />

                        </Link>
                    <div className="product-info">
                        <h4 className="product-title" style={this.styleOut}><Link to={"/"+name+"/prid/"+this.props.CartProduct.id} >{this.props.CartProduct.title}</Link></h4>
                        {!this.props.CartProduct.isStock ? 
                           <p style={{color:'red',fontStyle:'italic'}}>Sorry this product is Currently out of stock</p>

                            :
                            null
                            }
                        {this.props.CartProduct.hasVariants ?
                            
                            this.props.CartProduct.selectedVariants.map((combValue,i)=>
                            
                            <span style={this.styleOut} key={i}><em>{combValue.variant}:</em> {combValue.value}</span>
                            )
                            
                            :
                            null
                            }
                    </div>
                </div>
                </td>

                <td className="text-center">
                <div className="count-input">
                {this.props.CartProduct.isStock ?

                    <input className="form-control" type="number"  min={1} onChange={this.qtyChangeHandler} defaultValue={this.props.CartProduct.qty} />

                    :
                    <input className="form-control" type="number"  value={0} />

                    }
                </div>
                </td>

                <td  className="text-center text-lg text-medium" >
                {this.props.CartProduct.Offer != null ? 
                    <span style={this.styleOut}>
                    <span className="text-muted" style={{textDecoration:'line-through'}}>Rs.{this.props.CartProduct.price.toFixed(2)}</span><br/>
                    Rs.{this.props.CartProduct.Offer.toFixed(2)} <br/>
                    <span className="text-muted" style={this.styleOut} >{(((this.props.CartProduct.price-this.props.CartProduct.Offer)/this.props.CartProduct.price)*100).toFixed(2)}%</span>
                    </span>
                    :
                    <span style={this.styleOut}>
                    Rs.{this.props.CartProduct.price.toFixed(2)}
                    </span>
                    
                    }
                
                        
                </td>

                <td  className="text-center text-lg text-medium" >
                {this.props.CartProduct.Offer != null ? 
                    <span style={this.styleOut}>
                    <span className="text-muted" style={{textDecoration:'line-through'}}>Rs.{(this.props.CartProduct.price*this.props.CartProduct.qty).toFixed(2)}</span><br/>
                    Rs.{(this.props.CartProduct.Offer*this.props.CartProduct.qty).toFixed(2)} <br/>
                    <span className="text-muted" >{(((this.props.CartProduct.price-this.props.CartProduct.Offer)/this.props.CartProduct.price)*100).toFixed(2)}%</span>
                    </span>
                    :
                    <span style={this.styleOut}>
                    Rs.{(this.props.CartProduct.price*this.props.CartProduct.qty).toFixed(2)}
                    </span>
                    
                    }
                
                        
                </td>
                    
                    
                    
                    
                
                <td className="text-center">
                    <a className="remove-from-cart" href="#" onClick={this.deleteClickHandler} data-toggle="tooltip" title="Remove item"><i className="icon-cross"></i></a>
                </td>

                

            </tr>
            
            

);    

}

}

export default CartProduct