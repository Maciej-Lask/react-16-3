import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      className={clsx(styles.button, props.className)}
      onClick={props.onClick}
      type='button'
      
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
