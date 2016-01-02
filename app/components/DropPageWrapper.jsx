const React = require('react')
const classNames = require('classnames')
const subfoldersToo = require('subfolders-too')
const { ADD_SONG } = require('../actions')
const { connect } = require('react-redux')

class DropPageWrapper extends React.Component {
  constructor () {
    super()
    this.timeout = -1
    this.timeout_check = false
    this.state = {
      isHovering: false
    }
  }

  dragging (event) {
    this.timeout_check = true
    if (!this.state.isHovering) {
      this.setState({isHovering: true})
    }

    event.preventDefault()
    return false
  }

  stopDragging (event) {
    this.timeout_check = false
    window.clearTimeout(this.timeout)
    this.timeout = window.setTimeout(() => {
      if (!this.timeout_check) {
        this.setState({isHovering: false})
      }
    }, 100)

    event.preventDefault()
    return false
  }

  drop (event) {
    this.setState({isHovering: false})

    // Get all files from the drop event and trigger an action for each of them
    subfoldersToo(event, files => {
      files.map(file => {
        this.props.ADD_SONG(file)
      })
    })

    event.preventDefault()
    return false
  }

  render () {
    var dropZoneClasses = classNames('dropzone', {active: this.state.isHovering})

    return (
        <div className='page-wrapper'
             onDragStart={(e) => this.dragging(e)}
             onDragOver={(e) => this.dragging(e)}
             onDragLeave={(e) => this.stopDragging(e)}
             onDrop={(e) => this.drop(e)}>
          <div className={dropZoneClasses} ref='dropzone'></div>
          {this.props.children}
        </div>
    )
  }
}

module.exports = connect(null, {ADD_SONG})(DropPageWrapper)
