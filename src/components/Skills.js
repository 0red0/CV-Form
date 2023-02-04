import Card from "../components/UI/Card";
import styles from "./General.module.css";

export default function Skills() {
   return (
      <Card className={styles.skills}>
         <h2>Skills</h2>
         <div className={styles.cell}>
            <label>Main Programming Lang :</label>
            <input type="text"></input>
         </div>
         <div className={styles.cell}>
            <label>Years Practicing it :</label>
            <input type="number"></input>
         </div>
         <div className={styles.cell}>
            <label>Communication skills :</label>
            <div>
               <div>
                  <input type="radio" id="radio-1" name="comm"></input>
                  <label htmlFor="radio-1">Excellent</label>
               </div>
               <div>
                  <input type="radio" id="radio-2" name="comm"></input>
                  <label htmlFor="radio-2">Good</label>
               </div>
               <div>
                  <input type="radio" id="radio-3" name="comm"></input>
                  <label htmlFor="radio-3">Need Improving</label>
               </div>
            </div>
         </div>
         <div className={styles.cell}>
            <label>Spoken Language:</label>
            <input type="text"></input>
         </div>
      </Card>
   );
}
