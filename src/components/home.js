import React, { Component } from 'react';
import {Card } from "react-bootstrap"


class Home extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          value: '',
          translated:'.....' ,

         

         
        }


        this.translate=this.translate.bind(this);

     
      }

    
     

      




      translate(text){
          console.log(text)
        // e.preventDefault()

        let fromLang = 'en';
        let toLang = 'ar'
        //  let text = 'something to translate';
        
        const API_KEY ='YOUR API KEY';
        let   url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`
        url += '&q=' + encodeURI(text);
        url += `&source=${fromLang}`;
        url += `&target=${toLang}`;

        

        fetch(url, { 
            method: 'GET',
           
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            // body: this.state.value 
            // body:JSON.stringify( "this.state.value" )
          })
          .then(res => res.json())
          .then((response) => {
            
            console.log("response from google: ", response.data.translations[0]);
          })
          .catch(error => {
            console.log("There was an error with the translation request: ", error);
          });

      }

      

    
    render() {
        return (

   <div className="container-fluid">
{/* <form  onSubmit={this.translate()} method="POST"> */}
<input 
          value={this.state.value}
          onChange={(e)=>this.setState({value: e.target.value})}
          type="text"/>
        {/* <button type="submit" >Submit</button> */}
        <button onClick={this.translate(this.state.value)}>submit</button>
     
     {/* just need to render data in popup */}
        <h1>{this.state.translated}</h1>
        
        {/* </form> */}
</div>
 
        )
    }
}

export default Home