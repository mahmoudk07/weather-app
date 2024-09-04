import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import useResizeObserver from "../../../hooks/useResizeObserver";  // Import the custom hook

const RainfallChart = ({ data }) => {
    const svgRef = useRef();
    const dimensions = useResizeObserver(svgRef);  // Use the hook to get dimensions

    const margin = { top: 30, right: 30, bottom: 40, left: 60 };
    const { width, height } = dimensions;

    // Memoize scales
    const xScale = useMemo(() => d3.scaleBand()
        .domain(data.map(d => d.name.slice(0 , 3)))
        .range([margin.left, width - margin.right])
        .padding(0.2), [data, width]);

    const yScale = useMemo(() => d3.scaleLinear()
        .domain([0, d3.max(data, d => d.avgDailyRainfall)])
        .nice()
        .range([height - margin.bottom, margin.top]), [data, height]);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Clear previous content
        svg.selectAll("*").remove();

        // Setup the chart
        setupSvg(svg, width, height);
        setupBackground(svg, width, height);

        // Axes
        setupAxes(svg, width, height, margin);

        // Rainfall bars
        drawRainfallBars(svg, data, xScale, yScale);

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", 25)  // Adjust the value as needed
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", "#cfcfcf")
            .classed("title", true)
            .text("Average Daily Rainfall in mm");

        // Tooltip
        setupTooltips(svg, data, xScale, yScale);

    }, [data, dimensions, xScale, yScale]);

    const setupSvg = (svg, width, height) => {
        svg
            .attr("width", width)
            .attr("height", height)
            .classed("svg-container", true); // Add a class for styling
    };

    const setupBackground = (svg, width, height) => {
        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("rx", 15)
            .attr("ry", 15)
            .attr("fill", "#0f1b29"); // Dark background
    };

    const setupAxes = (svg, width, height, margin) => {
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale).tickSizeOuter(0))
            .selectAll("text")
            .attr("fill", "#e0e0e0") // Light text color
            .style("font-weight", "bold");

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale).ticks(6).tickSize(-width + margin.left + margin.right))
            .selectAll("text")
            .attr("fill", "#e0e0e0") // Light text color
            .style("font-weight", "bold");

        svg.selectAll(".tick line")
            .attr("stroke", "#555555") // Darker line color
            .attr("stroke-width", 1);

        svg.selectAll(".domain").remove();
    };

    const drawRainfallBars = (svg, data, xScale, yScale) => {
        svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.name.slice(0, 3)))
            .attr("y", d => yScale(d.avgDailyRainfall))
            .attr("width", xScale.bandwidth())
            .attr("height", d => height - margin.bottom - yScale(d.avgDailyRainfall))
            .attr("fill", "#486de8"); // Accent color for bars
    };

    const setupTooltips = (svg, data, xScale, yScale) => {
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background-color", "#333333") // Dark tooltip background
            .style("color", "#e0e0e0") // Light tooltip text color
            .style("padding", "5px 10px")
            .style("border-radius", "4px")
            .style("opacity", 0);

        svg.selectAll(".bar")
            .on("mouseover", (event, d) => {
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(`Rainfall: ${d.avgDailyRainfall} mm`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => {
                tooltip.transition().duration(500).style("opacity", 0);
            });
    };

    return (
        <div className="">
            <svg ref={svgRef}></svg>
        </div>
    );
};
export default RainfallChart;
