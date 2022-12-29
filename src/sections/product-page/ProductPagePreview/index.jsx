import cn from "classnames";
import { useState } from "react";
import styles from "./styles.module.scss";

const MAX_THUMBNAILS_COUNT = 4;

const ProductPagePreview = ({ images = [] }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className={styles.root}>
      <img className={styles.activeImage} src={images[activeImageIndex]} width={280} height={280} alt="" />

      <div className={styles.thumbnails}>
        {images.slice(0, MAX_THUMBNAILS_COUNT).map((url, index) => (
          <button
            className={cn(styles.thumbnail, {
              [styles.selectedThumbnail]: activeImageIndex === index,
            })}
            type="button"
            onClick={() => setActiveImageIndex(index)}
            key={url}
          >
            <img src={url} width={60} height={60} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPagePreview;
