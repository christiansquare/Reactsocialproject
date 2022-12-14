import React, { useState } from 'react';
import AbilitytoPress from './Components/AbilityToPress';

function App(){
  const [user, setUser] = useState([{Name:[], Post: []}])

 return(

 <div>
  <AbilitytoPress/>
    </div>
  );
}

export default App;
