export const bookmarkLoader = async () => {
    const res =await fetch('http://localhost:3000/bookmark')
    const bookmark = await res.json()
    console.log(bookmark)
    return bookmark;
}