import { Card, Button, Form, Spinner } from "react-bootstrap";
import { useState } from "react";

const PostEditor = () => {
  const [individualPost, setIndividualPost] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setUploading] = useState(false);
  const handleChange = (e) => {
    let id = e.target.id;
    setIndividualPost({ ...individualPost, [id]: e.target.value });
  };
  const fileChange = async (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
        },
        body: JSON.stringify(individualPost),
      }
    );
    let data = await response.json();
    let postID = data._id;

    const formData = new FormData();
    formData.append("post", selectedFile);
    setUploading(true);
    if (selectedFile !== null) {
      await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postID}`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
            // "Content-type": "api/uploadfile",
          },
          body: formData,
        }
      );
    }

    setTimeout(function () {
      window.location.reload();
    }, 2000); // i hope 2 sec will be enoughh to finish upload hehe
    // window.location.reload();
  };
  return (
    <Card>
      <Card.Body>
        <div style={{ padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Add a post</h2>
          </div>
          <hr />

          <p>Text</p>
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
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostEditor;
