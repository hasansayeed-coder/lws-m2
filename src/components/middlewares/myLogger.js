import rootReducer from "../../redux/rootReducer"

// create our first middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action : ${JSON.stringify(action)}`)
    console.log(`Before : ${JSON.stringify(store.getState())}`)

    const upcomingState = [action].reduce(rootReducer , store.getState())

    console.log(`Upcoming state : ${JSON.stringify(upcomingState)}`)

    // pass action
    return next(action) ; 
}

export default myLogger ;