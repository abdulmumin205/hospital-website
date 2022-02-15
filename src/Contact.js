import React from "react";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="headline">contact us</h1>
      <p className="sub-head">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        saepe?
      </p>
      <div className="contact">
        <form>
          <div className="name">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" />
          </div>
          <div className="email">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="comment">
            <label htmlFor="comment">comment</label>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Type Your Message"
            ></textarea>
          </div>
          <div className="contact-button">
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
