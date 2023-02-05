import Card from "../components/UI/Card";
import styles from "./General.module.css";
import { useState } from "react";

export default function Skills(props) {
   const [invalidProg, setInvalidProg] = useState(false);
   const [invalidYears, setInvalidYears] = useState(false);
   const [invalidCommu, setInvalidCommu] = useState(false);
   const [invalidLang, setInvalidLang] = useState(false);

   const [prog, setProg] = useState("");
   const [years, setYears] = useState("");
   const [commu, setCommu] = useState("");
   const [lang, setLang] = useState("");

   const progHandler = (e) => setProg(e.target.value);
   const yearsHandler = (e) => setYears(e.target.value);
   const commuHandler = (e) => setCommu(e.target.value);
   const langHandler = (e) => setLang(e.target.value);

   function submitting() {
      prog.trim().length === 0 ? setInvalidProg(true) : setInvalidProg(false);
      years.trim().length === 0
         ? setInvalidYears(true)
         : setInvalidYears(false);
      commu.trim().length === 0
         ? setInvalidCommu(true)
         : setInvalidCommu(false);
      lang.trim().length === 0 ? setInvalidLang(true) : setInvalidLang(false);

      if (prog === "" || years === "" || commu === "" || lang === "") {
         console.log("input missing in skills");
         return;
      }
      props.onDataPrep(prog, years, commu, lang);
   }

   return (
      <Card className={styles.skills}>
         <h2>Skills</h2>
         <div className={`${styles.cell} ${invalidProg && styles.invalid}`}>
            <label>Main Programming Lang :</label>
            <input
               onChange={progHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidYears && styles.invalid}`}>
            <label>Years Practicing it :</label>
            <input
               onChange={yearsHandler}
               onBlur={submitting}
               type="number"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidCommu && styles.invalid}`}>
            <label>Communication skills :</label>
            <div>
               <div>
                  <input
                     onChange={commuHandler}
                     onBlur={submitting}
                     type="radio"
                     id="radio-1"
                     name="comm"
                     value="Excellent"
                  ></input>
                  <label htmlFor="radio-1">Excellent</label>
               </div>
               <div>
                  <input
                     onChange={commuHandler}
                     onBlur={submitting}
                     type="radio"
                     id="radio-2"
                     name="comm"
                     value="Good"
                  ></input>
                  <label htmlFor="radio-2">Good</label>
               </div>
               <div>
                  <input
                     onChange={commuHandler}
                     onBlur={submitting}
                     type="radio"
                     id="radio-3"
                     name="comm"
                     value="Need Improving"
                  ></input>
                  <label htmlFor="radio-3">Need Improving</label>
               </div>
            </div>
         </div>
         <div className={`${styles.cell} ${invalidLang && styles.invalid}`}>
            <label>Spoken Language:</label>
            <input
               onChange={langHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
      </Card>
   );
}
