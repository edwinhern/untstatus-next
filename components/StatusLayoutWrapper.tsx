import { StatusLayout } from "./Status.Component";
import { useData } from "../src/hooks/useData";

const StatusLayoutWrapper = ({ name, url }) => {
  const props = useData(name, url);

  if (!props.data || props.loading) return null;

  return <StatusLayout {...props} />;
};

export default StatusLayoutWrapper;
