import styles from "./style.module.scss";

const ProductPageMetaProperty = ({ title, value }) => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default ProductPageMetaProperty;
