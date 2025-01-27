import Stepper from "./Stepper";
import Notification from "./Notification";
import 'react-toastify/dist/ReactToastify.css';
import Form1 from "./Form1";
import { useState } from "react";
import Form2 from "./Form2";
import Form3 from "./Form3";

interface Prop{
  step: number;
}
const Profile = () => {
  const forms = [<Form1 />, <Form2 />,<Form3 />];
  const [steps, setSteps] = useState(1);

  return (
    <>
      <div className="flex justify-between px-20 pt-4">
        <div className="items-center text-7xl font-bold text-bgButton md:flex hidden">
          <span className="text-black">Supa</span>Menu
        </div>
        <Notification />
      </div>
      <div className="md:flex justify-center gap-12">
      <Stepper currentStep={steps} setStep={setSteps} />
        <Message step={steps} />
      </div>
    </>
  );

  function Message({ step }:Prop) {
    return (
      <>
        {forms[step - 1]}
      </>
    );
  }
};

export default Profile;
