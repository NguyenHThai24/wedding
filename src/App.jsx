import "./App.css";
import SectionFiveComponent from "./components/section-five/SectionFiveComponent";
import SectionFourComponent from "./components/section-four/SectionFourComponent";
import SectionOneComponent from "./components/section-one/SectionOneComponent";
import SectionTwoComponent from "./components/section-two/SectionTwoComponent";

function App() {
  return (
    <main>
      <SectionOneComponent />
      <SectionTwoComponent />
      <SectionFourComponent />
      <SectionFiveComponent />
    </main>
  );
}

export default App;
