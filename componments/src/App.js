import React from 'react';
import './App.css';
import FullName from './component/FullName';
import Address from './component/Address';
import ProfilPhoto from './component/ProfilPhoto.js' 
function App() {
  return (
    <div className="App">
<div className= "header"> 
  <h1 className="titel"> Hello Welcom in my profile</h1>
<ProfilPhoto/>

  <h1 className="name">My name is :<FullName/></h1>  
  <h1 className="addres">I live :<Address/></h1>
</div>
 
    </div>
  );
}

export default App;
