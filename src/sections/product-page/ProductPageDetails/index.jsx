import { ReactComponent as DocIcon } from "../../../assets/media/icons/docs.svg";
import Link from "../../../components/Link";
import StatusTag from "../../../components/StatusTag";
import { CategoryNameMap } from "../../../constants";
import ProductPageDetailsProperty from "../ProductPageDetailsProperty";
import styles from "./styles.module.scss";

const ProductPageDetails = ({ data }) => {
  const { name, description, category, status, size, docs } = data;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {/* FIXME: Из-за глобальных стилей используется тег h4 (что бы не дублировать css), правильно здесь будет исползьовать h1 */}
        <h4 className={styles.name}>{name}</h4>
        <StatusTag status={status} />
        <span className={styles.category}>{CategoryNameMap[category]}</span>
      </div>

      <ProductPageDetailsProperty title="Описание">
        <p className={styles.property}>{description}</p>
      </ProductPageDetailsProperty>

      <ProductPageDetailsProperty title="Размер">
        <p className={styles.property}>{size}</p>
      </ProductPageDetailsProperty>

      <ProductPageDetailsProperty title="Документация">
        <div className={styles.links}>
          {docs.map(({ fileName, url }) => (
            <Link href={url} icon={<DocIcon width={20} height={20} />} key={fileName}>
              {fileName}
            </Link>
          ))}
        </div>
      </ProductPageDetailsProperty>
    </div>
  );
};

export default ProductPageDetails;
