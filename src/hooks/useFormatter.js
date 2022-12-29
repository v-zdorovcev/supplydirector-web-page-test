import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

const useFormatter = () => {
  const numberFormatter = new Intl.NumberFormat();

  const fNumber = (value) => {
    return numberFormatter.format(value);
  };

  const fDate = (date) => {
    return dayjs(date).format("DD MMMM YYYY");
  };

  const fShortDate = (date) => {
    return dayjs(date).format("DD.MM.YYYY");
  };

  const fAddress = ({ city, street }) => {
    const formattedCity = city ? `г ${city}` : "";

    return [formattedCity, street].filter(Boolean).join(", ");
  };

  return { fNumber, fDate, fAddress, fShortDate };
};

export default useFormatter;
