import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {/* <Link href="/user?userId=ilmaceng"> */}
    <Link href={{ pathname: 'user', query: { userId: 'ilmaceng' }}}>
      <a style={linkStyle}>Users</a>
    </Link>
    <Link href="/bid">
      <a style={linkStyle}>Bids</a>
    </Link>
  </div>
)

export default Header


// import Link from 'next/link'
// export default () => (    
// <div>Click <Link href={{ pathname: 'about', query: { name: 'leangchhean' }}}><a>here</a></Link> to read more</div>
// )