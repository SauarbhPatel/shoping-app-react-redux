import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents";
import { fatchProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  // info: this is for dispatch the data form database to action
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchProducts());
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
