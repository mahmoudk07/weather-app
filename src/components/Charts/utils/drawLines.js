export const drawTemperatureLines = (svg, data, lineMin, lineMax) => {
  // Draw Min Line
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#9073cd")
    .attr("stroke-width", 2)
    .attr("d", lineMin);
  // Draw Max Line
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#e07f9c")
    .attr("stroke-width", 2)
    .attr("d", lineMax);
};
