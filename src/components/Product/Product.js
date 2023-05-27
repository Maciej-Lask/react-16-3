import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import shortid from 'shortid';


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  console.log('currentColor :>> ', currentColor);

  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  console.log('currentSize :>> ', currentSize);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <Button
                  key={shortid()}
                  size={size.name}
                  onClick={() => setCurrentSize(size)}
                >
                  {size.name}
                </Button>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <Button
                  key={shortid()}
                  className={clsx(
                    prepareColorClassName(color),
                    currentColor === color && styles.active
                  )}
                  onClick={() => setCurrentColor(color)}
                />
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;