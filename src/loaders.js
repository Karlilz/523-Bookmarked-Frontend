const URL = 'https://five23-bookmarked-backened.onrender.com/'

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


