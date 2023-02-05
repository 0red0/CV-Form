import styles from "./Overlay.module.css";

export default function Overlay(props) {
   return (
      <div className={`${styles.overlay} overlay`} onClick={props.onClick}>
         <section>
            <h4>Resume</h4>
            <h1>General Information</h1>
            <hr />
            <p>
               <span>Name :</span> {props.data.name}
            </p>
            <p>
               <span>Age :</span> {props.data.age}
            </p>
            <p>
               <span>Phone Number :</span> {props.data.phone}
            </p>
            <p>
               <span>Email :</span> {props.data.email}
            </p>

            <h1>Educational Experience</h1>
            <hr />
            <p>
               <span>School Name :</span> {props.data.school}
            </p>
            <p>
               <span>Title Of Study :</span> {props.data.title}
            </p>
            <p>
               <span>Date Of Study :</span> {props.data.date}
            </p>
            <p>
               <span>Degree :</span> {props.data.degree}
            </p>

            <h1>Practical Experience</h1>
            <hr />
            <p>
               <span>Company Name :</span> {props.data.company}
            </p>
            <p>
               <span>Position :</span> {props.data.position}
            </p>
            <p>
               <span>Job Responsibility :</span> {props.data.tasks}
            </p>
            <p>
               <span>Job Start :</span> {props.data.start}
            </p>
            <p>
               <span>Job End :</span> {props.data.end}
            </p>

            <h1>Skills</h1>
            <hr />
            <p>
               <span>Programming Language :</span> {props.data.prog}
            </p>
            <p>
               <span>Years Practicing It :</span> {props.data.years}
            </p>
            <p>
               <span>Communication Skills :</span> {props.data.commu}
            </p>
            <p>
               <span>Spoken Languages : </span> {props.data.lang}
            </p>
         </section>
      </div>
   );
}
