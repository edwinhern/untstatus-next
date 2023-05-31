import StatusLayoutWrapper from "../components/StatusLayoutWrapper";

const CanvasPage = () => {
  return (
    <StatusLayoutWrapper
      name={"Canvas"}
      url={"https://status.instructure.com/api/v2/status.json"}
    />
  );
};

export default CanvasPage;
