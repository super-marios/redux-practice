import React, {useState} from 'react';
import store from '../store.js';

const AddNumber = ({number, onClick}) => {
        return (
            <div>
            	Add number
                <div>
                    <button onClick={() => onClick()} >ADD +1</button>
                </div>

            </div>
        );
}

export default AddNumber;