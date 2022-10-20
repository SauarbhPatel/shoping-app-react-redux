import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state);
  // info: this is for dispatch the data form database to action
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("ERROR: ", err);
      });

    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <>
      <div className="ui grid container">
        <ProductComponents />
      </div>
    </>
  );
};

export default ProductListing;
