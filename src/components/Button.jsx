const Button = ({ active, text }) => {
  return (
    <button
      className={`mx-1 w-full py-1.5 rounded-full ${
        active ? "border-2 border-white" : "border border-gray-500"
      }  text-xs font-light`}
    >
      {text}
    </button>
  );
};

export default Button;
