import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleCancel() {
    // handle cancel
    navigate(-1);
  }

  function handleSubmit(event) {
    // handle submit
    event.preventDefault();

    const newUser = {
      name: name,
      title: title,
      mail: mail,
      image: image
    };

    console.log(newUser);
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Create New User</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input id="name" type="text" placeholder="Type a name" onChange={e => setName(e.target.value)} />
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Type a title" onChange={e => setTitle(e.target.value)} />
          <label htmlFor="mail">Mail</label>
          <input id="mail" type="mail" placeholder="Type a mail" onChange={e => setMail(e.target.value)} />
          <label htmlFor="mail">Image URL</label>
          <input type="url" placeholder="Paste image url" onChange={e => setImage(e.target.value)} />
          <label htmlFor="image-preview"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={image ? image : "https://placehold.co/600x400?text=Paste+an+image+URL"}
            alt="Choose"
            onError={e => (e.target.src = "https://placehold.co/600x400?text=Error+loading+image")}
          />

          <div className="btns">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
