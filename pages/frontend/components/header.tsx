import Link from 'next/link'


const linkStyle = {
    marginRight: 15,
    color: '#0070f3'

}

const Header = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/frontend/blogs/list">
                <a style={linkStyle}>Blog</a>
            </Link>
            <Link href="/frontend/about">
                <a style={linkStyle}>About</a>
            </Link>
            <Link href="/frontend/login">
                <a style={linkStyle}>Login</a>
            </Link>
        </div>
    )
} 

export default Header