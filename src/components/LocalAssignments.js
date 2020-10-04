export const getLocalAssignments = () => {
  const assignments = localStorage.getItem("assignments");
  return JSON.parse(assignments);
};

