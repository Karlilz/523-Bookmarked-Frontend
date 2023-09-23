import { redirect } from "react-router-dom";

const URL = 'https://five23-bookmarked-backened.onrender.com/'


// CREATE ACTION 
export const createAction = async ({request}) => {
    const formData = await request.formData()

    const bookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    };

// SEND NEW BOOKMARK TO OUR API
await fetch(URL + '/bookmark', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookmark),
  })

   return redirect("/")
}

// UPDATE ACTION 
export const updateAction = async ({ params, request }) => {
    const formData = await request.formData();
  
    const bookmark = {
      title: formData.get("title"),
      url: formData.get("url"),
    };
  
    await fetch(URL + "/bookmark/" + params.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    });
  
    return redirect(`/${params.id}`);
  };


// DELETE ACTION
export const deleteAction = async ({params}) => {
    await fetch (URL + '/bookmark/' +params.id, {
        method: 'delete',
        headers: {
            "Content-Type": "application/json",
        },
    });
    return redirect('/')
};
