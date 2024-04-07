const defaultState = []
let copied

function counterReducer(state = defaultState, actions) {
  switch (actions.type) {
    case "ADD":
      copied = JSON.parse(JSON.stringify(state))
      copied.push(actions.payload) 
    return copied  
    default:
        return state
  }
}

export default counterReducer