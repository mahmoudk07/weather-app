import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import useResizeObserver from "../../hooks/useResizeObserver";  // Import the custom hook

const LineChart = ({ data }) => {
    const svgRef = useRef();
    const dimensions = useResizeObserver(svgRef);  // Use the hook to get dimensions

    const margin = { top: 30, right: 30, bottom: 40, left: 60 };

    const { width, height } = dimensions;

    // Memoize scales
    const xScale = useMemo(() => d3.scalePoint()
        .domain(data.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.5), [data, width]);

    const yScale = useMemo(() => d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.absMaxTemp, d.avgMinTemp))])
        .nice()
        .range([height - margin.bottom, margin.top]), [data, height]);

    // Memoize line generators
    const lineMin = useMemo(() => d3.line()
        .x(d => xScale(d.name))
        .y(d => yScale(d.avgMinTemp)), [xScale, yScale]);

    const lineMax = useMemo(() => d3.line()
        .x(d => xScale(d.name))
        .y(d => yScale(d.absMaxTemp)), [xScale, yScale]);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        // Clear previous content
        svg.selectAll("*").remove();

        // Setup the chart
        setupSvg(svg, width, height);
        setupBackground(svg, width, height);

        // Axes
        setupAxes(svg, data, width, height, margin);

        // Temperature lines
        drawTemperatureLines(svg, data, lineMin, lineMax);

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", 25)  // Adjust the value as needed
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", "#cfcfcf")
            .classed("title", true)
            .text("Min/Max Temeratures over a year in °C");

        // Tooltip
        setupTooltips(svg, data, xScale, yScale);

    }, [data, dimensions, lineMin, lineMax, xScale, yScale]);

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
            .attr("fill", "#0f1b29");
    };

    const setupAxes = (svg, data, width, height, margin) => {
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale).tickSizeOuter(0))
            .selectAll("text")
            .attr("fill", "#cfcfcf")
            .style("font-weight", "bold");

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale).ticks(6).tickSize(-width + margin.left + margin.right))
            .selectAll("text")
            .attr("fill", "#cfcfcf")
            .style("font-weight", "bold");

        svg.selectAll(".tick line")
            .attr("stroke", "#555")
            .attr("stroke-width", 1);

        svg.selectAll(".domain").remove();
    };

    const drawTemperatureLines = (svg, data, lineMin, lineMax) => {
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#9073cd")
            .attr("stroke-width", 2)
            .attr("d", lineMin);

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#e07f9c")
            .attr("stroke-width", 2)
            .attr("d", lineMax);
    };

    const setupTooltips = (svg, data, xScale, yScale) => {
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background-color", "#333")
            .style("color", "#fff")
            .style("padding", "5px 10px")
            .style("border-radius", "4px")
            .style("opacity", 0);

        svg.selectAll(".dotMin")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d.name))
            .attr("cy", d => yScale(d.avgMinTemp))
            .attr("r", 4)
            .attr("fill", "#9073cd")
            .on("mouseover", (event, d) => {
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(`Min Temp: ${d.avgMinTemp}°C`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => {
                tooltip.transition().duration(500).style("opacity", 0);
            });

        svg.selectAll(".dotMax")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d.name))
            .attr("cy", d => yScale(d.absMaxTemp))
            .attr("r", 4)
            .attr("fill", "#e07f9c")
            .on("mouseover", (event, d) => {
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(`Max Temp: ${d.absMaxTemp}°C`)
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

export default LineChart;
