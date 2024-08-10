"use client";

import React from "react";
import { useState } from "react";

export default function MoffattContactForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetch("/api/contactForm", {
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          email
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log({ data })
        })
    } catch {
      console.error("ERR");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ptf-form-group">
        <label data-number="01">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className={""}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="ptf-spacer" style={{ "--ptf-xxl": ".75rem" }}></div>
      
      <div className="ptf-form-group">
        <label data-number="01">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className={""}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="ptf-spacer" style={{ "--ptf-xxl": ".75rem" }}></div>
      
      <div className="ptf-form-group">
        <label data-number="01">Message</label>
        <input
          name="message"
          type="text"
          placeholder="Message"
          required
          className={""}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

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
    </form>
  );
}
