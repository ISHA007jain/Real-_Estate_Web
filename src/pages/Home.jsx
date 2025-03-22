import About from "./About";
import { Aim } from "./Aim";
import Frontpage from "./Frontpage";
import {Lease_prop} from "./Lease_prop";
import Sale_prop from "./Sale_prop"

export const Home = () => {
  return (
    <div className="w-full overflow-hidden">
    <Frontpage/>
    <About />
    <Sale_prop />
    <Lease_prop />
    <Aim/>
    </div>

  );
};
