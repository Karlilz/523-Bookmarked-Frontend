import React from 'react'
import {Form, useSubmit } from 'react-router-dom'


const Index = () => {
  return (
    <div>
        <h3>Add a New Bookmark</h3>
        <Form action="/create" method='POST'>
            <input type='text' name="name" placeholder='Website Name'/>
            <input type='text' name="link" placeholder='http://'/>
            <input type='submit' value='Add Bookmark!' />
        </Form>
    </div>
  )
}

export default Index