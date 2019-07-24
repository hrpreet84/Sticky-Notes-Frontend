import {Component} from 'react';
import React from 'react';
import {Accordion,Card,Button} from 'react-bootstrap';
import axios from 'axios';

class Faq extends Component{
    state = {
        posts: []
      };

    getFaq(){
        let config = {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token' : sessionStorage.getItem('token')
            }
          };
        
        axios
          .get('https://sticky-notes-backend.herokuapp.com/api/faq/',config)
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
        this.getFaq();        
    }

    render(){
        return (
            <div className="container container-fluid">
                <div >
                <Accordion>
                 {this.state.posts.map(post => (
                     <Card className="m-5 pb-5">
                         <Card.Header className="orange">
                         <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-white">
                             {post.question}
                         </Accordion.Toggle>
                         </Card.Header>
                         <Accordion.Collapse className="text-primary" eventKey="0">
                             <Card.Body>
                                 {post.answer}
                             </Card.Body>
                         </Accordion.Collapse>
                     </Card>
                ))}
                </Accordion>
            </div></div>
        )
    }
}

export default Faq;