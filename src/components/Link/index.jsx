import styles from "./styles.module.scss";

// В идеале компонент должен быть универсальным. Уметь быть как кнопкой, так и ссылкой
const Link = ({ children, icon, ...props }) => {
  if (icon) {
    return (
      <a className={styles.root} {...props}>
        <span className={styles.icon}>{icon}</span>
        {children}
      </a>
    );
  }

  return (
    <a className={styles.root} {...props}>
      {children}
    </a>
  );
};

export default Link;
