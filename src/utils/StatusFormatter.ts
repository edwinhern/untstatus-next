export enum StatusIndicator {
  None = "none",
  Minor = "minor",
  danger = "danger",
}

export const StatusColors: Record<StatusIndicator, string> = {
  [StatusIndicator.None]: "green",
  [StatusIndicator.Minor]: "orange",
  [StatusIndicator.danger]: "red",
};
