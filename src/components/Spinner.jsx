import SpinnerIcon from "../assets/SpinnerIcon";

const Spinner = () => {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center text-center">
      <SpinnerIcon />
      <h1 className="text-white text-sm">Loading...</h1>
    </div>
  );
};

export default Spinner;
