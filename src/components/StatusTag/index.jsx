import cn from "classnames";
import { StatusNameMap } from "../../constants";
import styles from "./styles.module.scss";

const StatusTag = ({ status }) => {
  return <span className={cn(styles.root, styles[status])}>{StatusNameMap[status]}</span>;
};

export default StatusTag;
