import Card from "./UI/Card";
import styles from "./General.module.css";

export default function Experience() {
   return (
      <Card>
         <h2>Practical Experience</h2>
         <div className={styles.cell}>
            <label>Company Name:</label>
            <input type="text"></input>
         </div>
         <div className={styles.cell}>
            <label>Position Title:</label>
            <input type="text"></input>
         </div>
         <div className={styles.cell}>
            <label>Job Tasks:</label>
            <input type="text"></input>
         </div>
         <div className={styles.cell}>
            <label>Job Start Date:</label>
            <input type="date"></input>
         </div>
         <div className={styles.cell}>
            <label>Job End Date:</label>
            <input type="date"></input>
         </div>
      </Card>
   );
}
