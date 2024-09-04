export const AddTitle = (svg, width) => {
    svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#cfcfcf")
        .text("Min/Max Temeratures over a year in °C");
}