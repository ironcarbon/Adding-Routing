import React, {Component} from 'react';
import classes from './NewPost.css';
import axios from 'axios';

class NewPost extends Component{
    state={
        title:'',
        content:'',
        author: 'Max'
    }
    
    postDataHandler = () => {
        const data={
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            console.log(data);
            console.log(response);
            
        })
    }
    

    render(){
        return(
        
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}></input>
                <label>Content</label>
                <input type="text" value={this.state.content}onChange={(event) => this.setState({content: event.target.value})}></input>
                <label>Author</label>
                <select>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>    
                </select>
                <button className={classes.Button} onClick={this.postDataHandler}>Add Post</button>    
            </div>
        
    );

    }

}

export default NewPost;