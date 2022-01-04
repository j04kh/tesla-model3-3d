import Logo from "./assets/teslaLogo.svg?component";
import Specs from "./components/Specs";

function App() {
  return (
    <div className="h-full min-h-screen w-screen pt-2 px-6 overflow-x-hidden box-border bg-black text-white">
      <Logo className="absolute" />
      <div className="h-full w-full flex flex-col sm:flex-row">
        <div className="w-full min-h-[400px] h-1/2 mt-5" />
        <Specs />
      </div>
    </div>
  );
}

export default App;
