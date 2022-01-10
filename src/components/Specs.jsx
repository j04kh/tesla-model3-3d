import { useState } from "react";
import Button from "./Button";
import Spec from "./Spec";
import performance1 from "../assets/data/performance-1.json";
import performance2 from "../assets/data/performance-2.json";
import rwd1 from "../assets/data/rwd-1.json";
import rwd2 from "../assets/data/rwd-2.json";

const Specs = () => {
  const [rwdActive, setRwdActive] = useState(false);

  return (
    <div className="w-full flex flex-col min-w-[50%] sm:pl-5 sm:pt-24">
      <h1 className="text-2xl font-normal">
        Model 3 <span className="font-extralight">Specs</span>
      </h1>
      <div className="w-full max-w-[650px] mt-5 mb-2 flex">
        <Button
          active={rwdActive === false}
          text="Performance"
          onClick={() => setRwdActive(false)}
        />
        <Button
          active={rwdActive}
          text="Long Range AWD"
          onClick={() => setRwdActive(true)}
        />
      </div>
      <div className="w-full max-w-[650px] flex">
        <ul className="h-full w-1/2 mt-3 pr-2">
          {rwdActive
            ? rwd1.map((spec) => (
                <Spec
                  key={spec.id}
                  title={spec.title}
                  desc={spec.desc}
                  disc={spec.disc}
                />
              ))
            : performance1.map((spec) => (
                <Spec
                  key={spec.id}
                  title={spec.title}
                  desc={spec.desc}
                  disc={spec.disc}
                />
              ))}
        </ul>
        <ul className="h-full w-1/2 mt-3 pl-2">
          {rwdActive
            ? rwd2.map((spec) => (
                <Spec
                  key={spec.id}
                  title={spec.title}
                  desc={spec.desc}
                  disc={spec.disc}
                />
              ))
            : performance2.map((spec) => (
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
