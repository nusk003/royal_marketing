import React,{Component} from 'react';
import RelatedProducts from '../Cart Components/RelatedProducts';
import CatSidebar from '../Top Category Components/catSideBar';
import ProductTabs from './ProductTabs';
import {Link} from 'react-router-dom';
import ProImageSlider from './ProImageSlider';
import { BeatLoader } from 'react-spinners';

class ProductContent extends Component{
    state = {
        Images : [],
        selectedComb :[],
        price : 0,
        offerPrice : null,
        isStock : true,
        variants : [],
        combinations : [],
        isComb : true,
        loading : true,
        isInCart : false,
        combId : null,
        id : null,
        qty : 1,
        addToCartLoading: false,
    }
    componentDidMount(){
       
    
       setTimeout(this.setImage,500)
       setTimeout(this.setPrice,500)
       setTimeout(this.setVariants,500)
       setTimeout(this.setCombinations,500)
       setTimeout(this.checkCart,500)
       setTimeout(()=>{
           this.setState({loading:false})
       },1000)

    }

    componentWillReceiveProps (prevProps) {

		if(this.props.match.params.id != prevProps.match.params.id){
            this.setState({loading:true})
			setTimeout(this.setImage,500)
            setTimeout(this.setPrice,500)
            setTimeout(this.setVariants,500)
            setTimeout(this.setCombinations,500)
            setTimeout(this.checkCart,500)
            setTimeout(()=>{
           this.setState({loading:false})
       },1000)
		}

	  }


    setCombinations = () => {
        if(!this.props.getProDetails.loading && this.props.getProDetails.details != null){
        this.setState({
            combinations:this.props.getProDetails.details.combinations,
            id : this.props.getProDetails.details.id
        })
    }
}

    setVariants = () => {
        if(!this.props.getProDetails.loading && this.props.getProDetails.details != null){
            this.setState({
                variants:this.props.getProDetails.details.variants
            })
        }
    }

    setPrice = () => {
        if(!this.props.getProDetails.loading && this.props.getProDetails.details != null){
            if(this.props.getProDetails.details.hasVariants){
                this.setState({
                    price:this.props.getProDetails.details.defaultComb.sellPrice,
                    offerPrice: this.props.getProDetails.details.defaultComb.offerPrice,
                    isStock : this.props.getProDetails.details.defaultComb.isStock,
                    selectedComb : this.props.getProDetails.details.defaultComb.values,
                    combId : this.props.getProDetails.details.defaultComb.id
                })

                
            }
            else{

                this.setState({
                    price:this.props.getProDetails.details.price.sellPrice,
                    offerPrice: this.props.getProDetails.details.price.offerPrice,
                    isStock : this.props.getProDetails.details.price.isStock
                })

            }
        }
    }
    setImage = () => {
        if(!this.props.getProDetails.loading && this.props.getProDetails.details != null){
            

                this.setState({Images:this.props.getProDetails.details.Images})
                
        
            
        }
    }

    checkCart = () => {

        if(this.props.getProDetails.details != null && this.props.getProDetails.details.hasVariants){
            const arr = this.props.getCart.cart.filter(cartItem => cartItem.proVarId === this.state.combId)
            if (arr.length == 0){
                this.setState({isInCart:false})
            }
            else{
                this.setState({isInCart:true})
            }
        }
        else{

            const arr = this.props.getCart.cart.filter(cartItem => cartItem.id === this.state.id)
            if (arr.length == 0){
                this.setState({isInCart:false})
            }
            else{
                this.setState({isInCart:true})
            }
            
        }

        console.log(this.state.isInCart)
    }

    variantValChangeHandler = (event,index) => {
        
        const defComb = this.state.selectedComb
        defComb[index] = event.target.value
        this.setState({selectedComb:defComb})
        
        this.changePrice()

        setTimeout(this.checkCart,100)
        
    }

    changePrice = () => {

        const selectedComb = this.state.selectedComb
        const combinations = this.state.combinations

        const comb = combinations.filter(combination => combination.values.toString() === selectedComb.toString())
        console.log(comb)
        if (comb.length == 0){
            this.setState({isComb:false})
        }
        else{
            this.setState({isComb:true})
            this.changeProps(comb[0])
        }

    }

    changeProps = comb => {

        this.setState({
            Images: comb.Images,
            price : comb.price.sellPrice,
            offerPrice : comb.price.offerPrice,
            isStock : comb.price.isStock,
            combId : comb.pk
        })
    }

    qtyChangeHandler = event => {

        this.setState({
            qty:event.target.value
        })
    }

    onAddToCart = event => {
        event.preventDefault()
        if(localStorage.getItem('token') == undefined){
            
            let variants = null
            let proVarId = null

            if(this.props.getProDetails.details.hasVariants){
                
                proVarId = this.state.combId
                variants = []
                for (let i = 0 ; i<this.state.selectedComb.length; i++){
                    variants.push({
                        variant:this.state.variants[i].title,
                        value : this.state.selectedComb[i]
                    })
                }
               
                
            }

            this.props.onAddtoCart(null,{
                id : this.state.id,
                proVarId : proVarId,
                hasVariants : this.props.getProDetails.details.hasVariants,
                title : this.props.getProDetails.details.title,
                isStock : this.state.isStock,
                price : this.state.price,
                Offer : this.state.offerPrice,
                Image : this.state.Images[0],
                selectedVariants : variants,
                qty:this.state.qty
            })

            setTimeout(this.checkCart,100)
            

        }
        
        else{
            
            this.setState({addToCartLoading:true})
            let proVarId = null
            if(this.props.getProDetails.details.hasVariants){
                proVarId = this.state.combId
            }

            this.props.onAddtoCart(localStorage.getItem('token'),{
                productId : this.state.id,
                proVarId : proVarId,
                qty : this.state.qty,
                hasVariants : this.props.getProDetails.details.hasVariants,
            });

            setTimeout(this.checkCart,1500)
            setTimeout(() => this.setState({addToCartLoading:false}),1600)


        }
    }

    render(){
        let stars = []
        const {settings} = this.props
        if(!this.state.loading){
            let totalStars = 0
            for(let review of this.props.getProDetails.details.reviews){
                totalStars += review.stars
            }
            const avgStars = totalStars/this.props.getProDetails.details.reviews.length
            
            for(let i =0;i<avgStars;i++){
                stars.push(<i className="icon-star filled"></i>)
            }
        }
        return(
                
                <div className="container padding-top-1x padding-bottom-3x">
                    <div className="row">

                <div className="col-lg-9 order-lg-2">
                {!this.state.loading ? 
                <div className="row">
                    <div className="col-md-6">
                    
                        <div className="product-gallery">
                        
                        
                            <ProImageSlider

                                Images = {this.state.Images}
                                
                            />
                        </div>
                    </div>
                   
                    <div className="col-md-6 single-shop">
                    {this.state.offerPrice != null ?
                            <span style = {{color:'white',fontWeight:'bold',borderRadius:5,backgroundColor:'#ed2230',padding:10}}>{(((this.state.price-this.state.offerPrice)/this.state.price)*100).toFixed(2)}% OFF</span>
                        :
                            null
                        }
                        <div className="hidden-md-up"></div>
                        <div className="rating-stars">
                            {stars}
                        </div>
                        
                        <h2 className="padding-top-1x text-normal with-side">{this.props.getProDetails.details.title}</h2>
                        {this.state.offerPrice != null ? 
                            <span className="h2 d-block with-side">

                            <del className="text-muted text-normal">Rs.{this.state.price}</del>&nbsp; Rs.{this.state.offerPrice}
                            
                            </span>
                            :
                            <span className="h2 d-block with-side">

                            Rs.{this.state.price}
                            
                            </span>
                            }
                        
                        <p>{this.props.getProDetails.details.description}</p>
                        <div className="row margin-top-1x">
                        {this.state.variants.map((variant,i)=>
                            <div  key={i} className="col-sm-4">
                            <div className="form-group">
                                <label for="size">{variant.title}</label>
                                <select onChange = {(event)=>this.variantValChangeHandler(event,i)} className="form-control" id="size">
                                    {variant.values.map((value,j)=>
                                    this.state.selectedComb[i] == value ?
                                        <option key={j} selected >{value}</option>
                                        :
                                        <option key={j} >{value}</option>

                                )}
                                    
                                </select>
                            </div>
                        </div>
                            
                            )}
                            
                            
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="quantity">Quantity</label>
                                    <input type="number" onChange={this.qtyChangeHandler} defaultValue = {1} min = {1} className="form-control" id="quantity"/>
                                        
                                </div>
                            </div>
                            {!this.state.isComb ?
                            <p className="text-muted">Oops! This combination is Currently unavailable</p>
                            :
                            null
                            }
                        </div>
                        <div className="padding-bottom-1x mb-2">
                            <span className="text-medium">Categories:&nbsp;</span>
                            <a className="navi-link" href="#">{this.props.getProDetails.details.category},</a>
                            <a className="navi-link" href="#"> {this.props.getProDetails.details.productCat},</a>
                            <a className="navi-link" href="#"> {this.props.getProDetails.details.brand}</a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <hr className="mt-30 mb-30"/>
                        
                        <div className="d-flex flex-wrap justify-content-between mb-30 pull-right" >
                            
                            <div className="sp-buttons mt-2 mb-2">
                            <a href = {`callto:${settings.phone}`}>  
                            <button className="btn btn-primary" data-toast="" data-toast-type="danger" data-toast-position="topRight" style={{backgroundColor:'red'}} data-toast-icon="icon-circle-check" data-toast-title="Sorry!! Product" data-toast-message="is Out of Stock"><i className="fa fa-phone"></i> Call us </button>
                            </a>
                            
                            </div>
                        </div>
                    </div>
                    
                    <ProductTabs {...this.props}/>
                </div>
            :
            <div style={{textAlign:'center',margin: 100}}>
            <BeatLoader
            size={40}
            color = '#ed2230'
            />
            </div>
            }
            </div>
         
            <CatSidebar brands = {this.props.popularBrands}/>
        </div>
        {!this.state.loading ?
        
            <RelatedProducts 
            
                products = {this.props.getProDetails.details.related} 
                {...this.props}
                
            />

        :
        null
        }
    </div>


        );
    }
}


export default ProductContent;