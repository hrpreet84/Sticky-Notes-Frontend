import React, { Component } from 'react';
import { List, ListItem, FABButton,Icon } from 'react-mdl';
import axios from 'axios';
import {Redirect} from 'react-router';

class Categories extends Component {

    state = {
        posts: [],
        newCategory: "",
        titleError: ""
      };

    getCategories(){
        let config = {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token' : sessionStorage.getItem('token')
            }
          };
        
        axios
          .get('http://localhost:5000/api/category/',config)
          .then(response => {
            this.setState({
              posts: response.data
            });
            console.log(response);
          })
          .catch(error => {
            console.log('error ', error);
          });
    }

    componentDidMount() {
        this.getCategories();        
      }

      addCategory = e => {
        e.preventDefault();
        if(this.state.newCategory != null){
            let config = {
                headers: {
                  'Content-Type': 'application/json',
                  'x-auth-token' : sessionStorage.getItem('token')
                }
              }; 
        axios.post('http://localhost:5000/api/category/', {
            title: this.state.newCategory 
          },config)
          .then(function (response) {
            this.getCategories();
          }.bind(this))
          .catch(function (error) {

          })
      }
      else{
        this.setState({titleError: "title is required"});
    }
}

      handleneCategoryChange = e => {
        this.setState({
            newCategory: e.target.value
        });
      }

    render(){
        return (
            <div>
                <List>
                 {this.state.posts.map(post => (
                    <ListItem key={post.id}>{post.title}</ ListItem>
                ))}
                </List>
                <input type="text" onChange={this.handleneCategoryChange} required/>
                <span className="text-danger">{this.state.titleError}</span>
                <FABButton>
                    <Icon name="add" onClick={this.addCategory}/>
                </FABButton>
            </div>
        )
    }
}

export default Categories;