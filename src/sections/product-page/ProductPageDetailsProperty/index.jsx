import styles from "./styles.module.scss";

const ProductPageDetailsProperty = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>{title}</p>

      {children}
    </div>
  );
};

export default ProductPageDetailsProperty;
