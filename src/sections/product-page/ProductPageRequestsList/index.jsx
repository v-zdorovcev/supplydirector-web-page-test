import ProductRequest from "../../../components/ProductRequest";
import useApi from "../../../hooks/useApi";
import { fetchProductRequests } from "../../../utils/api";
import styles from "./styles.module.scss";

const ProductPageRequestsList = () => {
  const { data, isLoading } = useApi(fetchProductRequests);

  return (
    <div className={styles.root}>
      {isLoading ? (
        "Загрузка..."
      ) : (
        <>
          {data.map(({ id, ...request }) => (
            <ProductRequest key={id} data={{ ...request }} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductPageRequestsList;
