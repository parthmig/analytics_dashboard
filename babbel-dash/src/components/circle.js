import React, { Component } from 'react'
import { VictoryPie, VictoryTooltip, VictoryLabel } from 'victory'

export class circle extends Component {
    render() {
        return (
            <div>
            <VictoryLabel {...this.props}/>
            <VictoryTooltip
                {...this.props}
                x={200} y={250}
                orientation="top"
                pointerLength={0}
                cornerRadius={50}
                flyoutWidth={100}
                flyoutHeight={100}
                flyoutStyle={{ fill: "black" }}
            />
            CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
            <VictoryPie
                style={{ labels: { fill: "white" } }}
                innerRadius={100}
                labelRadius={120}
                labels={({ datum }) => `# ${datum.y}`}
                labelComponent={<CustomLabel />}
                data={[
                    { x: 1, y: 5 },
                    { x: 2, y: 4 },
                    { x: 3, y: 2 },
                    { x: 4, y: 3 },
                    { x: 5, y: 1 }
                ]}
            />

            </div>
        )
    }
}

export default circle
