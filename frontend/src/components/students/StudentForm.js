import React, { useState } from "react";

const StudentForm = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    class: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setStudent({ ...student, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Class"
        onChange={(e) => setStudent({ ...student, class: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
