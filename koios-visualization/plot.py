#!/usr/bin/env python3
import json
from bokeh.plotting import figure, output_file, show
from bokeh.io import output_notebook
import IPython

# Function to plot the JSON data
def plot_line(data):
    # Extract x and y values from the input data
    x = [d['x'] for d in data]
    y = [d['y'] for d in data]

    # Create a line plot using Bokeh
    p = figure(title="Line Plot", x_axis_label='x', y_axis_label='y')
    p.line(x, y)
    # output_notebook()
    output_file("line_plot.html")
    show(p)


# Read the JSON data from standard input
data = json.loads(input())

# Plot the data
plot_line(data)
