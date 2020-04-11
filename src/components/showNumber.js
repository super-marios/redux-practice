import React, {useState} from 'react';
import store from '../store';

const ShowNumber = () => {
    const [number, setNumber] = useState(store.getState());

    store.subscribe(() => {
        setNumber(store.getState())
    })

    return (
        <div>
             Show number Root
             <div>
                 <span>{number}</span>
             </div>
         </div>
    );
}

export default ShowNumber;