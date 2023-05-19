function formatDate(dateString) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
}
