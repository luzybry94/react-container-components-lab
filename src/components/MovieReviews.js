import React from 'react'

const MovieReviews = props => {
    return (
        <div className='review-list'>
          {renderReviews(props.reviews)}
        </div>
    )
}

const renderReviews = (reviews) => reviews.map(review => <h2 className='review'>{review.display_title}</h2>)

// MovieReviews.defaultProps = {
//     reviews: []
//   };

export default MovieReviews
