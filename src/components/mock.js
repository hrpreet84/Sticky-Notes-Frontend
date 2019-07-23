// const data = [
//     {
//       "id": "3effea2c-fc90-98e0-51d0-22c32efb2177",
//       "text": "Hey I am Ajain... ",
//       "title": "Hello",
//       "grid": {
//         "i": "3effea2c-fc90-98e0-51d0-22c32efb2177",
//         "x": 0,
//         "y": null,
//         "w": 2,
//         "h" : 2,
//         "isDraggable": false
//       },
//       "contentEditable": true,
//       "timeStamp": "13 Feb 2017 2:53 PM"
//     },
//     {
//       "id": "3effea2c-fc90-98e0-51d0-22c32efb2178",
//       "text": "If you liked stickies... contribute by liking it... ",
//       "title": "Contribute",
//       "grid": {
//         "i": "3effea2c-fc90-98e0-51d0-22c32efb2178",
//         "x": 4,
//         "y": 0,
//         "w": 2,
//         "h" : 2,
//         "isDraggable": false
//       },
//       "contentEditable": true,
//       "timeStamp": "13 Feb 2017 2:53 PM"
//     }
//   ]
  
//   export default data;

import React, { Component } from 'react';
import { List, ListItem, FABButton,Icon } from 'react-mdl';
import axios from 'axios';
import {Redirect} from 'react-router';

class Notes extends Component {

    state = {
      posts: []
      };

    getNotes(){
        let config = {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token' : sessionStorage.getItem('token')
            }
          };
        
        axios
          .get('http://localhost:5000/api/notes/',config)
          .then(response => {
            this.setState({
              posts: response.data
            }).bind(this);
            console.log(response);
          })
          .catch(error => {
            console.log('error ', error);
          });
    }

    componentDidMount() {
        this.getNotes();        
      }
}

export default Notes.posts;