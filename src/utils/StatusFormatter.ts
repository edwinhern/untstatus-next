export function StatusFormatter(statusIndicator) {
  const map: Record<string, string> = {
    none: "green",
    minor: "orange",
    danger: "red",
  };
  return map[statusIndicator] || "purple";
}
