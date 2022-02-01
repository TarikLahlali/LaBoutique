import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import {Capitalize} from "../utils/utils"
const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":
      const user = jwtDecode(action.token); 
      toast(`Velkommen tilbake ${Capitalize(user.name)}...`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
      
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast(`Ha det bra...`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;