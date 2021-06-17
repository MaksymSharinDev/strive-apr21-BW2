import { useState, useEffect } from "react";
import { Spinner, Form, Button } from "react-bootstrap";
import styles from "../../../modules/exp.module.css";
import SingleJob from "./ExperienceSingleJob";
const Experience = () => {
  const [exp, setExp] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShown, setShown] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
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
        body: JSON.stringify(job),
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
        ) : exp.length >= 5 && !isExpanded ? (
          <>
            {exp.slice(0, 5).map((job) => (
              <div key={job._id}>
                <SingleJob job={job} />
              </div>
            ))}
            <p onClick={() => setExpanded(true)}>
              {isExpanded ? "Show Less" : "Show more"}
            </p>
          </>
        ) : exp.length >= 5 && isExpanded ? (
          <>
            {exp.map((job) => (
              <div key={job._id}>
                <SingleJob job={job} />
              </div>
            ))}
            <p onClick={() => setExpanded(false)}>
              {isExpanded ? "Show Less" : "Show more"}
            </p>
          </>
        ) : exp.length < 5 ? (
          <>
            {exp.map((job) => (
              <div key={job._id}>
                <SingleJob job={job} />
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
      {isShown && (
        <div className={styles.modal}>
          <div style={{ padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Add new experience</h2>
              <h2>Close</h2>
            </div>
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
              type="date"
              value={job.startDate}
              onChange={(e) => handleChange(e)}
            />

            <p>End date</p>
            <Form.Control
              id="endDate"
              type="date"
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
