import { Card, Button, Form, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

const PostEditor = () => {
  const [individualPost, setIndividualPost] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setUploading] = useState(false);
  const [user, setUser] = useState({});
  const [isShown, setShown] = useState(false);

  useEffect(() => {
    const author = async () => {
      const userRaw = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/profile/60f81c6ffa4d9aa8d36e6581`
      );
      const userData = await userRaw.json();
      setUser(userData);
    };
    author();
  }, []);

  const handleChange = (e) => {
    let id = e.target.id;
    setIndividualPost({ ...individualPost, [id]: e.target.value });
  };
  const fileChange = async (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("cover", selectedFile);
    console.log(individualPost);
    if (selectedFile !== null) {
      let imageRaw = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/image-upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const { url } = await imageRaw.json();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/blogposts`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...individualPost,
          image: url,
          username: "admin",
          user: user,
        }),
      });

      setUploading(false);
    } else {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/blogposts`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...individualPost,
          username: "admin",
          user: user,
        }),
      });

      setUploading(false);
    }
    // let response = await fetch(
    //   `https://striveschool-api.herokuapp.com/api/posts/`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(individualPost),
    //   }
    // );
    // let data = await response.json();
    // let postID = data._id;

    setTimeout(function () {
      window.location.reload();
    }, 2000); // i hope 2 sec will be enoughh to finish upload hehe
    // window.location.reload();
  };
  return (
    <Card>
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {user?.image && (
              <>
                <img
                  src={user.image}
                  alt="avatar"
                  style={{ maxWidth: "50px", borderRadius: "50px" }}
                />
              </>
            )}
          </div>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "50px",
              display: "flex",
              padding: "1rem 7rem",
              backgroundColor: "grey",
            }}
            onClick={() => setShown(!isShown)}
          >
            <p style={{ alignSelf: "center", display: "block", margin: "0" }}>
              Start a post
            </p>
          </div>
        </div>
        <div style={{ padding: "2rem" }}>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={() => setShown(!isShown)}
          >
            <div>
              <p>Photo</p>
            </div>
            <div>
              <p>Video</p>
            </div>
            <div>
              <p>Event</p>
            </div>
            <div>
              <p>Write article</p>
            </div>
          </div>
          <hr />
          {isShown && (
            <>
              <Form.Control
                id="text"
                as="input"
                value={individualPost.text}
                onChange={(e) => handleChange(e)}
              />
              <input type="file" onChange={(e) => fileChange(e)} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="success" onClick={() => handleSubmit()}>
                  Save
                </Button>
                {isUploading && (
                  <>
                    <div style={{ display: "flex" }}>
                      <Spinner animation="border" role="status" />
                      <h3>Uploading... </h3>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostEditor;
