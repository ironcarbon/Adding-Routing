import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
//import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';


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
        //this.setState({selectedPostId: id});
        //this.props.history.push({pathname:'/posts/' + id});
        this.props.history.push('/posts/'+ id);
    }

    render() {
        let posts= <p>Something went wrong!</p>
        if(!this.state.error) {
            posts= this.state.posts.map(post => {
                return (
                //<Link to={'/posts' + post.id} key={post.id}>
                <Post 
                key={post.id}
                title={post.title} 
                author={post.author}
                //{...this.props}
                clicked={() => this.postSelectedHandler(post.id)} />
                //</Link>
                )
                
            })
        } 

        return(
            <div>
                 <section className="Posts">
                {posts}
            </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
           
        );
    }
}

export default Posts;