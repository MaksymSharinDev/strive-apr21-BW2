import { Card, Spinner, Button, Form } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsPencil } from "react-icons/bs";
import styles from "../../../modules/about.module.css";
import { useState, useEffect } from "react";
import AboutModal from "./AboutModal";
import { BiOutline } from "react-icons/bi";
const About = () => {
  const [bio, setBio] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isShown, setShown] = useState(false);
  //   const [input, setInput] = useState(bio);
  useEffect(() => {
    setBio("");
    setLoading(true);
    const fetching = async function () {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
          },
        }
      );
      let userData = await response.json();
      setBio(userData.bio);
      setLoading(false);
    };
    fetching();
  }, [isShown]);

  const handleChange = (e) => {
    setBio(e.target.value);
  };
  const handleSubmit = async () => {
    await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
      },
      body: JSON.stringify({ bio: bio }),
    });
    setShown(false);
  };
  return (
    <>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>About</h4>
          <IconContext.Provider value={{ className: styles.icon }}>
            <div>
              <BsPencil onClick={() => setShown(true)} />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          {isLoading ? (
            <Spinner animation="border" role="status" />
          ) : (
            <p>{bio}</p>
          )}
        </div>
      </Card>
      {isShown && (
        <div className={styles.modal}>
          <div style={{ padding: "2rem" }}>
            <h4>Edit summary</h4>
            <hr />
            <p>Description</p>

            <Form.Control
              as="textarea"
              value={bio}
              onChange={(e) => handleChange(e)}
              style={{ height: "100px" }}
            />

            {/* <AboutModal bio={bio} /> */}

            <Button variant="success" onClick={() => handleSubmit()}>
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;