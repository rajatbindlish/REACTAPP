import React , {useState} from 'react';

function Rajat_Hooks () {

    const [count , setcount ] = useState(0);

    return (

<div>

<p>you clicked {count} times </p>
<button onClick={() => setcount(count + 1)}>Click ME </button>
    </div>

    );
}

export default Rajat_Hooks;