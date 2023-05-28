import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
