import React from "react";
import "../style/email.css";

const Email = (props) => {
  const allEmails = [...props.email.coordinator.id];
  const emailMe = allEmails.splice(3, 1);
  const me = emailMe.map((email) => (
    <option key={email.id} value={email.id}>
      {email.email}
    </option>
  ));
  const emailOthers = allEmails.map((email) => (
    <option key={email.id} value={email.id}>
      {email.email}
    </option>
  ));
  return (
    <select name="email" id="email" className="email">
      <option disabled>Me</option>
      {me}
      <option disabled>Others</option>
      {emailOthers}
    </select>
  );
};

export default Email;
