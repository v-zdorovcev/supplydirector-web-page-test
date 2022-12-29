import ProductPageInfo from "../../sections/product-page/ProductPageInfo";
import ProductPageRequestsList from "../../sections/product-page/ProductPageRequestsList";
import styles from "./styles.module.scss";

function Profile() {
  return (
    <main className={styles.container}>
      <ProductPageInfo />
      <ProductPageRequestsList />
    </main>
  );
}

export default Profile;
