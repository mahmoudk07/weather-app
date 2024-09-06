import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import useResizeObserver from "../../../hooks/useResizeObserver";
import { setupSvg } from "../utils/setupSvg";
import { setupBarAxes } from "../utils/setupBarAxes";
import { setupBackground } from "../utils/setupBackground";
import { drawRainfallBars } from "../utils/drawBars";
import { setupTooltips } from "../utils/setupTooltips";
import { AddTitle } from "../utils/AddTitle";
const RainfallChart = ({ data }) => {
    const svgRef = useRef();
    const dimensions = useResizeObserver(svgRef);

    const margin = useMemo(() => ({ top: 30, right: 30, bottom: 40, left: 60 }), []);
    const { width, height } = useMemo(() => ({
        width: dimensions.width,
        height: dimensions.height
    }), [dimensions]);

    // Memoize scales (X and Y)
    const xScale = useMemo(() => d3.scaleBand()
        .domain(data.map(d => d.name.slice(0 , 3)))
        .range([margin.left, width - margin.right])
        .padding(0.2), [data, width, margin.left, margin.right]);

    const yScale = useMemo(() => d3.scaleLinear()
        .domain([0, d3.max(data, d => d.avgDailyRainfall)])
        .nice()
        .range([height - margin.bottom, margin.top]), [data, height, margin.top, margin.bottom]);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        
        // Clear previous content
        svg.selectAll("*").remove();

        setupSvg(svg, width, height);
        setupBackground(svg, width, height);
        setupBarAxes(svg, width, height, margin, xScale, yScale);
        drawRainfallBars(svg, data, xScale, yScale, height, margin);
        setupTooltips(svg, data, xScale, yScale, "bar");
        AddTitle(svg, width, "bar");

    }, [data, dimensions, xScale, yScale, width, height, margin]);
    return (
        <div className="">
            <svg ref={svgRef}></svg>
        </div>
    );
};
export default RainfallChart;
