"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const MoffattContactForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    contactMessage: Yup.string().required("A message is required."),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    category: Yup.string().required("Please select a category"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accepting Terms and Conditions is required"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
      <div className="ptf-form-group">
        <label data-number="01">Name</label>
        <input
          type="text"
          name="name"
          {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="02">Organization (optional)</label>
        <input
          type="text"
          name="organization"
          {...register("organization")}
          className={`${errors.organization ? "is-invalid" : ""}`}
        />
        {errors.organization && (
          <div className="invalid-feedback">{errors.organization?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="03">Email</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          className={` ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="04">Message</label>
        <textarea
          type="text"
          name="contactMessage"
          {...register("contactMessage")}
          className={`${errors.contactMessage ? "is-invalid" : ""}`}
        />
        {errors.contactMessage && (
          <div className="invalid-feedback">{errors.contactMessage?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="06">Category</label>
        <select
          name="category"
          {...register("category")}
          className={`${errors.category ? "is-invalid" : ""}`}
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Weddings">Weddings</option>
          <option value="Rentals">Rentals</option>
          <option value="Business">Business</option>
          <option value="Employment">Employment</option>
        </select>
        {errors.category && (
          <div className="invalid-feedback">{errors.category?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.5rem" }}></div>

      <div className="ptf-form-group agreement-checkbox ">
        <input
          name="acceptTerms"
          type="checkbox"
          id="acceptTerms"
          {...register("acceptTerms")}
          className={` ${errors.acceptTerms ? "is-invalid" : ""}`}
        />

        <label className="ptf-checkbox" htmlFor="acceptTerms">
          <span className="ptf-checkbox__checkmark"></span>I agree to receive
          occasional Moffatt-Ladd newsletters containing updates and occasional
          event promotions for the historic site.
        </label>
        {errors.acceptTerms && (
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

      <button className="ptf-submit-button">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>
      {/* End .ptf-submit-button */}
    </form>
  );
};

export default MoffattContactForm;
