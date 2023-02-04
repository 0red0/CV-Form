import Button from "./UI/Button";
import styles from "./Preview.module.css";

export default function Preview() {
   return (
      <div className={styles.preview}>
         <Button>Preview</Button>
         <Button>Clear</Button>
      </div>
   );
}
