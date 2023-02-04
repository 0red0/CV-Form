import Card from "../components/UI/Card";
import styles from "./General.module.css";

export default function General() {
   return (
      <Card>
         <h2>General Information</h2>
         <div className={styles.cell}>
            <label>Name:</label>
            <input type="text"></input>
         </div>
         <div className={styles.cell}>
            <label>Age:</label>
            <input type="number"></input>
         </div>
         <div className={styles.cell}>
            <label>Phone Number:</label>
            <input type="number"></input>
         </div>
         <div className={styles.cell}>
            <label>Email:</label>
            <input type="email"></input>
         </div>
      </Card>
   );
}
