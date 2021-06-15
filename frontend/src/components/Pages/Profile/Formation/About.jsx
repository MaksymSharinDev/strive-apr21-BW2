import { Card, Spinner } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsPencil } from "react-icons/bs";
import styles from "../../../../modules/about.module.css";
import { useState, useEffect } from "react";
const About = () => {
  const [bio, setBio] = useState(null);
  const [isLoading, setLoading] = useState(false);
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
  }, []);
  return (
    <>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>About</h2>
          <IconContext.Provider value={{ className: styles.icon }}>
            <div>
              <BsPencil />
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
    </>
  );
};

export default About;
