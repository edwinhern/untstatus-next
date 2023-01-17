export function StatusFormatter(statusIndicator) {
  const map = {
    none: "green",
    minor: "orange",
    danger: "red",
  };
  return map[statusIndicator] || "purple";
}

export function DateFormatter(date) {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return newDate.toLocaleString("en-US", options);
}
