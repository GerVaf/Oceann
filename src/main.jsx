import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Global/store.js";

const MessengerChatPlugin = () => {
  useEffect(() => {
    // Your Messenger Chat Plugin Code
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v18.0",
        });
      };
    };
  }, []);

  return (
    <>
      {/* Your Chat Plugin code */}
      <div id="fb-root"></div>
      <div className="fb-customerchat" page_id="106777094682154" attribution="biz_inbox"></div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* Render the Messenger Chat Plugin Code */}
    <MessengerChatPlugin />

    {/* Render the rest of your React app */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
