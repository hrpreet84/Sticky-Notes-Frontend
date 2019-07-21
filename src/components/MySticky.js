import React, { Component } from 'react';
import {
    Stickies
  } from 'react-stickies';
  const mock = require('./mock');
class MySticky extends Component {
    constructor(props) {
        super(props);
        console.log('collapsed');
        this.state = {
          notes: mock
          //notes: []

        }
        this.onChange = this.onChange.bind(this)
        this.onSave = this.onSave.bind(this)
      }  
      onSave (note) {
        // Make sure to delete the editorState before saving to backend
        // const notes = this.state.notes;
        // notes.map(note => {
        //   delete note.editorState;
        // })
        console.log(note.title);
        // Make service call to save notes
        // Code goes here...
      }
      onChange (notes) {
        this.setState({ // Update the notes state
          notes
        })
        //console.log(notes);
      }
    render() {   
    return (
      <Stickies
        notes={this.state.notes}
        onChange={this.onChange}
        onAdd={this.onSave}
      />
     
     
    )
  }
};
export default MySticky