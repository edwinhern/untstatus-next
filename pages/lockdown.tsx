import StatusLayoutWrapper from "../components/Status/StatusLayoutWrapper";

const RespondusPage = () => {
  return (
    <StatusLayoutWrapper
      name={"Lockdown"}
      url={"https://status.respondus.com/api/v2/status.json"}
    />
  );
};

export default RespondusPage;
