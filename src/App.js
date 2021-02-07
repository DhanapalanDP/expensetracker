import './App.css';
import React, { useState } from 'react'
import AddItems from './addItems';
import Form from './components/formnew'


function App() {
  //states
 
  const [formItems, setFormItems] = useState([])
 

  return (
    <div className="App">
      <div>
    <h1 className="head">Expense Tracker</h1><br></br>
    <div>
        <h3 className="newitem">Add A New Item:</h3>
    </div>
    
     </div>
     <Form 
     formItems={formItems}
     setFormItems={setFormItems}

     />
     
     <AddItems 
     formItems={formItems}
     setFormItems={setFormItems}

     />
    </div>
    
    
    
  );
}

export default App;
