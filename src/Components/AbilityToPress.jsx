import React, { useState } from 'react';



const AbilitytoPress = (props) => {
   
    const[name, setName] = useState("");
    const[post, SetPost] = useState("");
   
    function HandleMySubmitButtonPlease(event) {
        event.preventDefault();
        let actualuserinput={
            name: name,
            post:post
            
        };
        console.log(actualuserinput);
    }

     return (
        <form onSubmit={HandleMySubmitButtonPlease}>
            <label>name</label>
            <input type={[""]} value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type={[""]} value={post} onChange={(event) => SetPost(event.target.value)} />
            <button type='submit'>Create</button> 
        </form>
     );
}
 
export default AbilitytoPress;


