import StatusLayoutWrapper from "../components/StatusLayoutWrapper";

const ZoomPage = (props) => {
  return (
    <StatusLayoutWrapper
      name={"Zoom"}
      url={"https://status.zoom.us/api/v2/status.json"}
    />
  );
};

export default ZoomPage;
