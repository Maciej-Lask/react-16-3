import styles from '../ProductOptions.module.scss';
import Button from '../../Button/Button';
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => (
          <Button
            key={shortid()}
            className={clsx(props.currentSize === size && styles.active)}
            onClick={() => props.setCurrentSize(size)}
          >
            {size.name}
          </Button>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  currentSize: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
