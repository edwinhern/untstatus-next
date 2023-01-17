import { StatusFormatter, DateFormatter } from "../components";
import { StatusLayout } from "../components/Status.Component";

const ZoomPage = (props) => {
  return <StatusLayout props={props} />;
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://status.zoom.us/api/v2/status.json`);
    const data = await res.json();
    const Date = DateFormatter(data.page.updated_at);
    const StatusColor = StatusFormatter(data.status.indicator);
    const Description = data.status.description;

    return {
      props: {
        Name: "Zoom",
        WorkLink: "https://status.zoom.us/",
        Date,
        StatusColor,
        Description,
      },
    };
  } catch (err) {
    console.error("Error Fetching API Data:", err);
  }
}

export default ZoomPage;
