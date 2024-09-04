export const drawRainfallBars = (svg, data, xScale, yScale, height, margin) => {
  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => xScale(d.name.slice(0, 3)))
    .attr("y", (d) => yScale(d.avgDailyRainfall))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => height - margin.bottom - yScale(d.avgDailyRainfall))
    .attr("fill", "#486de8"); 
};
