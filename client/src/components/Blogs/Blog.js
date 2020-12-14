import React from "react";

const Blog = () => {
  return (
    <div className="blog">
      <div className="title">
        <h3>My first blog - 12/13/2020</h3>
      </div>
      <div className="content-body">
        <p>
          Hello! I've been testing and learning about the world of React, and a
          fascinating world it is.
        </p>
        <p>
          I'm focused on breaking down elements that I'd normally hard code on
          pages and am trying to break them down into smaller bits. This makes
          for easier development, removing redundancy in code, and also removing
          any redundancy in code (and it gets rid of redundancy!).
        </p>
        <p>
          For instance, instead of writing code for a twitter link on every
          single page of this site, I'm going to write a component that can be
          added to every page, and any tweaks I'd like to the look and feel of
          that link, I can make in that one component
        </p>
        <p>
          This concept is a good way to break components into single purposes,
          which is key to writing clean code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
