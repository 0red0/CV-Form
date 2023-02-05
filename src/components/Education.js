import Card from "./UI/Card";
import styles from "./General.module.css";
import { useState } from "react";

export default function Education(props) {
   const [invalidSchool, setInvalidSchool] = useState(false);
   const [invalidTitle, setInvalidTitle] = useState(false);
   const [invalidDate, setInvalidDate] = useState(false);
   const [invalidDegree, setInvalidDegree] = useState(false);

   const [school, setSchool] = useState("");
   const [title, setTitle] = useState("");
   const [date, setDate] = useState("");
   const [degree, setDegree] = useState("");

   const schoolHandler = (e) => setSchool(e.target.value);
   const titleHandler = (e) => setTitle(e.target.value);
   const dateHandler = (e) => setDate(e.target.value);
   const degreeHandler = (e) => setDegree(e.target.value);

   function submitting() {
      school.trim().length === 0
         ? setInvalidSchool(true)
         : setInvalidSchool(false);
      title.trim().length === 0
         ? setInvalidTitle(true)
         : setInvalidTitle(false);
      date.trim().length === 0 ? setInvalidDate(true) : setInvalidDate(false);
      degree.trim().length === 0
         ? setInvalidDegree(true)
         : setInvalidDegree(false);

      if (school === "" || title === "" || date === "" || degree === "") {
         console.log("input missing in edu");
         return;
      }
      props.onDataPrep(school, title, date, degree);
   }

   return (
      <Card>
         <h2>Educational Experience</h2>
         <div className={`${styles.cell} ${invalidSchool && styles.invalid}`}>
            <label>School Name:</label>
            <input
               onChange={schoolHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidTitle && styles.invalid}`}>
            <label>Title Of Study:</label>
            <input
               onChange={titleHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidDate && styles.invalid}`}>
            <label>Date Of Study:</label>
            <input
               onChange={dateHandler}
               onBlur={submitting}
               type="date"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidDegree && styles.invalid}`}>
            <label>Latest Degree:</label>
            <input
               onChange={degreeHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
      </Card>
   );
}
