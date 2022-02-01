import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://laboutique-node.herokuapp.com/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTU5NGM2NzM0NDMyNzdmNThjMjQ2NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjgwMDkwNCwiZXhwIjoxNjQzMDYwMTA0fQ.izlIcQfMDTMCIEmtNHGcVGT0rqiZJSYbFIdueSv-Oe4";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
console.log("user " + user);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
  // header: { token: `${TOKEN}` },
});
console.log("token " +TOKEN);
