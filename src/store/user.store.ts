import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "./types/User.type";
import router from "@/router";

export const useUserStore = defineStore("user", () => {
  const user = ref<User>();
  const email = ref(localStorage.getItem("email"));
  const name = ref(localStorage.getItem("name"));
  const picture = ref(localStorage.getItem("picture"));
  const token = ref(localStorage.getItem("token"));
  const login = async () => {
    try {
      // Redirect user to Google OAuth2 authorization URL
      const authUrl =
        "https://accounts.google.com/o/oauth2/v2/auth" +
        "?response_type=code" +
        "&client_id=593588518556-laoh0qf29n6kr4ag2835t62ruspm6mom.apps.googleusercontent.com" +
        "&redirect_uri=http://localhost:3000/api/auth/google/redirect" +
        "&scope=email%20profile";

      window.location.href = authUrl;
    } catch (err) {
      console.log(err);
    }
  };
  const saveTolocatStorage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const name = urlParams.get("name");
    const picture = urlParams.get("picture");
    const token = urlParams.get("token");
    if (email && name && picture && token) {
      // save the email, name, and picture to the local storage
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("picture", picture);
      localStorage.setItem("token", token);
      user.value = {
        email: email,
        name: name,
        photo: picture,
      };
      // remove the email, name, and picture parameters from the URL
      window.history.replaceState({}, document.title, window.location.pathname);
      location.reload();
    }
  };

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("picture");
    localStorage.removeItem("token");
    localStorage.removeItem("event");
    router.push("/login");
  };

  return {
    user,
    login,
    saveTolocatStorage,
    logOut,
    email,
    name,
    picture,
    token,
  };
});
