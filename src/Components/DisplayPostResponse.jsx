import React, { useImperativeHandle, useState } from 'react';


const DisplayPostResponse = (props) => {
    function HandleMySubmitButtonPlease(event) {
        event.preventDefault();
      
            
        };

   
    return ( 
        <div>
     
        <div onSubmit={HandleMySubmitButtonPlease}>
            <table className='table'>
                <thead>
                <tr>
                     <th>{'comment'}</th>
                </tr>
                </thead>
                <tbody>
                    {props.DisplayPostResponseProperty.map((input) => {
                        return (
                    <tr>
                        <td>{input.name}</td>
                        <td>{input.post}</td>
                        <button type='submit'>thumbs up</button><button type='submit'>thumbs down</button> 
                    </tr>
                    );
                  })}
                </tbody>
            </table>
        </div>
        </div>
        );

 }
    export default DisplayPostResponse;