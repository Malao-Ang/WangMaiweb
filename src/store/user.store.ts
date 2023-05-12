import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "./types/User.type";
import auth from "@/services/auth";
import http from "@/services/axios";

export const useUserStore = defineStore("user", () => {
  const user = ref<User>();

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
    if (email && name && picture) {
      // save the email, name, and picture to the local storage
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("picture", picture);

      // remove the email, name, and picture parameters from the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  return { user, login, saveTolocatStorage };
});
