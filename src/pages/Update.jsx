import React, { useState } from 'react';
import { useLoaderData, Form } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData()
    const bookmark = useLoaderData()
    const [formData, setFormData] = useState(bookmark);
    const [bookmarks, setBookmarks] = useState(data);

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(bookmark)
    try {
      const response = await fetch(`https://five23-bookmarked-backened.onrender.com/bookmark/update/${bookmark._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value)
    setFormData(prevState => {
        return {...prevState, [event.target.name] : event.target.value}
    })
  };

  return (
    <div>
        <div>
      <h3 style={{ textDecoration: 'underline', fontSize:'25px', fontStyle:'italic'}}> Update Bookmark</h3>
      <Form onSubmit={handleSubmit}>
        <input
          type="text" name="title" placeholder="Website Name" value={formData.title} onChange={handleChange}
          style={{width: '15%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', color: '#333'}}/>
        <input
          type="text" name="url" placeholder="http://" value={formData.url} onChange={handleChange}
          style={{width: '15%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', color: '#333'}}/>
        <input
          type="submit" value="Update Bookmark!"
          style={{width: '15%', padding: '10px', backgroundColor: '#71b8e4', color: 'black', border: 'none', borderRadius: '5px', fontSize: '16px'}}/>
      </Form>
    </div>
    </div>
  )
}

export default Update
