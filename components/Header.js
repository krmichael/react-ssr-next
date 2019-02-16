import Link from 'next/link';

const Header = () => (
  <>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>

    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
  </>
);

const linkStyle = {
  marginRight: 15,
  textDecoration: 'none',
  color: '#333'
};

export default Header;
