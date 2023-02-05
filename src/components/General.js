import { useState } from "react";
import Card from "../components/UI/Card";
import styles from "./General.module.css";

export default function General(props) {
   const [invalidName, setInvalidName] = useState(false);
   const [invalidAge, setInvalidAge] = useState(false);
   const [invalidPhone, setInvalidPhone] = useState(false);
   const [invalidEmail, setInvalidEmail] = useState(false);

   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");

   const nameHandler = (e) => setName(e.target.value);
   const ageHandler = (e) => setAge(e.target.value);
   const phoneHandler = (e) => setPhone(e.target.value);
   const emailHandler = (e) => setEmail(e.target.value);

   function submitting() {
      name.trim().length === 0 ? setInvalidName(true) : setInvalidName(false);
      age.trim().length === 0 ? setInvalidAge(true) : setInvalidAge(false);
      phone.trim().length === 0
         ? setInvalidPhone(true)
         : setInvalidPhone(false);
      email.trim().length === 0
         ? setInvalidEmail(true)
         : setInvalidEmail(false);

      if (name === "" || age === "" || phone === "" || email === "") {
         console.log("input missing in general");
         return;
      }
      props.onDataPrep(name, age, phone, email);
   }

   return (
      <Card>
         <h2>General Information</h2>
         <div className={`${styles.cell} ${invalidName && styles.invalid}`}>
            <label>Name :</label>
            <input
               value={name}
               onChange={nameHandler}
               onBlur={submitting}
               type="text"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidAge && styles.invalid}`}>
            <label>Age :</label>
            <input
               value={age}
               onChange={ageHandler}
               onBlur={submitting}
               type="number"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidPhone && styles.invalid}`}>
            <label>Phone Number :</label>
            <input
               value={phone}
               onChange={phoneHandler}
               onBlur={submitting}
               type="number"
            ></input>
         </div>
         <div className={`${styles.cell} ${invalidEmail && styles.invalid}`}>
            <label>E-mail :</label>
            <input
               value={email}
               onChange={emailHandler}
               onBlur={submitting}
               type="email"
            ></input>
         </div>
      </Card>
   );
}
