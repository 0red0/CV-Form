import Button from "./UI/Button";
import styles from "./Preview.module.css";

export default function Preview(props) {
   return (
      <div className={styles.preview}>
         <Button onClick={props.onClick}>Preview</Button>
         <Button>Clear</Button>
      </div>
   );
}
