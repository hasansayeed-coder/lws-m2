import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ddecrement, dincrement } from '../redux/dynamicCounter/actions';



const DynamicHooksCounter = ({id}) => {

    const count = useSelector((state) => state.dynamicCounter.value)
    const dispatch = useDispatch() ;

    const dincrementHandler = (value) => {
        dispatch(dincrement(value))
    }

    const ddecrementHandler = (value) => {
        dispatch(ddecrement(value)) ;
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count} - {id}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => dincrementHandler(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => ddecrementHandler(3)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default DynamicHooksCounter;