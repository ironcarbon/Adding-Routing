import React,{Component} from 'react';
import classes from './FullPost.css';

import axios from 'axios';

class FullPost extends Component{
    state = {
        loadedPost: null
    }

    componentDidMount(){
        console.log(this.props)
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
                //axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    //console.log(response);
                    this.setState({loadedPost: response.data})
                })
            }
        }
        
    }

    DeletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(response => {
            console.log(response);
        }
            )
    }  
    render() {

        let post = <p>Please select a Post!</p>;
        if(this.props.id){
            post = <p>Loading...</p>
        }
        if(this.state.loadedPost){
            post= (
                <div className={classes.FullPost}>
                    <h1 className={classes.Title}>{this.state.loadedPost.title}</h1>
                    <p className={classes.Content}>{this.state.loadedPost.body}</p>
                    <button className={classes.Delete} onClick={this.DeletePostHandler}>Delete</button>
                    
                </div>
    
            )

        }
       
        return post;
    
    }
}




    






export default FullPost;