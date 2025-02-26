import PropTypes from 'prop-types';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
