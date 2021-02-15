import "../styles/globals.css";
// comment this out to get a real simple backend
// import React from "react";
// import "firebase/firestore";
// import "firebase/auth";
// import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

// const fuego = new Fuego(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return (
    // <FuegoProvider fuego={fuego}>
    <Component {...pageProps} />
    // </FuegoProvider>
  );
}

export default MyApp;
