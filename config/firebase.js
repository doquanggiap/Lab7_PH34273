
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhBTz8gUICU5fLJcUm-iFPfkFQj4lh2p8",
    authDomain: "lab7-cro102-ph34273.firebaseapp.com",
    projectId: "lab7-cro102-ph34273",
    storageBucket: "lab7-cro102-ph34273.appspot.com",
    messagingSenderId: "739120329700",
    appId: "1:739120329700:web:29abe92dbc0897b18d8df1"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };