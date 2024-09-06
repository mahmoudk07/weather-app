import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import useResizeObserver from "../../../hooks/useResizeObserver";
import { drawTemperatureLines } from "../utils/drawLines";
import { setupSvg } from "../utils/setupSvg";
import { setupBackground } from "../utils/setupBackground";
import { setupAxes } from "../utils/setupAxes";
import { setupTooltips } from "../utils/setupTooltips";
import { AddTitle } from "../utils/AddTitle";

const LineChart = ({ data }) => {
    const svgRef = useRef();
    const dimensions = useResizeObserver(svgRef);

    const margin = useMemo(() => ({ top: 30, right: 30, bottom: 40, left: 60 }), []);

    const { width, height } = useMemo(() => ({
        width: dimensions.width,
        height: dimensions.height
    }), [dimensions]);

    // Memoize scales (X and Y)
    const xScale = useMemo(() => d3.scalePoint()
        .domain(data.map(d => d.name.slice(0, 3)))
        .range([margin.left, width - margin.right])
        .padding(0.5), [data, width, margin.left, margin.right]);

    const yScale = useMemo(() => d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.absMaxTemp, d.avgMinTemp))])
        .nice()
        .range([height - margin.bottom, margin.top]), [data, height, margin.top, margin.bottom]);

    // Memoize line generators (Min temp line , Max temp line)
    const lineMin = useMemo(() => d3.line()
        .x(d => xScale(d.name.slice(0, 3)))
        .y(d => yScale(d.avgMinTemp)), [xScale, yScale]);

    const lineMax = useMemo(() => d3.line()
        .x(d => xScale(d.name.slice(0, 3)))
        .y(d => yScale(d.absMaxTemp)), [xScale, yScale]);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        svg.selectAll('*').remove();

        setupSvg(svg, width, height);
        setupBackground(svg, width, height);
        setupAxes(svg, data, width, height, margin, xScale, yScale);
        drawTemperatureLines(svg, data, lineMin, lineMax);
        setupTooltips(svg, data, xScale, yScale, "circle");
        AddTitle(svg, width, "line");

    }, [data, width, height, margin, xScale, yScale, lineMin, lineMax]);

    return (
        <div className="">
            <svg ref={svgRef}></svg>
        </div>
    );
};
export default LineChart;
