import React from "react";

const About = ({ image, about }) => {
  return (
    <aside>
      <img src={image} />
      <p>{about}</p>
    </aside>
  );
};

export default About;
