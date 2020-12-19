import React, { Component } from 'react';


class Popup extends Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup_inner'>  
<h1 className="translation_text">{this.props.text}</h1>  
</div> 
<span onClick={this.props.closePopup} className="close_btn"> Close </span>
{/* <button onClick={this.props.closePopup}>close</button>   */}

</div>  
);  
}  
}  

export default Popup