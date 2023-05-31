import StatusLayoutWrapper from "../components/Status/StatusLayoutWrapper";

const ZoomPage = () => {
  return (
    <StatusLayoutWrapper
      name={"Zoom"}
      url={"https://status.zoom.us/api/v2/status.json"}
    />
  );
};

export default ZoomPage;
