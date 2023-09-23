import React, { useState } from 'react';
import {Form } from 'react-router-dom'

const Index = () => {
  const [formData, setFormData] = useState({ name: '', link: '' });
  const [bookmarks, setBookmarks] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('https://five23-bookmarked-backened.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setBookmarks([...bookmarks, data]);
        setFormData({ name: '', link: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3 style={{ textDecoration: 'underline', fontSize: '25px', fontStyle: 'italic' }}>
        Bookmark a Helpful Coding Website
      </h3>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Website Name" value={formData.name} onChange={handleChange}
          style={{width: '15%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', color: '#333'}}/>

        <input type="text" name="link" placeholder="http://" value={formData.link} onChange={handleChange}
          style={{width: '15%', padding: '10px',marginBottom: '15px', border: '1px solid #ccc',borderRadius: '5px',fontSize: '16px', color: '#333'}}/>

        <input type="submit" value="Add Bookmark!"
          style={{width: '15%',padding: '10px',backgroundColor: '#71b8e4',color: 'black',border: 'none', borderRadius: '5px',fontSize: '16px'}}/>
      </Form>

      <div>
        <h3>Your Bookmarks</h3>
        <ul>
          {bookmarks.map((bookmark, index) => (
            <li key={index}>
              <a href={bookmark.link}>
                {bookmark.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
