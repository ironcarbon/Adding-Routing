import React from 'react';
import classes from './Post.css';


const post = (props) => (
        
        <div className={classes.Post} onClick={props.clicked}>
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.Author}>{props.author}</div>
        </div>

        
        
    );


export default post;