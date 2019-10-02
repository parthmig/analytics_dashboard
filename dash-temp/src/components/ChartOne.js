import React, { Component } from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from 'victory'

const data = [
    {age: 10, percent: 4.89},
    {age: 18, percent: 8.94},
    {age: 25, percent: 18.27},
    {age: 35, percent: 18.10},
    {age: 45, percent: 18.19},
    {age: 55, percent: 16.10},
    {age: 65, percent: 14.08}
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
                        x="age"
                        y="percent"
                    />
                    <VictoryLabel text="%" x={14} y={170} textAnchor="middle"/>
                    <VictoryLabel text="age group" x={180} y={335} textAnchor="middle"/>
                </VictoryChart>
            </div>
        )
    }
}

export default ChartOne
