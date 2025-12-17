import React, { useState } from 'react';

export default function Task2() {
    const [show, setShow] = useState();
    return(
        <div>
            <input type="text" placeholder='Enter your name' onChange={(e) => setShow(e.target.value.toUpperCase())} value={show}/>
            <h1>Hello, {show}!</h1>
        </div>
    );
}