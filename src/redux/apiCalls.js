// import { loginFailure, loginStart, loginSuccess, logout} from "./userRedux";
// import { publicRequest } from "../requestMethods";

// // export const login = async (dispatch, user) => {
// //   dispatch(loginStart());
// //   try {
// //     const res = await publicRequest.post("/auth/signin", user);
// //     // const res = await publicRequest.post("/signin", user);
// //     dispatch(loginSuccess(res.data));
// //     console.log(res.data);
// //   } catch (err) {
// //     dispatch(loginFailure());
// //   }
// // };


// export const singout = async (dispatch, user) => {
//   dispatch(logout());
//   try {
//     const res = await publicRequest.post("/auth/logout", user);
//     alert("you are loged out")
//   } catch (err) {
//     alert(err)
//   }
// };
