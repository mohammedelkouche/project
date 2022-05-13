
import React, { Component } from 'react' 

 class Contacts extends Component {
    constructor(){
        // call the super methode 
        super() ;
      this.state = {
          contacts : [
              {
                id : 1 ,
                name : "john ",
                email : "john@gmail.com"
              },
              {
                id : 2 ,
                name : "karen ",
                email : "karen@gmail.com"
              }
          ]
      }
  
    
  }
  render() {
    const {contacts} = this.state ;
    return (
      <div>
      </div>
    )
    }
} 

export default Contacts ;
