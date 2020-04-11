import React from 'react';
import store from '../store.js';

const AddNumber = () => {
        return (
            <div>
               Add number Root
                <div>
                    <input value={0}/>
                    <button onClick={() => store.dispatch({type:'INCREMENT'})} >ADD</button>
                </div>

            </div>
        );
}

export default AddNumber;