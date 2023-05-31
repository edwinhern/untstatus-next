import { useData } from "../../src/hooks/useData";
import { LoadingAnimation } from "../Animation/LoadingAnimation.Component";
import { StatusLayout } from "./Status.Component";

const StatusLayoutWrapper = ({ name, url }) => {
  const props = useData(name, url);

  if (!props.data || props.loading) return <LoadingAnimation />;

  return <StatusLayout {...props} />;
};

export default StatusLayoutWrapper;
