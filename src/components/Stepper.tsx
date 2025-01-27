import React from "react";
interface Props{
  currentStep: number;
  setStep:number;
}

const Stepper = ({ currentStep, setStep }:Props) => {
  return (
    <>
      <div className="w-[320px] rounded-lg bg-white break-words border-2 px-3" >
        <div>
          <div className="flex font-bold justify-center py-2  ">
            <span>1.</span>
            <h1 className="font-bold w-52 leading-5">
              Create your restaurant information
            </h1>
          </div>

          <div className="flex items-center gap-6  cursor-pointer" onClick={() => setStep(1)}>
            <div className={`h-10 w-10 rounded-full flex justify-center items-center text-white ${currentStep === 1 ? 'bg-bgButton' : 'border-2 bg-gray-400'}`}>
              1
            </div>
            <div className="py-3">
              <h1 className="">Restaurant Information</h1>
              <p className="w-52 text-wrap flex leading-5 text-xs text-gray-400 ">
                Restaurant name, address, details, owner detail
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 py-3 cursor-pointer" onClick={() => setStep(2)}>
          <div className={`h-10 w-10 rounded-full flex justify-center items-center text-white ${currentStep === 2 ? 'bg-bgButton' : 'border-2 bg-gray-400'}`}>
            2
          </div>
          <div>
            <h1 className="">Restaurant Information</h1>
            <p className="w-52 text-wrap flex leading-5 text-xs text-gray-400">
              Restaurant name, address, details, owner detail
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 py-3 cursor-pointer" onClick={() => setStep(3)}>
          <div className={`h-10 w-10 rounded-full flex justify-center items-center text-white ${currentStep === 3 ? 'bg-bgButton' : 'border-2 bg-gray-400'}`}>
            3
          </div>
          <div>
            <h1 className="">Restaurant Information</h1>
            <p className="w-52 text-wrap flex leading-5 text-xs text-gray-400">
              Restaurant name, address, details, owner detail
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
