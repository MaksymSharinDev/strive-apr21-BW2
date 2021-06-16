const SingleJob = ({ job }) => {
  return (
    <>
      <p>Role: {job.role}</p>
      <p>Company: {job.company}</p>
      <p>Description: {job.description}</p>
      <p>Start Date: {job.startDate}</p>
      <p>End date: {job.endDate}</p>
      <p>Area: {job.area}</p>
      <hr />
    </>
  );
};

export default SingleJob;
