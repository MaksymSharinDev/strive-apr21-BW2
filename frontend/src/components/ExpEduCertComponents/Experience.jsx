import { useState, useEffect } from "react";
import { Spinner, Form, Button } from "react-bootstrap";
import styles from "../../modules/exp.module.css";
const Experience = () => {
  const [exp, setExp] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShown, setShown] = useState(false);
  const [job, setJob] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: null,
    description: "",
    area: "",
  });
  useEffect(() => {
    setExp([]);
    setLoading(true);
    const fetching = async function () {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/60c71dfc291930001560ab9a/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
          },
        }
      );
      let expData = await response.json();
      setExp(expData);
      setLoading(false);
    };
    fetching();
  }, [isShown]);

  const handleAdd = async () => {
    setShown(true);
    console.log("gotta add new experience");
  };

  const handleSubmit = async () => {
    await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/60c71dfc291930001560ab9a/experiences",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
        },
        body: JSON.stringify({ job }),
      }
    );
    setShown(false);
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    let id = e.target.id;
    setJob({ ...job, [id]: e.target.value });
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Experience</h2>
        <h2 className={styles.addNew} onClick={() => handleAdd()}>
          +
        </h2>
      </div>
      <hr />
      <div>
        {isLoading ? (
          <Spinner animation="border" role="status" />
        ) : exp.length === 0 ? (
          <p>There's no experience to display</p>
        ) : (
          exp.map((job) => <p>{job.role}</p>)
        )}
      </div>
      {isShown && (
        <div className={styles.modal}>
          <div style={{ padding: "2rem" }}>
            <h2>Add new experience</h2>
            <hr />

            <p>Role</p>
            <Form.Control
              id="role"
              as="input"
              value={job.role}
              onChange={(e) => handleChange(e)}
            />

            <p>Company</p>
            <Form.Control
              id="company"
              as="input"
              value={job.company}
              onChange={(e) => handleChange(e)}
            />

            <p>Start date</p>
            <Form.Control
              id="startDate"
              as="input"
              value={job.startDate}
              onChange={(e) => handleChange(e)}
            />

            <p>End date</p>
            <Form.Control
              id="endDate"
              as="input"
              value={job.endDate}
              onChange={(e) => handleChange(e)}
            />

            <p>Description</p>
            <Form.Control
              id="description"
              as="input"
              value={job.description}
              onChange={(e) => handleChange(e)}
            />

            <p>Area</p>
            <Form.Control
              id="area"
              as="input"
              value={job.area}
              onChange={(e) => handleChange(e)}
            />

            <Button variant="success" onClick={() => handleSubmit()}>
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
