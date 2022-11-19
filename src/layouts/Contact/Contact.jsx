import { useFormik } from "formik";
import React from "react";
import "./contact.css";

const Contact = () => {
  // use react hook form instead of thes
  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      f_name: "",
      l_name: "",
      email: "",
      body: ""
    },
    onSubmit(values) {
      console.log(values);
    }
  });

  return (
    <section className="skills__container cont">
      <div className="cont__exp skills_head">
        <div className="cont_h d-flex">
          <span className="slash">/</span>
          <h3>CONNECT</h3>
        </div>
        <p className="exp__h proj">
          Let's <span className="gradient__text">start</span> a conversation
        </p>
      </div>
      <div>
        <form>
          <div className="input_flex__g d-flex">
            <div className="form_input">
              <label>First Name:</label>
              <input
                className="classic__input"
                name="f_name"
                value={values.f_name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
            </div>
            <div className="form_input">
              <label>Last Name</label>
              <input
                className="classic__input"
                name="l_name"
                value={values.l_name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
            </div>
          </div>
          <div className="form_input">
            <label>Enter your mail address</label>
            <input
              className="classic__input"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
            />
          </div>
          <div className="form_input">
            <label>Message</label>
            <textarea
              cols="9"
              rows="10"
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
              className="classic__input"
              name="body"
              type="text"
            />
          </div>
          <a
            href={`mailto:codewithbedant@gmail.com?subject=Hey Bedant, Myself ${values.f_name} ${values.l_name}.&body=${values.body}`}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ca49b4",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none"
            }}
          >
            Shazam
            <span role="img" aria-label="thunder">
              ⚡
            </span>
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
