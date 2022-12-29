import { CURRENCY_SYMBOL, ProdcutConditionMap } from "../../../constants";
import useFormatter from "../../../hooks/useFormatter";
import ProductPageMetaProperty from "../ProductPageMetaProperty";
import styles from "./styles.module.scss";

const ProductPageMeta = ({ data }) => {
  const { price, quantity, condition, delivery } = data;

  const { fNumber, fDate, fAddress } = useFormatter();

  const formattedPrice = `${fNumber(price[0])} - ${fNumber(price[1])} ${CURRENCY_SYMBOL}`;
  const formattedQuantity = fNumber(quantity);
  const formattedDate = fDate(delivery.date);
  const formattedAddress = fAddress({ city: delivery.city, street: delivery.street });

  return (
    <div className={styles.root}>
      <ProductPageMetaProperty title="Цена" value={formattedPrice} />
      <ProductPageMetaProperty title="Количество" value={formattedQuantity} />
      <ProductPageMetaProperty title="Состояние" value={ProdcutConditionMap[condition]} />
      <ProductPageMetaProperty title="Дата доставки" value={formattedDate} />
      <ProductPageMetaProperty title="Адрес доставки" value={formattedAddress} />
    </div>
  );
};

export default ProductPageMeta;
