import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const calculatePrice = () => {
    let price = props.basePrice;
    if (currentSize.additionalPrice) {
      price += currentSize.additionalPrice;
    }
    return price;
  };
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {calculatePrice()}$</span>
        </header>
        <ProductOptions
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
          title={props.title}
          basePrice={props.basePrice}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
