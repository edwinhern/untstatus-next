import { StatusState } from "./StatusState";

export interface ApiDataState {
  loading: boolean;
  error: Error | null;
  data: StatusState | null;
}
