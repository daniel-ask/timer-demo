import '../stylesheets/App.css';
import Timer from './Timer';
import TimerForm from './TimerForm';
import {useState} from 'react';

function App() {
  const [running, setRunning] = useState(false)
	const [time, setTime] = useState({
		min: 0,
		sec: 0
	})
	const updateTime = (e) => {
    const value = parseInt(e.target.value);
    console.log(value)
    if(e.target.name === 'sec' && value > 59){
      setTime({ min: time.min + 1, sec: 0})
    }else{
      setTime({ ...time, [e.target.name]: value})
    }
	}

  return (
    <div className="App">
    {running ? 
    <Timer minutes={time.min} seconds={time.sec} /> :
    <TimerForm updateTime={updateTime} min={time.min} sec={time.sec}/>}
    <button onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;
