const URL = "ADD OUR RENDERED URL"

// PEOPLE LOADER - INDEX
export const peopleLoader = async () => {
  const response = await fetch(URL+'/people')
    // turn the response to json 
  const people = await response.json()
  return people
}

// SHOW LOADER 
export const showLoader = async ({params}) => {
    const res = await fetch(URL+'/people/' + params.id)
    // turn the response to json
    const people = await res.json()
    return people;
  }

// NOTES
// This file will hold all our loaders
