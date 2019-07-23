import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './components/store/reducers/auth';
import smsReducer from './components/store/reducers/sms';
import nameReducer from './components/store/reducers/name';
import topCatReducer from './components/store/reducers/TopCats'
import featureProReducer from './components/store/reducers/featureProducts'
import popularBrands from './components/store/reducers/popularBrands'
import addToCart from './components/store/reducers/addToCart'
import getCart from './components/store/reducers/getCart'
import updateCart from './components/store/reducers/updateCart'
import deleteCart from './components/store/reducers/deleteCart'
import applyPromoCodeReducer from './components/store/reducers/applyPromoCode'
import getProfile from './components/store/reducers/getProfile'
import getProDetails from './components/store/reducers/getProDetails'
import getMyOrdersReducer from './components/store/reducers/getMyOrders'
import deleteAddress from './components/store/reducers/deleteAddress'
import editAddress from './components/store/reducers/editAddress'
import createAddress from './components/store/reducers/createAddress'
import createOrder from './components/store/reducers/createOrder'
import mergeCart from './components/store/reducers/mergeCart'
import productSearch from './components/store/reducers/productSearch'
import productsForCategory from './components/store/reducers/productsForCategory'
import getCategories from './components/store/reducers/getCategories'
import getHeroSlider from './components/store/reducers/getHeroSlider'



import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const rootReducer = combineReducers({
	auth : authReducer,
	sms :smsReducer,
    name : nameReducer,
    topCat : topCatReducer,
    featurePro : featureProReducer,
    popularBrands : popularBrands,
    addToCart : addToCart,
    getCart : getCart,
    updateCart : updateCart,
    deleteCart : deleteCart,
    applyPromoCode : applyPromoCodeReducer,
    getProfile : getProfile,
    getProDetails : getProDetails,
    getMyOrders : getMyOrdersReducer,
    editAddress : editAddress,
    deleteAddress : deleteAddress,
    createAddress : createAddress,
    createOrder : createOrder,
    mergeCart : mergeCart,
    productSearch : productSearch,
    productsForCategory : productsForCategory,
    getCategories : getCategories,
    getHeroSlider : getHeroSlider
})
const composeEnhances = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(rootReducer,composeEnhances(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
