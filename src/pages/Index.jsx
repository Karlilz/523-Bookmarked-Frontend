import React, { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', link: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3>Add a New Bookmark</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Website Name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="link" placeholder="http://" value={formData.link} onChange={handleChange}/>
        <input type="submit" value="Add Bookmark!" />
      </form>
    </div>
  );
};

export default Index;
