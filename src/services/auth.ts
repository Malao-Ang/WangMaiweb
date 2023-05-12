import http from "./axios";
function login() {
  return http.get("/auth/google/login");
}

export default { login };