import StatusLayoutWrapper from "../components/Status/StatusLayoutWrapper";

const TurnitinPage = () => {
  return (
    <StatusLayoutWrapper
      name={"Turnitin"}
      url={"https://turnitin.statuspage.io/api/v2/status.json"}
    />
  );
};

export default TurnitinPage;
