import { useRef, useState } from "react";
import { Button, ClickButton, Header, InfoSlot, Slider, Float } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [cps, setCps] = useState(0);
  const [cronoTime, setCronoTime] = useState(0);

  const intervalRef = useRef(null);
  const countRef = useRef(0);
  const cronoRef = useRef(0);

  const moreCount = () => {
    setCount((prev) => {
      const newCount = prev +1;
      countRef.current = newCount;
      return newCount;
    });
  };

  const runCrono = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {

      setCronoTime((prev) => {

        const next = +(prev + 0.01).toFixed(2);

        if(next > 0){
          const liveCps = countRef.current / next;
          setCps(liveCps.toFixed(2));
        }

        if (next >= seconds) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        return next;
      });

      calCps();
    }, 10);
  };

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
    e.target.value = seconds;
  };

  const calCps = () => {
    const clicksPerSecond = count / cronoTime;
    setCps(clicksPerSecond);
  };

  const handleClicsInput = () => {
    if(cronoTime >= seconds){
      resetClicker()
    }
    moreCount();
    runCrono();
  };
  const resetClicker = () =>{
    setCronoTime(0);
    setCount(0)
    setCps(0)
  }

  return (
    <>
    <Float></Float>
      <div className="min-h-screen flex flex-col bg-violet-950 text-slate-200 font-bold">
        <Header></Header>

        <div className="w-full max-w-4/5 mx-auto mt-6">
          <main className="w-full p-2">
            <section className="flex justify-center w-full h-fit mb-12">
              <h1 className="text-4xl">Click Speed Test</h1>
            </section>

            {/* click-box */}
            <section className="w-full h-fit bg-indigo-950 p-4 rounded-2xl">
              {/* inner-clic-box */}
              <div className="w-full h-64 sm:h-96 p-2 border-1 border-indigo-600 rounded-2xl">
                {/* clicker */}
                <ClickButton
                  count={count}
                  onClick={handleClicsInput}
                ></ClickButton>
              </div>

              {/* info-container */}
              <div className="flex w-full h-fit mt-4 p-2 gap-2">
                <InfoSlot infoName={"Crono:"} infoValue={cronoTime}></InfoSlot>
                <InfoSlot infoName={"Clics/s:"} infoValue={cps}></InfoSlot>
                <InfoSlot infoName={"Score:"} infoValue={count}></InfoSlot>
              </div>

              {/* seconds-range*/}
              <section className="w-full h-fit mt-4 p-2 gap-2">
                <Slider
                  min={5}
                  max={60}
                  step={5}
                  seconds={seconds}
                  handleSeconds={handleSecondsChange}
                ></Slider>
              </section>
            </section>
          </main>
        </div>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
