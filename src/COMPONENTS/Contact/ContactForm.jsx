import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import './ContactForm.css'
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const APP_ID = "8281DA33-768F-49D7-A4C4-3B13AF6775F1";
  const API_KEY = "4339D949-0422-48B3-ADB6-D6F0CFB1419C";
  const BASE_URL = `https://api.backendless.com/${APP_ID}/${API_KEY}/data`;

  async function handleSubmit(values) {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/Mog-rex-messages`, values);
      alert("Message sent successfully!");
      console.log(response);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) errors.firstName = "First name is required";
      if (!values.lastName) errors.lastName = "Last name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.message) errors.message = "Message is required";
      return errors;
    },
    onSubmit: handleSubmit,
  });

  return (
    <section className="contactSection">
      <h2 style={{fontSize:"3rem"}}> Contact Us</h2>
      <div className="formAndMapContainer">
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div className="MessageInputs">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Your first name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p style={{color:"red"}}>{formik.errors.firstName}</p>
          )}
        </div>

        <div className="MessageInputs">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Your last name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p style={{color:"red"}}>{formik.errors.lastName}</p>
          )}
        </div>

        <div className="MessageInputs">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{color:"red"}}>{formik.errors.email}</p>
          )}
        </div>

        <div className="MessageInputs">
          <label>Message</label>
          <textarea
            name="message"
            placeholder=" Write your message here"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.message && formik.errors.message && (
            <p style={{color:"red"}}>{formik.errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586907413!2d36.68257868686788!3d-1.3028602779443763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1732368347330!5m2!1sen!2ske" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
    </section>
  );
}

export default ContactForm;
