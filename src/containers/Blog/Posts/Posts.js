import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';


class Posts extends Component{
    state = {
        posts:[]
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                const shortPosts = response.data.slice(0,4);
                const updatedPosts= shortPosts.map(post => {
                    return{
                        ...post,
                        author: 'Max'
                    }
                })

                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        let posts= <p>Something went wrong!</p>
        if(!this.state.error) {
            posts= this.state.posts.map(post => {
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                //{...this.props}
                clicked={() => this.postSelectedHandler(post.id)}/>
            })
        } 

        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;