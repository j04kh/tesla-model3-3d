const Spec = ({ title, desc, disc }) => {
  return (
    <li className="my-3 flex flex-col text-sm">
      <div className="w-8 mb-2 h-1 border-t border-white" />
      <h1>{title}</h1>
      <h2 className="mt-0.5 font-extralight">{desc}</h2>
      <h2 className="mb-1 mt-0.5 font-extralight italic">{disc}</h2>
    </li>
  );
};

export default Spec;
