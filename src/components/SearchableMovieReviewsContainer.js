import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    fetchReviews = (event) => {
            event.preventDefault()
            fetch(URL + `&query=${this.state.searchTerm}`)
              .then(res => res.json())
              .then(data => this.setState({
                  reviews: data.results
              }))
    }

    
    render() {
        return (
            <div className='searchable-movie-reviews'>
              <form onSubmit={this.fetchReviews}>
                <input type='text' placeholder='search for movie reviews' value={this.state.searchTerm} onChange={this.handleChange}/>
              </form>
              <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
