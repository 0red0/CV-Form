import Card from "./UI/Card";
import styles from "./General.module.css";

export default function Education() {
   return (
      <Card>
         <h2>Educational Experience</h2>
         <div className={styles.cell}>
            <label>School Name:</label>
            <input type="text"></input>
         </div>
         <div className={styles.cell}>
            <label>Title Of Study:</label>
            <input type="text"></input>
         </div>
         <div className={styles.cell}>
            <label>Date Of Study:</label>
            <input type="date"></input>
         </div>
         <div className={styles.cell}>
            <label>Latest Degree:</label>
            <input type="text"></input>
         </div>
      </Card>
   );
}
