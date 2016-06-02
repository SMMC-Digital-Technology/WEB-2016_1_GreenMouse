    function simpleInterest(principle, rate, time) {
    return principle * rate * time;
    }

    /*
    * This funtion will start the proccess that draws the graph
    */
    function drawGraph() {

        /*
        *creates all the needed varables
        */
        var trace, data, layout;

        /* 
        *sets the trace scores of the x and y value. Also sets the type of graph and how the data should be displayed.
        */
        trace = {
            x: [0, 16000, 34250, 52500, 82750, 113000, 148750, 184500, 217250, 250000], 
            y: [0, 0, 1825, 3650, 8490, 13330, 21910, 30490, 42280, 54070], 
            type: 'scatter', 
            mode: 'lines+markers', 
            name: "trace" 
        };

        data = [trace];

        /* 
        *Adds a title to the x and y axis, and sets the widths of the zero lines. 
        */
        layout = {
            title: "Tax Amount Average",
            yaxis: {
                title: "Tax Amount", 
                zerolinewidth: 1.5 
            },
            xaxis: {
                title: "Income Amount",
                zerolinewidth: 1.5,
                range: [0, 250000] 
            }
        };

        /* 
        *Gives plotty the ok to draw the graph
        */
        Plotly.newPlot("graph", data, layout);
    }

    /*
    *run the function that will draw the graph
    */
    drawGraph();