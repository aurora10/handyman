"use client";

import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="cookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      declineButtonStyle={{ fontSize: "13px" }}
      expires={150}
      onAccept={() => {
        Cookies.set("cookieConsent", "true", { expires: 150 });
      }}
      onDecline={() => {
        Cookies.set("cookieConsent", "false", { expires: 150 });
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
