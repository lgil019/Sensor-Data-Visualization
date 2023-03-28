
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

function responseCounter(choices, response, type){
    let freq = [];

    console.log("choices in responseCounter:");
    console.log(choices);
    console.log("response in responseCounter:");
    console.log(response);
    console.log("response length in responseCounter:");
    console.log(response.length);
    console.log("type in responseCounter:");
    console.log(type);


    for (let i = 0; i < choices.length; i++){
        freq.push({
            name: choices[i],
            amt: 0,
        })
    }

    for (let i = 0; i < response.length; i++){
        for (let j = 0; j < freq.length; j++){
            if(response[i].response == freq[j].name){
                freq[j].amt++;
                // console.log("freq[j].amt:");
                // console.log(freq[j].amt);
            }
        }
    }

    return(freq);
}

export default function BarChartGraph(props) {

    // console.log("Response:");
    // console.log(props.response);
    var choices = props.data.answers.split("|");
    var possibleChoices = choices.length;

    return (
        <Container>
          <div>{props.question}</div>
          <div>{props.response.version}</div>
        <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={responseCounter(choices, props.response, props.data.type)}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amt" fill="#8884d8"/>
        </BarChart>
        </ResponsiveContainer>

        </Container>
    );
}
