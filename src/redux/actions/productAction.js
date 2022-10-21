import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fatchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  console.log(response.data);

  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
export const fatchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  console.log(response.data);

  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
