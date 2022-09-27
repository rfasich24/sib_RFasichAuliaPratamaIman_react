const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT":
            return {counter: state.counter + 1}
        case "DECREMENT" :
            return {counter: state.counter - 1}
        default:
            return state
    }
}


var store = Redux.createStore(counter)


var el = document.getElementById('counter')
const render = () => {
    el.innerHTML = store.getState().counter.toString()
}

render()
store.subscribe(render)


var incEl = document.getElementById('increment')
var decEl = document.getElementById('decrement')

if (incEl){
    incEl.addEventListener('click', () => {
        store.dispatch({type: 'INCREMENT'})
    })
}

if (decEl){
    decEl.addEventListener('click', () => {
        store.dispatch({type: 'DECREMENT'})
    })
}

// let store = createStore(counter)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({type: "INCREMENT"})
// store.dispatch({type: "INCREMENT"})
// store.dispatch({type: "INCREMENT"})
// store.dispatch({type: "INCREMENT"})
// store.dispatch({type: "DECREMENT"})
// store.dispatch({type: "DECREMENT"})