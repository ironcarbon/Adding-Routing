import React, {Component} from 'react';
import classes from './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import Post from '../../components/Post/Post';
//import axios from 'axios';

//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

//import FullPost from './FullPost/FullPost';

class Blog extends Component{
    state={
        auth: true
    }
    render(){
        return(
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="my-active"
                            activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} activeClassName={classes.active}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                {/*<Route path="/" exact render= {() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={()=> <h1>Not found</h1>} />
                    {/*<Redirect from ="/" to="/posts" />*/}
                    {/*<Route path="/" component={Posts} /> */}
                </Switch>
                

                   

            </div>
        )
    }
}

export default Blog;