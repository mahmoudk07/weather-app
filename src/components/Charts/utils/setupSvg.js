export const setupSvg = (svg, width, height) => {
     svg
    .attr("width", width)
    .attr("height", height)
    .classed("overflow-x-hidden", true)
};