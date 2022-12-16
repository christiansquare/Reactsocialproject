import React, { useImperativeHandle, useState } from 'react';


const DisplayPostResponse = (props) => {
   
   
    return ( 
        <div>
            <table>
                <thead>
                <tr>
                     <th>comment</th>
                </tr>
                </thead>
                <tbody>
                    {props.DisplayPostResponseProperty.map((input) => {
                        return (
                    <tr>
                        <td>{input.name}</td>
                        <td>{input.post}</td>
                        <button type='submit'>thumbs up</button><button type='submit'>thumbs up</button> 
                    </tr>
                    );
                  })}
                </tbody>
            </table>
        </div>
        );

 }
    export default DisplayPostResponse;