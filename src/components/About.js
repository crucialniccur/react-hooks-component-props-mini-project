import React from "react";

const About = ({ image = "https://via.placeholder.com/215", about, alt }) => {
  return (
    <aside>
      <img src={image} alt={alt} />
      <p>{about}</p>
    </aside>
  );
};

export default About;
