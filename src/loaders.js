const URL = "ADD OUR RENDERED URL"

// BOOKMARK LOADER - INDEX
export const bookmarkLoader = async () => {
  const response = await fetch(URL+'/bookmark')
  const bookmark = await response.json()
  return bookmark
}

// SHOW LOADER 
export const showLoader = async ({params}) => {
    const res = await fetch(URL+'/bookmark/' + params.id)
    const bookmark = await res.json()
    return bookmark;
  }


