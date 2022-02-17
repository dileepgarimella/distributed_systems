import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import React,{useState} from 'react';
function App() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [ubitid,setubitid]=useState("")
  const [retype,setretype]=useState("")
  const [flag,setflag]=useState(false)
  const [response,setresponse]=useState("")
  const savedata=async(e)=>{
    e.preventDefault();
    // const fs = require('fs');
    // const path = require('path');
    const data={
      'email':email,
      'password':password,
      'ubitid':ubitid
    }
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: data }),
    });
    // console.log('hello',response)
    const msg=await response.text();
    setresponse(msg)
    setemail("")
    setpassword("")
    setretype("")
    setubitid("")
    setTimeout(function () {
      // ...
  }, 10000)

// or

.then(() => {
// ...
setresponse("")
({ timeout: 10000 });
    });
    // fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(data));
  }
  
  return (
    <div>
      
      <Form style={{margin:"auto",width:"50%",padding:"5%"}}>
      <h1 style={{margin:"auto",width:"50%",padding:"1%"}}>UB Details</h1>
      <Form.Group className="mb-3" controlId="formBasicubitid">
    <Form.Label>UBIT ID</Form.Label>
    <Form.Control type="ubitid" placeholder="Enter ubitid" value={ubitid}  onChange={(e)=>{setubitid(e.target.value);setresponse("")}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>setemail(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Re-Enter Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={retype}onChange={(e)=>{setretype(e.target.value);setflag(true)}}/>
    {flag && password!==retype && <Form.Text className="text-muted" >
      <p style={{color:'red'}}>password didn't matched</p>
    </Form.Text>
}
  </Form.Group>
  <Button variant="primary" type="submit" disabled={email!=='' && password!=='' && retype!=='' && ubitid!==''?false:true} onClick={savedata}>
    Submit
  </Button>
  {response!=='' && <Form.Text className="text-muted" >
      <h5 style={{color:'green'}}>{response}</h5>
    </Form.Text>
}
</Form>
</div>
  );
}

export default App;
