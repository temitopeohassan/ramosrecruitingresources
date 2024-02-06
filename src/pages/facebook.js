

import React, { useEffect } from "react";

const Facebook = () => {
  useEffect(() => {
    window.location.href = "https://www.facebook.com/";
  }, []);

  return <div>Redirecting...</div>;
};

export default Facebook;

