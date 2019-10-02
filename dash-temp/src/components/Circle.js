import React, { Component } from 'react'
import { VictoryPie, VictoryLabel } from 'victory'

export class Circle extends Component {
    render() {
        return (
            <div id="pie1">
            
            <VictoryPie
                data={[
                    { x: "12 month", y: 1772 },
                    { x: "6 month", y: 2635 },
                    { x: "1 month", y: 482 },
                    { x: "3 month", y: 660 }
                ]}
                colorScale={["tomato", "navy", "gold", "cyan" ]}
                //cornerRadius={({ datum }) => datum.y * 5}
                height={300}
                width={500}
                padAngle={({ datum }) => datum.y}
                padding={{ top: 80, bottom: 60, left: -95 }}
            />
            <VictoryLabel text="length of subscription bought by people from slected age" textAnchor="left"/>

            </div>
        )
    }
}

export default Circle
