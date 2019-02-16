import Header from './Header';

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    { props.children }
  </div>
);

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
};

export default Layout;
