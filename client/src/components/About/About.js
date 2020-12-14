import React from "react";
import MyPicture from "../../img/my-picture.jpg";

const About = () => {
  return (
    <>
      <div className="title">
        <h2>Kyle Jensen - Programmer, Gamer, and all around swell guy</h2>
        <img height="150px" src={MyPicture} alt="Myself" />
      </div>
      <div className="content-body">
        <p>
          Hello there! I'm Kyle, a developer studying NodeJS and React to become
          the worlds greatest (or let's stick with good) web developer. I'll be
          blogging my journey along the way while I try to navigate and better
          my own skillset, and potentially help others as well
        </p>
        <p>
          If I can help you out, or if you have any advice, feel free to drop me
          a line on my twitter page{" "}
          <a
            href="https://twitter.com/kjensen84"
            target="_blank"
            rel="noreferrer"
          >
            @kjensen84
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
