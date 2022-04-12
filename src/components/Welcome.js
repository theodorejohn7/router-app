 
import React  from 'react';
// console.log("props" + this.props.log); 
import Login from '../Login';
import { useEffect } from 'react';

const Welcome = (props) => {
    // console.log(this.props.location.names);

     console.log(props);


    return (
        <div  >
            <h2>Component2</h2> 
{/* <p>{props.username.location.state.names} </p> */}
  
        </div>
    )
}
  
export default Welcome;


// function Welcome(props) {
     
  
     
//     console.log(props);
     
  
//     return (
//        <div>
//      <h1 > The Welcome Page</h1>
//      {/* <h1>Welcome {this.state.username}</h1> */}

//        </div>


//     );
//   }
   





// export default Welcome;