// Write your code here
import {Component} from 'react'
import './index.css'

const initailState = {
  timeInSeconds: 0,
  timeInMinutes: 0,
  isRunning: false,
}
class Stopwatch extends Component {
  state = initailState

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  startTheTimer = () => {
    const {timeInSeconds} = this.state
    if (timeInSeconds < 59) {
      this.setState(prevState => ({
        timeInSeconds: prevState.timeInSeconds + 1,
      }))
    } else {
      this.setState(prevState => ({
        timeInMinutes: prevState.timeInMinutes + 1,
      }))
      this.setState({timeInSeconds: 0})
    }
  }

  startButton = () => {
    if (!this.state.isRunning) {
      this.intervalId = setInterval(this.startTheTimer, 1000)
      this.setState({isRunning: true})
    }
  }

  stopButton = () => {
    this.clearTimeInterval()
    this.setState({isRunning: false})
  }

  resetButton = () => {
    this.setState(initailState)
    this.setState({timeInSeconds: 0, timeInMinutes: 0, isRunning: false})
  }

  startStopAndResetButton = () => (
    <div>
      <button onClick={this.startButton} type="button" className="button1">
        Start
      </button>
      <button onClick={this.stopButton} type="button" className="button2">
        Stop
      </button>
      <button onClick={this.resetButton} type="button" className="button3">
        Reset
      </button>
    </div>
  )

  imageAndText = () => (
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
        alt="stop watch"
        className="image"
      />
      <p>Timer</p>
    </div>
  )

  headingTimer = () => {
    const {timeInMinutes, timeInSeconds} = this.state
    const minutes = timeInMinutes
    const seconds = timeInSeconds
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiesSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}: ${stringifiesSeconds}`
  }

  render() {
    return (
      <div className="background">
        <h1 className="heading">Stopwatch</h1>
        <div className="container">
          {this.imageAndText()}
          <h1>{this.headingTimer()}</h1>
          {this.startStopAndResetButton()}
        </div>
      </div>
    )
  }
}

export default Stopwatch
