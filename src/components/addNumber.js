import React, {useState} from 'react';
import store from '../store.js';

const AddNumber = (props) => {
        return (
            <div>
            	Add number
                <div>
                    <button onClick={() => store.dispatch({type:'INCREMENT'})} >ADD +1</button>
                </div>
                {props.unit}
            </div>
        );
}

export default AddNumber;