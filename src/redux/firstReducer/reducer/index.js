import { allUsers, Notes } from '../../../component/json/login-json';
let initialState = {
  login: {
    success: false,
    error: false,
    loading: false,
    data: {}
  },
  notesData: {
    success: false,
    error: false,
    loading: false,
    data: {}
  }
  // userInf: {
  //   name: "badal",
  //   age: 27
  // }
}

export default function loginReducer(state = initialState, action) {
  console.log("in login", action.type)
  switch (action.type) {
    case "loginRequest":
      state = {
        ...state,
        login: {
          success: true,
          error: false,
          loading: false,
          data: { allUsers }
        }
      }
      break;
    case "NOTES_REQUEST":
      state = {
        ...state,
        notesData: {
          success: true,
          error: false,
          loading: false,
          data: { Notes }
        }
      }
      break;
    default:
      return state;
  }
  return state;

}

export function dashboardNotesReducer(state = initialState, action) {
  console.log("in dahboard", action.type)
  switch (action.type) {
    case "NOTES_REQUEST":
      state = {
        ...state,
        notesData: {
          success: true,
          error: false,
          loading: false,
          data: { Notes }
        }
      }
      break;
    default:
      return state
  }
  return state
}
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        userInf: {
          name: action.payload,
        }
      }
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload,
      }
      break;
  }
  return state;
}