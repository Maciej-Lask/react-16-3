import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize.js';
import PropTypes from 'prop-types';
const ProductOptions = (props) => {

  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log('Product Summary:');
    console.log('=====================');
    console.log('Name:', props.title);
    console.log('Final Price:', calculatePrice());
    console.log('Selected Size:', props.currentSize.name);
    console.log('Selected Color:', props.currentColor);
  };
  const calculatePrice = () => {
    let price = props.basePrice;
    if (props.currentSize.additionalPrice) {
      price += props.currentSize.additionalPrice;
    }
    return price;
  };

  return (
    <form>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button} onClick={handleAddToCart}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductOptions.propTypes = {
  title: PropTypes.string,
  basePrice: PropTypes.number,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
  colors: PropTypes.arrayOf(PropTypes.string),
  currentSize: PropTypes.shape({
    name: PropTypes.string,
    additionalPrice: PropTypes.number,
  }),
  currentColor: PropTypes.string,
  setCurrentSize: PropTypes.func,
  setCurrentColor: PropTypes.func,
};

export default ProductOptions;
