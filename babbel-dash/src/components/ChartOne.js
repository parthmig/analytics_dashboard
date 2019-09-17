import React, { Component } from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from 'victory'

const data = [
    {quarter: 10, earnings: 4.89},
    {quarter: 18, earnings: 8.94},
    {quarter: 25, earnings: 18.27},
    {quarter: 35, earnings: 18.10}
  ];

export class ChartOne extends Component {
    render() {
        return (
            <div id="left">
                <VictoryChart theme={VictoryTheme.material} domainPadding={10}  style={{ parent: { maxWidth: "50%" } }}>
                    <VictoryLabel text="% of population from various age groups" x={180} y={30} textAnchor="middle"/>
                    <VictoryBar
                        style={{ data: { fill: "#c43a31" } }}
                        data={data}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryLabel text="%" x={14} y={170} textAnchor="middle"/>
                    <VictoryLabel text="age group" x={180} y={335} textAnchor="middle"/>
                </VictoryChart>
            </div>
        )
    }
}

export default ChartOne
