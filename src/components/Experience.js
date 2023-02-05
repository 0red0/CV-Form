import Card from "./UI/Card";
import styles from "./General.module.css";
import React, { useState } from "react";

export default function Experience(props) {
   const [invalidCompany, setInvalidCompany] = useState(false);
   const [invalidPosition, setInvalidPosition] = useState(false);
   const [invalidTasks, setInvalidTasks] = useState(false);
   const [invalidStart, setInvalidStart] = useState(false);
   const [invalidEnd, setInvalidEnd] = useState(false);

   const [company, setCompany] = useState("");
   const [position, setPosition] = useState("");
   const [tasks, setTasks] = useState("");
   const [start, setStart] = useState("");
   const [end, setEnd] = useState("");

   const companyHandler = (e) => setCompany(e.target.value);
   const positionHandler = (e) => setPosition(e.target.value);
   const tasksHandler = (e) => setTasks(e.target.value);
   const startHandler = (e) => setStart(e.target.value);
   const endHandler = (e) => setEnd(e.target.value);

   function submitting() {
      company.trim().length === 0
         ? setInvalidCompany(true)
         : setInvalidCompany(false);
      position.trim().length === 0
         ? setInvalidPosition(true)
         : setInvalidPosition(false);
      tasks.trim().length === 0
         ? setInvalidTasks(true)
         : setInvalidTasks(false);
      start.trim().length === 0
         ? setInvalidStart(true)
         : setInvalidStart(false);
      end.trim().length === 0 ? setInvalidEnd(true) : setInvalidEnd(false);

      if (
         company === "" ||
         position === "" ||
         tasks === "" ||
         start === "" ||
         end === ""
      ) {
         console.log("input missing in exp");
         return;
      }
      props.onDataPrep(company, position, tasks, start, end);
   }

   return (
      <Card>
         <h2>Practical Experience</h2>
         <div className={`${styles.cell} ${invalidCompany && styles.invalid}`}>
            <label>Company Name:</label>
            <input
               onChange={companyHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidPosition && styles.invalid}`}>
            <label>Position :</label>
            <input
               onChange={positionHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidTasks && styles.invalid}`}>
            <label>Job Responsibility :</label>
            <input
               onChange={tasksHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidStart && styles.invalid}`}>
            <label>Job Start :</label>
            <input
               onChange={startHandler}
               onBlur={submitting}
               type="date"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidEnd && styles.invalid}`}>
            <label>Job End :</label>
            <input
               onChange={endHandler}
               onBlur={submitting}
               type="date"
            ></input>
         </div>
      </Card>
   );
}
