import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./FeedbackForm.module.css";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const notify = () =>
    toast.success("Logged in Console", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Email:", email);
    notify();
    setName("");
    setEmail("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Feedback Form</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>

      {/* Rendering the Toast */}
      <ToastContainer />
    </div>
  );
}

export default FeedbackForm;
