import { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Email:", email);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="email">Last Name</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
