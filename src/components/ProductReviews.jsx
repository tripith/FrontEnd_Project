import React from 'react';
import ProductReviewCard from "./ProductReviewCard.jsx";



const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReview'>
      {
        ProductReviews.map((item,index)=>(
            <ProductReviewCard price = {item.price} image = {item.image} review={item.review} index={index} key ={item.image}
              name={item.name}/>
        ))
      }
    </div>
  )
}

export default ProductReviews;
