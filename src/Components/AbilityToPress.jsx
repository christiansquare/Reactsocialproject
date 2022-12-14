import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';



const AbilitytoPress = (props) => {
   
    const[name, setName] = useState("");
    const[post, SetPost] = useState("");
   
    function HandleMySubmitButtonPlease(event) {
        event.prevenDefault();
        let actualuserinput={
            name: name,
            post:post
            
        };
        console.log(actualuserinput)
    }

     return (
        <form onSubmit={HandleMySubmitButtonPlease}>
            <label>Name</label>
            <input type={[""]} value={name} onChange={(event) => setName(event.target.Value)}/>
            <label>Post</label>
            <input type={[""]} value={post} onChange={(event) => SetPost(event.target.value)} />
            <button type='submit'>Create</button> 
        </form>
     );
}
 
export default AbilitytoPress;


