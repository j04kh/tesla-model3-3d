import Button from "./Button";
import Spec from "./Spec";
import modelS1 from "../assets/data/modelS-1.json";
import modelS2 from "../assets/data/modelS-2.json";

const Specs = () => {
  return (
    <div className="w-full flex flex-col min-w-[50%] sm:pt-24">
      <h1 className="text-2xl font-normal">
        Model S <span className="font-extralight">Specs</span>
      </h1>
      <div className="w-full max-w-[650px] mt-5 mb-2 flex">
        <Button active text="Model S Plaid" />
        <Button text="Model S" />
      </div>
      <div className="w-full max-w-[650px] flex">
        <ul className="h-full w-1/2 mt-3 pr-2">
          {modelS1.map((spec) => (
            <Spec key={spec.id} title={spec.title} desc={spec.desc} />
          ))}
        </ul>
        <ul className="h-full w-1/2 mt-3 pl-2">
          {modelS2.map((spec) => (
            <Spec
              key={spec.id}
              title={spec.title}
              desc={spec.desc}
              disc={spec.disc}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Specs;
