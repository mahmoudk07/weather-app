export const setupSvg = (svg, width, height) => {
     svg
    .attr("width", width)
    .attr("height", height)
    .classed("xss:w-[375px] xs:w-[440px] md:w-[470px]", true)
};