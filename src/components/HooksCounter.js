import { useState } from "react";
import { connect, useSelector , useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

export function HooksCounter({id}) {

    const count = useSelector( (state) => state.counter.value) ; 
    const dispatch = useDispatch() ;

    
    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement()) ; 
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count} - {id}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={incrementHandler}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrementHandler}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         count : state.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         increment :(value) => dispatch(increment(value)) , 
//         decrement :(value) => dispatch(decrement(value)) ,
//     }
// }

export default HooksCounter ;
// export default connect(mapStateToProps , mapDispatchToProps)(HooksCounter) ; 
