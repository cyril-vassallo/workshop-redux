import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { add , subtract } from '../redux/actions/actions'

const Counter = () => {

    const dispatch = useDispatch();

    const handleCLickAdd = function() {
        dispatch(add({result:3}));
    }
    const handleCLickSubtract = function() {
        dispatch(subtract({result:4}));
    }

    let user = useSelector((state) => {
        return state.userReducer;
    })

    let counter = useSelector((state) => {
        return state.mathReducer;
    })

    return ( 
        <React.Fragment>
            <span>{user.name}</span>
            <button onClick={handleCLickAdd}>Increment</button>
            <button onClick={handleCLickSubtract}>Decrement</button>
            <span>{counter.result}</span>
        </React.Fragment>
     );
}
 
export default Counter;