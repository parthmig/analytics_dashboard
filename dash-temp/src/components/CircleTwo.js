import React, { Component } from 'react'
import { VictoryPie, VictoryLabel } from 'victory'

export class CircleTwo extends Component {
    render() {
        return (
            <div id = "pie2">
            <VictoryPie
                data={[
                    { x: "TV", y: 0.19 },
                    { x: "Online Ads", y: 0.26 },
                    { x: "Web", y: 0.22 },
                    { x: "Recommendation", y: 0.12 }
                    
                ]}
                colorScale={["tomato", "navy", "gold", "cyan" ]}
                height={300}
                width={500}
                padAngle={({ datum }) => datum.y}
                padding={{ top: 130, bottom: 60, left: -95 }}
            />
            <VictoryLabel text="clustering discounted sales by channel" textAnchor="left"/>
            </div>
        )
    }
}

export default CircleTwo
