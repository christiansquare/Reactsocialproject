import React, { useState } from 'react';
import AbilitytoPress from './Components/AbilityToPress';
import DisplayPostResponse from './Components/DisplayPostResponse';

function App(){

 const [UserId, setUserId] = useState([{name: [""], post: [""]}])
  
function actualuserinput(user){
  
  let tempUserId = [user, ...UserId]
  
  setUserId(tempUserId)
}


  return (
    <div>   
         <AbilitytoPress AbilitytoPressproperty={actualuserinput}/>
         <DisplayPostResponse DisplayPostResponseProperty={UserId}/>
    </div>
  );
}

export default App;
