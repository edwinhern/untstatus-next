import { StatusFormatter, DateFormatter } from "../components";
import { StatusLayout } from "../components/Status.Component";

const CanvasPage = (props) => {
  return <StatusLayout props={props} />;
};

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `https://status.instructure.com/api/v2/status.json`
    );
    const data = await res.json();
    const Date = DateFormatter(data.page.updated_at);
    const StatusColor = StatusFormatter(data.status.indicator);
    const Description = data.status.description;

    return {
      props: {
        Name: "Canvas",
        WorkLink: "https://statushistory.instructure.com/unt.instructure.com",
        Date,
        StatusColor,
        Description,
      },
    };
  } catch (err) {
    console.error("Error Fetching API Data:", err);
  }
}

export default CanvasPage;
