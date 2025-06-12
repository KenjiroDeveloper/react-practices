export const Slider = ({ seconds, min, max, step, handleSeconds}) => {
  return (
    <>
      <span className="relative block mb-3 text-center text-4xl font-bold">{seconds}
        <small className="text-sm font-light"> seconds</small>
      </span>
      <input className="w-full cursor-pointer bg-indigo-900 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600
      " type="range"value={seconds} min={min} max={max} step={step}
    onChange={handleSeconds}></input>
    </>
  );
};
