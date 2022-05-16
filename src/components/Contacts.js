
import React, { Component } from 'react' 

 class Contacts extends Component {
    constructor(){
        // call the super methode 
        super() ;
        this.state = {
                contacts : [
                    {
                        id : 1 ,
                        libelle : "exercice ",
                        status  : "to do  "
                    },
                    {
                        id : 2 ,
                        libelle : "sport ",
                        status  : "doing "
                    }
                ]
            }
  
    
  }
  render() {
    const {contacts} = this.state ;
    return (
        <div>
            {
                contacts.map(Contact =>(
                    <div key={Contact.id}>
                        <h1>{Contact.libelle}</h1>
                        <h2>{Contact.status}</h2>
                    </div>

                ))
             }
        </div>
        )
    }
} 

export default Contacts ;
