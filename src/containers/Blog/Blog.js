import React, {Component} from 'react';
import classes from './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import { Route } from 'react-router-dom';
//import Post from '../../components/Post/Post';
//import axios from 'axios';

import NewPost from './NewPost/NewPost';

class Blog extends Component{
    
    render(){
        return(
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                
                {/*<Route path="/" exact render= {() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                
                   

            </div>
        )
    }
}

export default Blog;