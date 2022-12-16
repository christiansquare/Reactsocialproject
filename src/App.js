import React, { useState } from 'react';
import AbilitytoPress from './Components/AbilityToPress';
import DisplayPostResponse from './Components/DisplayPostResponse';

function App(){

 const [userid, setUserid] = useState([{name: [""], post: [""]}])
  
function actualuserinput(user){
  
  let tempUserid = [user, ...userid]
  
  setUserid(tempUserid)
}


  return (
    <div>   
         <AbilitytoPress AbilitytoPressproperty={actualuserinput}/>
         <DisplayPostResponse DisplayPostResponseProperty={userid}/>
    </div>
  );
}

export default App;
