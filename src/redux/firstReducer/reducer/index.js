let initialState = {
  math: {
    result: 10,
    // lastValues: [],
    name:"badal",
    age : 27
  } , 
  userInf : {
    name:"badal",
    age : 27
  }
}

export default function mathReducer(state = initialState, action) {
  
  console.log("in math reducer", action.payload, action.type,state.math.result);
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        math : {
          result : state.math.result+ action.payload,
          name : state.math.name
        }
      }
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        // lastValues: [...state.lastValues, action.payload]
      }
      break;
    default:
      return state;
  }
      return state;

}
export function userReducer (state=initialState , action){
  console.log("in user Reducer");
  
       switch (action.type) {
         case "SET_NAME": 
               state={
                 ...state,
                 userInf : {

                   name :  action.payload,
                 }
               }
           break;
         case "SET_AGE":
         state={
           ...state,
           age :  action.payload,
         }
           break;
       }
       return state;
     }