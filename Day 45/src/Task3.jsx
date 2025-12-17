import React, { useState } from 'react';

export default function Task3() {
const [show, setShow] = useState();
return(
    <div>
        <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} />
        <p>{show ? "ticked" : "unticked"}</p>
    </div>
);
}