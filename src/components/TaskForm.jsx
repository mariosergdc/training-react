import { useState } from 'react';
import './TaskForm.css';

function TaskForm() {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${form.name}, Description: ${form.description}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
