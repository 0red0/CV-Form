import Wrapper from "./components/UI/Wrapper";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Preview from "./components/Preview";

function App() {
   return (
      <Wrapper>
         <h1>CV - FORM</h1>
         <General></General>
         <Education></Education>
         <Experience></Experience>
         <Skills></Skills>
         <Preview></Preview>
      </Wrapper>
   );
}

export default App;
