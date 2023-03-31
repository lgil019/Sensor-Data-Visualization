
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

function responsesCounter(choices, responses, type){
    let freq = [];

    console.log("choices in responsesCounter:");
    console.log(choices);
    console.log("responses in responsesCounter:");
    console.log(responses);
    console.log("responses length in responsesCounter:");
    console.log(responses.length);
    console.log("type in responsesCounter:");
    console.log(type);


    for (let i = 0; i < choices.length; i++){
        freq.push({
            name: choices[i],
            amt: 0,
        })
    }

    for (let i = 0; i < responses.length; i++){
        for (let j = 0; j < freq.length; j++){
            if(responses[i].response == freq[j].name){
                freq[j].amt++;
            }
        }
    }
    // console.log("freq:");
    // console.log(freq);

    return(freq);
}

const CustomizedAxisTick = ({ x, y, payload }) => {
    const words = payload.value.split(/[\s/]+/); //Wrap on spaces (\s) and forward-slash
  const dy = 16;
  return (
    <g transform={`translate(${x},${y})`}>
      {words.map((word, i) => (
        <text key={i} x={0} y={i * dy} dy={dy / 2} textAnchor="middle" fontSize="14">
          {word}
        </text>
      ))}
    </g>
  );
};

export default function BarChartGraph(props) {

    // console.log("Responses:");
    // console.log(props.responses);
    var choices = props.data.answers.split("|");
    var possibleChoices = choices.length;

    return (
        <Container>
          <div>{props.question}</div>
          <div>{props.responses.version}</div>
        <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={responsesCounter(choices, props.responses, props.data.type)}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={0} angle={-45} textAnchor="end" height={80}/>
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar name="Number of entries" dataKey="amt" fill="#8884d8"/>
        </BarChart>
        </ResponsiveContainer>

        </Container>
    );
}
