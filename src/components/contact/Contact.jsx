import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import img from '../../assets/images/pricing.jpg';
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required*"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required*"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required*"),
  });

  // Formik for handling form state and submission
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Store in localStorage for immediate UI update
        const storedQueries = JSON.parse(localStorage.getItem("queries")) || [];
        const updatedQueries = [...storedQueries, values];
        localStorage.setItem("queries", JSON.stringify(updatedQueries));
        window.dispatchEvent(new Event("storage")); // Notify other components

        // Send data to backend
        const response = await fetch("https://contact-data-gy1m.onrender.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Form submitted successfully!");
          resetForm();
        } else {
          alert(data.message || "Submission failed.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Help & Friendly Support" cover={img} />
        <div className="container">
          <form className="shadow" onSubmit={formik.handleSubmit}>
            <h4>Fill Up The Form</h4> <br />
            
            <div className="input-field">
  <input
    type="text"
    name="name"
    placeholder="Name"
    value={formik.values.name}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.name && formik.errors.name && (
    <div className="error">{formik.errors.name}</div>
  )}
</div>

<div className="input-field">
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.email && formik.errors.email && (
    <div className="error">{formik.errors.email}</div>
  )}
</div>

<div className="textarea-field">
  <textarea
    name="message"
    cols="30"
    rows="10"
    placeholder="Enter Your Message"
    value={formik.values.message}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  ></textarea>
  {formik.touched.message && formik.errors.message && (
    <div className="error">{formik.errors.message}</div>
  )}
</div>

<button type="submit" disabled={formik.isSubmitting}>
  {formik.isSubmitting ? "Submitting..." : "Submit Request"}
</button>

          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
