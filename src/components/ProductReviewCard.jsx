import React from 'react'
import "../styles/ProductReviewCard.css";
import "../styles/ProductReview.css";

const ProductReviewCard = ({price,image,name,review,index}) => {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`${index}review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
