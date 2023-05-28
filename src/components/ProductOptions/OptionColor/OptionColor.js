import styles from '../ProductOptions.module.scss';
import Button from '../../Button/Button';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionColor = (props) => {
  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color) => (
          <Button
            key={shortid()}
            className={clsx(
              prepareColorClassName(color),
              props.currentColor === color && styles.active
            )}
            onClick={() => props.setCurrentColor(color)}
          />
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
};

export default OptionColor;
