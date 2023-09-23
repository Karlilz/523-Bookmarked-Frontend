import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const bookmark = useLoaderData();
  const [formData, setFormData] = useState(bookmark);

  const handleChange = (e) => {
    setFormData(prevState => {
        return {...prevState, [e.target.name] : e.target.value}
    })
  }

  return (
    <div>
      <form action={`/update/${bookmark._id}`} method='post'>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder='Enter Webiste'/>
        <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder='Enter URL'/>
        {/* <input className="rounded-full p-2 bg-blue-200" type="submit" value={`Update ${people.name}`}/> */}
      </form>
    </div>
  );
}

export default Update;
