/* eslint-disable no-lone-blocks */
/* //eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React ,{useState}from 'react'
//import { Link } from 'react-router-dom';
import { BrowserRouter , Route,Routes ,Link} from 'react-router-dom';




 function Sign_up() {

//let history = useHistory(); 
//history.push('/App')
  // }

  


const [firstname,setfirstname]=useState(null)
const [lastname,setlastname]=useState(null)
const [password,setpassword]=useState(null)
// const [Getmain,setmain]=useState(false)
  //<Link to="/App"> hii </Link>;
  // window.location='http://www.example.com';
   function firstData(val)
  {
    
    setfirstname(val.target.value)
    if (!firstname) {
      alert("firstname is required!")
    }
    
  }
  function lastData(val)
  {
    setlastname(val.target.value)
    if (!lastname)
{
  alert("last Name can't be blank");

}
  }
  function PasswordData(val)
  {
    setpassword(val.target.value)
    if(!password)
    {
      window.alert("Password must be at least 6 characters long.");

    }
    }

  function main(e)
  {
    e.preventDefault()
  }
  
  return (
    <div  className="App">
     {/* <img src={image} className="App-logo" alt="logo" /> */}
     {/* <img src={image} className="App-logo" alt="logo" /> */}
    <div className="Div1">
    <span id="title" style={{textAlign:'center', marginLeft:'70px'}}>Login to Rcb page </span> 

   <form className ="form1" onSubmit={main}>
   <br/>
    <label for="firstname"> First Name: </label>
    <input type="text" name="firstname" id="firstname" required maxlength="10"onchange={firstData} ></input>
    <br/><br/><br/>
    <label for="lastname"> Last Name: </label>
    <input type="text" name="lastname" id="lastname"  required maxlength="10" onchange={lastData}></input>
	<br/><br/><br/>
    <label for="password">  Password: </label>
    <input type="password" name="password" id="Password" required maxlength="6"onchange={PasswordData}></input>
	<br/><br/>
        
        <div><button className='button'> Submit </button></div> 

                  
     
    </form>
    </div>
    </div>
    
  );
}
export default Sign_up;
