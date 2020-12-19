import React, { Component } from 'react';
import Popup from './popup';  
import { Card} from "react-bootstrap"


class Home extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          value: '',
          translated:'.....' ,
          translation_data:[],
          // isloaded:false ,
          // selected_text:'',
          showPopup: false
         

         
        }


        this.translate=this.translate.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        // this.handleMouseUp = this.handleMouseUp.bind(this);
        this.translation = this.translation.bind(this);

     
      }

      togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }  
    
     // this when using  submit botton only
      onChangeValue(e){
        this.setState({ 
            value: e.target.value 
        })
    }
      
      

// this when using  submit botton only
      translate(e){
        e.preventDefault()

      //  const text = {
      //   value : this.state.value ,
      //  }
     
     let   text = this.state.value 
       
          console.log(text)
        // e.preventDefault()

        let fromLang = 'en';
        let toLang = 'ar'
        //  let text = 'something to translate';
        
        const API_KEY ='your api key';
       

        
 if(text !==''){
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
        this.setState({translation_data:response.data.translations})
        console.log("response from google: ", response.data.translations[0]);
        
      })
      .catch(error => {
        console.log("There was an error with the translation request: ", error);
      });
 }
      

      }
///////////////////////////////////////////////////////////////////////////
   handleMouseUp() {
     
        console.log(`Selected text: ${window.getSelection().toString()}`);
        let res = window.getSelection().toString()
        // alert(res)

        // this.translation(res)
        
        return res
    }

    translation(text){
       
        text = this.handleMouseUp()
        console.log("text==="+text)

        this.setState({  
          showPopup: !this.state.showPopup  
     });

      let fromLang = 'en';
      let toLang = 'ar'
      //  let text = 'something to translate';
      
      const API_KEY ='your api key';
     

      
if(text !==''){
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
      this.setState({translation_data:response.data.translations})
      console.log("response from google: ", response.data.translations[0]);
      
    })
    .catch(error => {
      console.log("There was an error with the translation request: ", error);
    });
}
    

    }


   

      render_data(){
        return this.state.translation_data.map(item => {

            return(     
                //  <span>
                //      {item.translatedText} 

                //  </span> 
                <tr key={item.id}>
                  <td> {item.translatedText}</td>
                </tr>


            )
        })
      }

      

    
    render() {
        return (

   <div className="container-fluid">

{/* if using submit button */}

{/* <form  onSubmit={this.translate} >
<input 
          value={this.state.value}
          onChange={this.onChangeValue}
          // onChange={(e)=>this.setState({value: e.target.value})}
          type="text"/>
        <button type="submit" >Submit</button>    
        </form>
        <center>  <h1>{this.state.translated}</h1>  </center>  */}
     
{/* ////////////////////////////////////////////////////////// */}
          <div className="container" >  
          <div className="col-md-3"></div>
  <Card className="card col-md-6"> 
  <Card.Title className="card_text">Translate the text</Card.Title>    
  <Card.Text  className="card_text">
 
{/* <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>   */}
<div onMouseUp={this.translation}> 

<p>
 on this page the user can heighlt text and see all the result on the popup page  

</p>

</div>
{this.state.showPopup ?  
<Popup  
          text={this.render_data()}  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
</Card.Text>
</Card> 
<div className="col-md-3"></div> 
</div>  



</div>
        )
    }
}

export default Home