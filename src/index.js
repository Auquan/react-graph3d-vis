import React, { Component } from 'react'
import PropTypes from 'prop-types'
import vis from 'vis-graph3d'
import { uuid4 } from 'vis-uuid'
import isEqual from 'lodash'

export default class Graph3D extends Component {

  constructor(props) {
    super(props)

    const {identifier} = props
    this.state = {
      identifier: identifier !== undefined ? identifier : uuid4()
    }

    this.updateGraph = this.updateGraph.bind(this)
  }

  componentDidMount() {
    const container = document.getElementById(this.state.identifier)
    this.$el = new vis.Graph3d(container, undefined, this.props.options)
    this.$el.on('cameraPositionChange', this.props.cameraPositionChangeHandler)
    this.updateGraph()
  }

  shouldComponentUpdate(nextProps) {
    const {options, data} = this.props

    const optionsChange = !isEqual(options, nextProps.options) || options.length !== nextProps.options.length
    const dataChange = !isEqual(data, nextProps.data) || data.length !== nextProps.data.length
    return(optionsChange || dataChange)
  }

  componentDidUpdate() {
    this.updateGraph()
  }

  updateGraph() {
    var data = new vis.DataSet()
    data.add(this.props.data)
    this.$el.setData(data)
    this.$el.setOptions(this.props.options)
    this.$el.redraw()
  }

  render() {
    const {identifier} = this.state

    return React.createElement(
      "div",
      {
        id: identifier,
      }
    )
  }
}

Graph3D.defaultProps = {
  options: {
    width:  '600px',
    height: '600px',
    style: 'grid',
    showPerspective: true,
    showGrid: true,
    showShadow: false,
    keepAspectRatio: true,
    verticalRatio: 0.5
  },
  cameraPositionChangeHandler: function() {}
}

Graph3D.propTypes = {
  options: PropTypes.object,
  data: PropTypes.array.isRequired,
  cameraPositionChangeHandler: PropTypes.func
}
