import React,{Component} from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import {Link} from 'react-router-dom'


class ProductCard extends Component {
    state = {
        isInCart : null,
        addToCartLoading : false
    }
    styleOut = {}
    componentDidMount(){
        this.checkCart()
    }
    componentWillMount(){
        if(!this.props.product.isStock){
            this.styleOut = {
                fontStyle : 'italic',
                opacity : 0.5
            }
        }
 
    }

    checkCart = () => {
        if(this.props.getCart.cart != null){
        if(this.props.getCart.cart.filter(cartItem => cartItem.id == this.props.product.id).length != 0){
            this.setState({isInCart:true})
        }
        else{
            this.setState({isInCart:false})
        }
    }
    }

    onAddToCart = event => {
        event.preventDefault()
        if(localStorage.getItem('token') == undefined){
            
            let variants = null
            let proVarId = null

            if(this.props.product.hasVariants){
                variants = this.props.product.combination.variants
                proVarId = this.props.product.combination.id
            }

            this.props.onAddtoCart(null,{
                id : this.props.product.id,
                proVarId : proVarId,
                hasVariants : this.props.product.hasVariants,
                title : this.props.product.productTitle,
                isStock : this.props.product.isStock,
                price : this.props.product.price,
                Offer : this.props.product.Offer,
                Image : this.props.product.Image,
                selectedVariants : variants,
                qty:1
            })

            
            

        }
        
        else{
            
            this.setState({addToCartLoading:true})
            let proVarId = null
            if(this.props.product.hasVariants){
                proVarId = this.props.product.combination.id
            }

            this.props.onAddtoCart(localStorage.getItem('token'),{
                productId : this.props.product.id,
                proVarId : proVarId,
                qty : 1,
                hasVariants : this.props.product.hasVariants,
            });

            

        }

        
    } 

    render(){
        const name = this.props.product.productTitle.split(' ').join('-').toLowerCase();

        return(
        <div className="product-card" >
            <Link className="product-thumb" to={"/"+name+"/prid/"+this.props.product.id}>
            <img src={this.props.product.Image} alt="Product" />
            </Link>  
            <h3 className="product-title"><Link to={"/"+name+"/prid/"+this.props.product.id}>{this.props.product.productTitle}</Link></h3>
                {this.props.product.Offer != null  ? 
                <div style={{position:'relative'}}>
                    {this.props.product.hasVariants ?<p style={{textAlign:'left',marginBottom:0}}>Starting from</p> : null} 
                    <h4 style={{textAlign:'left',position:'absolute'}} className="product-price" >Rs.{this.props.product.Offer}</h4>
                    <h4 style={{textDecoration:'line-through',position:'absolute',right:0}} className="product-price">Rs.{this.props.product.price}</h4>
                </div>
                    
                    :
                <div style={{position:'relative'}}>
                    {this.props.product.hasVariants ?<p style={{textAlign:'left',marginBottom:0}}>Starting from</p> : <p style={{textAlign:'center',marginBottom:0,color:'white'}}>Starting from</p>} 
  
                    <h4 style={{textAlign:'left',position:'absolute'}}  className="product-price">Rs.{this.props.product.price}</h4>
                </div>
                
                }
            
            <div className="product-buttons">
                <div className="product-buttons">
                    {!this.props.product.hasVariants ?
                        this.props.getCart.cart != null && this.props.getCart.cart.filter(cartItem => cartItem.id == this.props.product.id).length != 0  ? 
                            
                            <Link to="/cart"><button className="btn btn-outline-primary btn-sm" >
                             View Cart
                             </button>
                             </Link>
                            
                            
                        :
                        !this.props.product.isStock ? 
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="is Out Of Stock!" >
                             Out Of Stock
                             </button>
                            :
                            <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!" onClick={this.onAddToCart.bind(this)}>
                             {this.state.addToCartLoading ? null : "Add to Cart"}
                             <BeatLoader
                             size={15}
                             loading = {this.state.addToCartLoading}
                             color = 'white'
                             />
                             </button>
                    
                    : 
                    <Link to={"/"+name+"/prid/"+this.props.product.id}>
                    <button className="btn btn-outline-primary btn-sm" >
                    View Details
                    </button>
                    </Link>
                    }
                    
                </div>
            </div>
        </div>

        );
        
    }

}

export default ProductCard