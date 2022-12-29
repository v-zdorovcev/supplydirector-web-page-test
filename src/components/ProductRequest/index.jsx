import { ReactComponent as DotMenuIcon } from "../../assets/media/icons/dot-menu.svg";
import { ReactComponent as StarIcon } from "../../assets/media/icons/rating.svg";
import { CURRENCY_SYMBOL } from "../../constants";
import useFormatter from "../../hooks/useFormatter";
import StatusTag from "../StatusTag";
import styles from "./styles.module.scss";

const ProductRequest = ({ data }) => {
  const { rating, providerName, message, price, date, status } = data;

  const { fNumber, fShortDate } = useFormatter();

  const formattedPrice = `${fNumber(price)} ${CURRENCY_SYMBOL}`;
  const formattedDate = fShortDate(date);

  return (
    <div className={styles.root}>
      <div className={styles.rating}>
        <StarIcon width={20} height={20} />
        <span>{rating}</span>
      </div>

      <span className={styles.provider}>{providerName}</span>

      <p className={styles.message}>{message}</p>

      <strong className={styles.price}>{formattedPrice}</strong>

      <time dateTime={date} className={styles.date}>
        {formattedDate}
      </time>

      <div className={styles.status}>
        <StatusTag status={status} />
      </div>

      <button type="button" className={styles.menu}>
        <DotMenuIcon width={20} height={20} />
      </button>
    </div>
  );
};

export default ProductRequest;
