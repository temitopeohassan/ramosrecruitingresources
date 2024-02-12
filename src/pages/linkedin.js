
import React, { useEffect } from "react";

const Linkedin = () => {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/ramos-recruiting-resources/";
  }, []);

  return <div>Redirecting...</div>;
};

export default Linkedin;
