import React, { Component } from 'react'
import { VictoryPie, VictoryLabel } from 'victory'

export class CircleTwo extends Component {
    render() {
        return (
            <div id = "pie2">
            <VictoryPie
                data={[
                    { x: "TV", y: 0.10 },
                    { x: "Online Ads", y: 0.21 },
                    //{ x: "Appstore", y: 1216 },
                    { x: "Web", y: 0.27 },
                    { x: "Recommendation", y: 0.16 }
                    
                ]}
                colorScale={["tomato", "navy", "gold", "cyan" ]}
                //cornerRadius={({ datum }) => datum.y * 5}
                height={300}
                width={500}
                padAngle={({ datum }) => datum.y}
                padding={{ top: 80, bottom: 60, left: -95 }}
            />
            <VictoryLabel text="clustering discounted sales by channel" textAnchor="left"/>
            </div>
        )
    }
}

export default CircleTwo
