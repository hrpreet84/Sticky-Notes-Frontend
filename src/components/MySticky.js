import React, { Component } from 'react';
import axios from 'axios';
import {
  Stickies
} from 'react-stickies';
//const mock = require('./mock');
class MySticky extends Component {
  constructor(props) {
    super(props);
    console.log('collapsed');
    this.state = {
      //notes: mock
      notes: []

    }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }
  componentWillMount() {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': sessionStorage.getItem('token')
      }
    };

    axios
      .get('https://sticky-notes-backend.herokuapp.com/api/notes/', config)
      .then(response => {
        this.setState({
          notes: response.data
        });
        //console.log(response);
      })
      .catch(error => {
        console.log('error ', error);
      });
  }
  onSave(note) {
    // Make sure to delete the editorState before saving to backend
    // const notes = this.state.notes;
    //  notes.map(note => {
    //    delete note.editorState;
    //  })
    console.log("onSave");
    console.log(note);

    if(note.text != undefined){
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': sessionStorage.getItem('token')
        }
      };
     
      axios.post('https://sticky-notes-backend.herokuapp.com/api/notes/', note, config)
        .then(function (response) {
          //this.getCategories();
          console.log(response);
        }.bind(this))
        .catch(function (error) {
  
        })
    }
    
    // Make service call to save notes
    // Code goes here...
  }
  onChange(notes,text,note) {
    
      // notes.map(note => {
      //   delete note.editorState;
      // })
    this.setState({ // Update the notes state
      notes
    })
    if(note!=undefined && note.text != undefined){
      let configs = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': sessionStorage.getItem('token')
        }
      };
  console.log("onChangecalled");
  console.log(note);
     
      axios.post('https://sticky-notes-backend.herokuapp.com/api/notes/update',note, configs)
        .then(function (response) {
          //this.getCategories();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    

    //console.log("onChangeCalled");
    //console.log(text);
    //console.log(note);

  }
  onTitleChange(text,note){
    console.log("onTitlechange");
    this.onChange(null,text,note);
    //console.log(note);
    //console.log(text);
  }
  onCategoryChange(text,note){
    console.log("onCategorychange");
    this.onChange(null,text,note);
    //console.log(note);
    //console.log(text);
  }
  onDelete(note){
    console.log("onDelete");
    console.log(note);
    let configs = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': sessionStorage.getItem('token')
      }
    };
console.log(note.id);
    let data = {
      id : note.id
    }
   
    axios.post('https://sticky-notes-backend.herokuapp.com/api/notes/delete',data, configs)
      .then(function (response) {
        //this.getCategories();
        console.log(response);
      })
      .catch(function (error) {

      })
  }
  render() {
    return (
      <Stickies
        notes={this.state.notes}
        onChange={this.onChange}
        onAdd={this.onSave}
        onTitleChange={this.onTitleChange}
        onCategoryChange={this.onCategoryChange}
        onDelete={this.onDelete}
        
      />


    )
  }
};
export default MySticky