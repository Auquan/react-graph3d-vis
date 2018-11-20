import React, { Component } from 'react'

import Graph3D from 'react-graph3d-vis'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.generateData()
  }

  generateData() {
    let data = []
    var steps = 25;
    var axisMax = 314;
    var tMax = 31;
    var axisStep = axisMax / steps;
    for (var t = 0; t < tMax; t++) {
      for (var x = 0; x < axisMax; x+=axisStep) {
        for (var y = 0; y < axisMax; y+=axisStep) {
          var value = this.custom(x, y, t);
          data.push(
            {x:x,y:y,z:value,filter:t,style:value}
          );
        }
      }
    }
    this.setState({data:data})
  }

  custom(x, y, t) {
    return Math.sin(x/50 + t/10) * Math.cos(y/50 + t/10) * 50 + 50;
  }

  cameraChange = () => {
    console.log('camera change');
  }

  onClick(event) {
    console.log(event);
  }
  render () {
    const {data} = this.state
    return (
      <div>
        <h1>React-graph3d-vis</h1>
        <a href="https://github.com/auquan/react-graph3d-vis"><img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub" /></a>
        <div className="flex-container">
          {data && <Graph3D options={{width: '500px', height:'500px', style: 'surface', onclick: this.onClick, tooltip: true, keepAspectRatio: true, verticalRatio: 0.5, animationInterval: 100, animationPreload: true}} data={data} cameraPositionChangeHandler={this.cameraChange}/>}
        </div>
      </div>
    )
  }
}
