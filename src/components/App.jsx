import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import { setCount} from "../reducers/reposReducer";

const App = () => {
    const dispatch = useDispatch()
    //const count = useSelector(state => state.count)
    const onClick = () => {
        dispatch(setCount(5))
    }
    return (
        <div className='app'>
            <button onClick={() => onClick()}></button>
        </div>
    );
};

export default App;
