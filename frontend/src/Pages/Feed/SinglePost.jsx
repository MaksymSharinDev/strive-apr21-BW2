import { Row, Button, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "../../modules/singlejob.module.css";
const SinglePost = ({ post }) => {
  const [individualPost, setIndividualPost] = useState(post);
  const [isShown, setShown] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    let id = e.target.id;
    setIndividualPost({ ...individualPost, [id]: e.target.value });
  };
  const fileChange = async (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
      {
        method: "PUT",
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
    setShown(false);
    const formData = new FormData();
    formData.append("post", selectedFile);
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
    setShown(false);
    setTimeout(function () {
      window.location.reload();
    }, 2000); // i hope 2 sec will be enoughh to finish upload hehe
    // window.location.reload();
  };
  const handleDelete = async () => {
    await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
        },
      }
    );
    setShown(false);
    window.location.reload();
  };
  return (
    <>
      <div>
        {post?.user?._id === "60c71dfc291930001560ab9a" && (
          <p className={styles.edit} onClick={() => setShown(true)}>
            EDIT
          </p>
        )}
      </div>
      <Row>
        <h5>{post.username}</h5>
      </Row>
      <Row>
        <p>Created at post {post.createdAt}</p>
      </Row>
      <Row>
        <p>updatedAt {post.updatedAt}</p>
      </Row>
      <Row>
        <p style={{ maxHeight: "300px", overflow: "hidden" }}>
          Text: {post.text}
        </p>
      </Row>
      <Row>
        {post.image && (
          <img src={post.image} alt="post" style={{ maxWidth: "40%" }} />
        )}
      </Row>
      {isShown && (
        <div className={styles.modal}>
          <div style={{ padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Edit your experience</h2>
              <h2 className={styles.edit} onClick={() => setShown(false)}>
                Close
              </h2>
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
              <Button variant="danger" onClick={() => handleDelete()}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePost;