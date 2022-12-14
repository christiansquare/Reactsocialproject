import React, { useState } from 'react';
import AbilitytoPress from './Components/AbilityToPress';

function App(){

 const [userid, setUserid] = useState([{name: [""], post: [""]}])
  

  return (
    <div>
         <AbilitytoPress/>
    </div>
  );
}

export default App;
