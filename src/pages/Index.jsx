import React, { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', link: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3 style={{ textDecoration: 'underline', fontSize:'25px'}}>Bookmark a Helpful Coding Website</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text" name="name" placeholder="Website Name" value={formData.name} onChange={handleChange}
          style={{
            width: '15%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            color: '#333',
          }}
        />
        <input
          type="text" name="link" placeholder="http://" value={formData.link} onChange={handleChange}
          style={{
            width: '15%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            color: '#333',
          }}
        />
        <input
          type="submit" value="Add Bookmark!"
          style={{
            width: '15%',
            padding: '10px',
            backgroundColor: '#71b8e4',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        />
      </form>
    </div>
  );
};

export default Index;
