import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    
  render() {
      const postItems = this.props.posts.map(item => (
          <div key={item.id} >
            <h1>{item.title} </h1>
            <p>{item.body} </p>
          </div>
      ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
    posts: state.posts.items
})
export default connect(mapStateToProps, { fetchPosts})(Posts);

