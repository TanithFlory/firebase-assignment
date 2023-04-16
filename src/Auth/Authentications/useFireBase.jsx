import { initializeApp } from "firebase/app";

const useFireBase = () => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: "fir-auth-project-3d8f5",
    storageBucket: "fir-auth-project-3d8f5.appspot.com",
    messagingSenderId: "853733573543",
    appId: import.meta.env.VITE_APP_ID,
    measurementId: "G-W88E1LL03W",
  };
  const app = initializeApp(firebaseConfig);
  return app;
};

export default useFireBase;
