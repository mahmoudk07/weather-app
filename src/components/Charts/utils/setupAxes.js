import * as d3 from "d3";
export const setupAxes = (svg, data, width, height, margin, xScale, yScale) => {
  // Create X-axis
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale).tickSizeOuter(0))
    .selectAll("text")
    .attr("fill", "#cfcfcf")
    .style("font-weight", "bold");
  // Create Y-axis
  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(
      d3
        .axisLeft(yScale)
        .ticks(6)
        .tickSize(-width + margin.left + margin.right)
    )
    .selectAll("text")
    .attr("fill", "#cfcfcf")
    .style("font-weight", "bold");
  
  // Style The Gridline
  svg.selectAll(".tick line").attr("stroke", "#555").attr("stroke-width", 1);

  svg.selectAll(".domain").remove();
};
