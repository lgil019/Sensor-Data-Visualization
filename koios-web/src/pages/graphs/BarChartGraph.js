
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

    const [data, setdata] = useState();

    useEffect(() => {
        const fetchDatas = async () => {
          const res = await fetch("https:api.coincap.io/v2/assets/?limit=20");
          const data = await res.json();
          console.log(data);
          setdata(data.data);
        };
        fetchDatas();
      }, []);

    return (
        <Container>
          <div>{props.question}</div>
        <ResponsiveContainer width="100%" height={400}>
        <BarChart
            data={data}
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
            <Bar dataKey="name" fill="#8884d8" />
            <Bar dataKey="priceUsd" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>

        </Container>
    );
}
