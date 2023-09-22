import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Show = () => {
    const bookmark = useLoaderData()
  return (
    <div>
        <h1>{bookmark.title}</h1>
        <h2>{bookmark.url}</h2>
    </div>
  )
}

export default Show