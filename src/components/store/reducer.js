const initialState={
  // reducer gets dispatched by the action, and runs the state, or else defaults
  count:0,
  results:[]
  // because our data json is in this format, we model after it.
};

// action
export default(state=initialState,action)=>{
  const {payload,type}=action;//this is syntactic sugar, you dont need it, but it makes for good readability

  // these will replace initial stae with whatever comes back from the server
  switch(type){
    case 'GET':
      return payload;
    default:
      return state;
  }
}