import React, { Component } from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from 'victory'

const data = [
    {quarter: 'TV', earnings: 21.00},
    {quarter: 'Online', earnings: 23.70},
    {quarter: 'Mags', earnings: 1.19},
    {quarter: 'Web', earnings: 24.99},
    {quarter: 'Appstore', earnings: 6.74},
    {quarter: 'Recc', earnings: 11.46},
    {quarter: 'Others', earnings: 11.21}
];


export class ChartTwo extends Component {
    render() {
        return (
            <div id="right">
            <VictoryChart theme={VictoryTheme.material} domainPadding={10}  style={{ parent: { maxWidth: "50%" } }}>
                    <VictoryLabel text="% of population from each channel" x={180} y={30} textAnchor="middle"/>
                    <VictoryBar
                        style={{ data: { fill: "#c43a31" } }}
                        data={data}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryLabel text="%" x={14} y={170} textAnchor="middle"/>
                    <VictoryLabel text="channel" x={180} y={335} textAnchor="middle"/>
                </VictoryChart>
            </div>
        )
    }
}

export default ChartTwo
