import {configureStore} from '@reduxjs/toolkit';
import {
  cartAddReducer,
  cartDataReducer,
  cartRemoveReducer,
  cartUpdateReducer,
  productsReducer,
  wishListaddReducer,
  wishListDataReducer,
  wishListRemoveReducer,
} from './Reducers/ProductReducer';
import {forgotPasswordReducer, userReducer} from './Reducers/UserReducer';

const Store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    wishListRemove: wishListRemoveReducer,
    wishListAdd: wishListaddReducer,
    wishList: wishListDataReducer,
    cart: cartDataReducer,
    cartAdd: cartAddReducer,
    cartRemove: cartRemoveReducer,
    cartUpdate: cartUpdateReducer,
  },
});

export default Store;
