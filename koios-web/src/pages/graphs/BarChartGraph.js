
import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

/**
 * Demo of a line chart
 * @author Tony Erazo
 * @returns BarChartGraph
 */
export default function BarChartGraph(props) {

   //console.log("Response" + props.response);
    var choices = props.data.answers.split("|");
    var possibleChoices = choices.length;
    return (
        <Container>
          <div>{props.question}</div>
        <ResponsiveContainer width="100%" height={400}>
        <BarChart
            data={props.data}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.data.taskId} />
            <YAxis />
            <Tooltip />
            <Legend />

            {
              choices.map((choice, index) => (
                <Bar dataKey={choice} fill={"#8"+ index * 5 +"d"}/>
                ))
            }
        </BarChart>
        </ResponsiveContainer>

        </Container>
    );
}
