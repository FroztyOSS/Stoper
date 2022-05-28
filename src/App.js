import { useEffect, useState } from "react";
import TimeFormat from "./components/TimeFormat/TimeFormat";
import Button from "./components/Button/Button";


const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  useEffect(() => {
    let stop = null;

    if(start) {
      stop = setInterval(() => {
        setTime(preValue => preValue + 1)
      }, 1)
    }

    return() => {
      if(stop) clearInterval(stop)
    };
  }, [start]);


  return (
    <div>
        <TimeFormat time={time} />
        <Button setTime={setTime} setStart={setStart}></Button>
    </div>
  );
}

export default App;
