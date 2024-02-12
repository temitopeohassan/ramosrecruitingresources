

import React, { useEffect } from "react";

const Instagram = () => {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/ramosresources/";
  }, []);

  return <div>Redirecting...</div>;
};

export default Instagram;
