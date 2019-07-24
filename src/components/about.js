import {Component} from 'react';
import React from 'react';
import {Card,Button } from 'react-bootstrap';
  

class About extends Component{


    render(){
        return (
            <div className="container container-fluid">
                <h1
                style={{  
                    backgroundImage: "url(" + "https://manhattanproducts.eu/media/wysiwyg/testing/MH_About-Us_Banner.jpg" + ")",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: "auto",
                    height: "300px"
                  
                  }}
                  ></h1>
               <div>
               <Card style={{ width: '23rem' ,height:'15rem',backgroundColor:'orange'}}>
                <Card.Body>
          <Card.Title style={{color: "Black",size:"20px",fontFamily:"cursive"}} >CREATIVE</Card.Title>
          <Card.Title style={{color: "Black",size:"40px",fontFamily:"cursive"}}>It's the ability to think outside the box. We make decisions, create something
               new and generate a lot of ideas.</Card.Title>
          
        </Card.Body>
      </Card>

      <Card style={{ width: '23rem' ,height:'15rem',backgroundColor:'orange',marginLeft:'350px',marginTop:'-210px'}}>
                <Card.Body>
          <Card.Title style={{color: "Black",size:"20px",fontFamily:"cursive"}} >WORLDWIDE</Card.Title>
          <Card.Title style={{color: "Black",size:"40px",fontFamily:"cursive"}}>All stickies you make with us, are 
          mobile-friendly. You don't have to create a special mobile version.

.</Card.Title>
          
        </Card.Body>
      </Card>


      <Card style={{ width: '23rem' ,height:'15rem',backgroundColor:'orange',marginLeft:'700px',marginTop:'-210px'}}>
                <Card.Body>
          <Card.Title style={{color: "Black",size:"20px",fontFamily:"cursive"}} >UNIQUE STYLE</Card.Title>
          <Card.Title style={{color: "Black",size:"40px",fontFamily:"cursive"}}>We offer many stickies in several
           themes, and though these stickies are pre-made, they are flexible.


</Card.Title>
          
        </Card.Body>
      </Card>

    </div>

                <br></br>
                </div>
        )
    }
}

export default About;