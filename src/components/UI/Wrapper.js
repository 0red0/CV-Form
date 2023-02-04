import styles from "./Wrapper.module.css";

export default function Wrapper(props) {
   return <div className={styles.wrapper}>{props.children}</div>;
}
