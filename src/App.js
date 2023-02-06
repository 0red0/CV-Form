import Wrapper from "./components/UI/Wrapper";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Preview from "./components/Preview";
import Overlay from "./components/UI/Overlay";
import { useState } from "react";

function App() {
   const [over, setOver] = useState(false);
   const [data, setData] = useState({});
   const [clearOn, setClearOn] = useState(false);

   function overHandler() {
      setOver(true);
   }

   function hideHandler(e) {
      if (e.target.classList.contains("overlay")) {
         setOver(false);
      }
   }

   function clearHandler() {
      // console.log(clearOn);
      setClearOn(true);
      // console.log("clering");
      // console.log(clearOn);
   }
   // onClear={clearFields}
   // onClear={clearHandler}
   //

   function generalInfo(n, a, p, e) {
      setData({ ...data, name: n, age: a, phone: p, email: e });
   }
   function educationInfo(a, b, c, d) {
      setData({ ...data, school: a, title: b, date: c, degree: d });
   }
   function practicalInfo(a, b, c, d, e) {
      setData({ ...data, company: a, position: b, tasks: c, start: d, end: e });
   }
   function skillsInfo(a, b, c, d) {
      setData({ ...data, prog: a, years: b, commu: c, lang: d });
   }
   console.log(data);

   return (
      <Wrapper>
         <h1>CV - FORM</h1>
         <General onDataPrep={generalInfo} onClearAction={clearOn}></General>
         <Education onDataPrep={educationInfo}></Education>
         <Experience onDataPrep={practicalInfo}></Experience>
         <Skills onDataPrep={skillsInfo}></Skills>
         <Preview onClick={overHandler} onClear={clearHandler}></Preview>
         {over && <Overlay onClick={hideHandler} data={data}></Overlay>}
      </Wrapper>
   );
}

export default App;
