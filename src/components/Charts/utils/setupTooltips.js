import * as d3 from "d3";

export const setupTooltips = (svg, data, xScale, yScale, type) => {
  // Tooltip setuo and mouseOver , mouseOut funcitons are common between 
  // circle tooltip and bar tooltip. So, I merged them into one function.

  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background-color", "#333")
    .style("color", "#fff")
    .style("padding", "5px 10px")
    .style("border-radius", "4px")
    .style("opacity", 0);
  
  // Function to handle mouseOver event
  const handleMouseOver = (event, d, Type, unit) => {
    tooltip.transition().duration(200).style("opacity", 0.9);
    tooltip
      .html(`${Type}: ${d[Type]}${unit}`)
      .style("left", event.pageX + 5 + "px")
      .style("top", event.pageY - 28 + "px");
  };

  // Function to handle mouseOut event
  const handleMouseOut = () => {
    tooltip.transition().duration(500).style("opacity", 0);
  };
  // here depending on type passed to the function, circle or bar tooltip is created.
  if (type === 'circle') {
      const createCircles = (className, tempType, color, unit) => {
        svg
          .selectAll(`.${className}`)
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", (d) => xScale(d.name.slice(0, 3)))
          .attr("cy", (d) => yScale(d[tempType]))
          .attr("r", 4)
          .attr("fill", color)
          .on("mouseover", (event, d) => handleMouseOver(event, d, tempType, unit))
          .on("mouseout", handleMouseOut);
      };

      createCircles("dotMin", "avgMinTemp", "#9073cd", "°C");
      createCircles("dotMax", "absMaxTemp", "#e07f9c", "°C");
  }
  else {
    const createBars = (className, rainfallType, unit) => { 
      svg
        .selectAll(`.${className}`)
        .on("mouseover", (event, d) => handleMouseOver(event, d, rainfallType, unit))
        .on("mouseout", handleMouseOut);
    }
    createBars("bar", "avgDailyRainfall", "mm");
  }
};
