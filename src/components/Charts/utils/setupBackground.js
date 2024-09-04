export const setupBackground = (svg, width, height) => {
  svg
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("rx", 15)
    .attr("ry", 15)
    .attr("fill", "#0f1b29");
};
