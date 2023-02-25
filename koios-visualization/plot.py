#!/usr/bin/env python3
import json
from bokeh.plotting import figure, output_file, show
from bokeh.io import output_notebook
import IPython
import mysql.connector

def plot_line(data):
    # Extract x and y values from the input data
    x = [d['x'] for d in data]
    y = [d['y'] for d in data]

    # Create a line plot using Bokeh
    p = figure(title="Line Plot", x_axis_label='x', y_axis_label='y')
    p.line(x, y)
    output_notebook()
    output_file("line_plot.html")
    show(p)

def plot_bar(data, x_label, y_label):
    # Extract x and y values from the input data
    x = [d['x'] for d in data]
    y = [d['y'] for d in data]

    # Create a line plot using Bokeh
    p = figure(title="Bar Plot", x_axis_label='x', y_axis_label='y')
    p.vbar(x=x, top=y, width=0.5)
    output_notebook()
    output_file("bar_graph.html")
    show(p)

def query(args=(-1, -1)):
    """
    Pass arguments in the form (<study_id>, <task_id>)
    """
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="5x2XkuTcHg...$.FL{*yO_,dY",
        database="koios"
    )

    mycursor = mydb.cursor()
    request = "SELECT response FROM survey_response WHERE study_id = %s AND task_id = %s"
    mycursor.execute(request, (args[0], args[1]))
    myresult = mycursor.fetchall()
    return myresult

def main():
    query((54, 3))

if __name__ == "__main__":
    main()
