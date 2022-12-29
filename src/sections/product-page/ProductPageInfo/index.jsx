import useApi from "../../../hooks/useApi";
import { fetchProductById } from "../../../utils/api";
import ProductPageDetails from "../ProductPageDetails";
import ProductPageMeta from "../ProductPageMeta";
import ProductPagePreview from "../ProductPagePreview";
import styles from "./styles.module.scss";

const ProductPageInfo = () => {
  const { data, isLoading } = useApi(fetchProductById);

  const { images, condition, delivery, price, quantity, category, description, docs, name, size, status } =
    data ?? {}; // FIXME: Заглушка для безопасной деструктуризации

  return (
    <div className={styles.root}>
      {isLoading ? (
        "Загрузка..."
      ) : (
        <>
          <div className={styles.preview}>
            <ProductPagePreview images={images} />
          </div>
          <div className={styles.details}>
            <ProductPageDetails data={{ category, description, docs, name, size, status }} />
          </div>
          <div className={styles.meta}>
            <ProductPageMeta data={{ condition, delivery, price, quantity }} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPageInfo;
