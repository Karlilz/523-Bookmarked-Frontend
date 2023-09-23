import React, { useState } from 'react';
import { Form, Link, useLoaderData} from 'react-router-dom';

const Index = () => {
  const data = useLoaderData()
  const [formData, setFormData] = useState({ title: '', url: '' });
  const [bookmarks, setBookmarks] = useState(data);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://five23-bookmarked-backened.onrender.com/bookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setBookmarks([...bookmarks, data]);
        setFormData({ title: '', url: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handleEdit = (index) => {
  //   setEditIndex(index);
  // };

  const handleSave = (index, editedBookmark) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index] = editedBookmark;
    setBookmarks(updatedBookmarks);
    setEditIndex(null);
  };

  // const handleDelete = (index) => {
  //   const updatedBookmarks = bookmarks.filter((_, i) => i !== index);
  //   setBookmarks(updatedBookmarks);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3 style={{ textDecoration: 'underline', fontSize: '25px'}}>
        Bookmark a Helpful Coding Website
      </h3>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Website Name" value={formData.title} onChange={handleChange}
          style={{width: '15%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px',fontSize: '16px', color: '#333'}}/>

        <input type="text" name="url" placeholder="http://" value={formData.url} onChange={handleChange}
          style={{width: '15%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', color: '#333'}}/>

        <input type="submit" value="Add Bookmark!"
          style={{width: '15%', padding: '10px', backgroundColor: '#71b8e4', color: 'black', border: 'none',borderRadius: '5px', fontSize: '16px'}}/>
      </Form>

      <div>
        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '25px' }}>
          {bookmarks.map((bookmark, index) => (
            <li key={index}>
              {editIndex === index ? (
                <div>
                  <input type="text" name="title" value={bookmark.title} onChange={(e) =>
                      handleSave(index, { ...bookmark, title: e.target.value })}/>

                  <input type="text" name="url" value={bookmark.url} onChange={(e) =>
                      handleSave(index, { ...bookmark, url: e.target.value })}/>
                      
                  <button onClick={() => handleSave(index, bookmark)}>Save</button>
                </div>
              ) : (
                <div>
                  <a href={bookmark.url} target="_blank">
                    {bookmark.title}
                  </a>
                  {/* <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button> */}
                    <Form action={`/delete/${bookmark._id}`} method='POST'>
      <button type='submit' className="bg-pink-300 rounded-full" value='delete bookmark'> Delete Bookmark </button>
    </Form>

    <Link to={`/${bookmark._id}/edit`}>
        <button type="submit" className="bg-pink-300 rounded-full">
            Edit {bookmark.title}
        </button>
    </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
