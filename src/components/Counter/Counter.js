import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/counterSlice";



const Counter = props => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }
    
    const decrementHandler = (dispatch) => {
        dispatch(counterActions.decrement());
    }

    const incrementBy5Handler = () => {
        dispatch(counterActions.incrementBy5({amount: 5}))
    }

    const decrementBy5Handler = () => {
        dispatch(counterActions.decrementBy5({amount: 5}))
    }

    return (
        <Fragment>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementBy5Handler}>Increment By 5</button>
            <button onClick={decrementBy5Handler}>Decrement By 5</button>
            <div>{counter.number}</div>
        </Fragment>
    );
}

export default Counter;