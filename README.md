# react-graph3d-vis

> A React Component to create interactive 3d graphs using vis.js. check out the [Demo Version](https://auquan.github.io/react-graph3d-vis/).

> Read more about it here : [vis js graph3d](http://visjs.org/docs/graph3d/index.html)

[![NPM](https://img.shields.io/npm/v/react-graph3d-vis.svg)](https://www.npmjs.com/package/react-graph3d-vis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


<img width="1030" alt="screenshot 2018-11-20 at 7 05 46 pm" src="https://user-images.githubusercontent.com/16102594/48776968-4e53eb80-ecf7-11e8-8f2e-b13ed0dcb2db.png">

## Install

```bash
npm install --save react-graph3d-vis
```

## Usage

```jsx
import React, { Component } from 'react'

import Graph3D from 'react-graph3d-vis'

class Example extends Component {

  custom(x, y) {
    return (Math.sin(x/50) * Math.cos(y/50) * 50 + 50)
  }

  generateData() {
    let data = []
    var steps = 50;  // number of datapoints will be steps*steps
    var axisMax = 314;
    var axisStep = axisMax / steps;
    for (var x = 0; x < axisMax; x+=axisStep) {
      for (var y = 0; y < axisMax; y+=axisStep) {
        var value = this.custom(x, y);
        data.push({
          x: x,
          y: y,
          z: value,
          style: value
        })
      }
    }

    return data
  }
  render () {
    let data = this.generateData()
    return (
      <Graph3D data={data} />
    )
  }
}
```

## Supported Features
All the features from vis.js graph 3d are currently not supported **(Pull Requests are welcome)**.

 * Data Format (Array)
 * Configuration Options
 * events

## License

MIT © [Auquan](https://github.com/auquan)
