import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  fatchProduct,
} from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  console.log(product);

  // info: useParam i usered for find the parameter in url
  const { productId } = useParams();
  // info: this is for dispatch the data form database to action
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fatchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="">...loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={image} alt="" className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block headeer">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
