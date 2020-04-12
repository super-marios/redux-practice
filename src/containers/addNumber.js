import React, {useState} from 'react';
import AddNumber from '../components/addNumber'
import store from '../store';

const AddNumberRoot = () => {
    const [number, setNumber] = useState(store.getState());

    store.subscribe(() => {
        setNumber(store.getState())
    })

    return (
        <div>
             Add number Root
             <AddNumber  onClick={() => store.dispatch({type:'INCREMENT'})} />
         </div>
    );
}

export default AddNumberRoot;