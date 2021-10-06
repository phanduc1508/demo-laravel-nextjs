
//cach 1:
// import React from 'react'

import { AppProps } from 'next/app'
import '../styles/globals.css'
import HeadPage from './frontend/components/head'
import "../styles/style.scss"


//cách 1: khai báo theo class component

// class MyAppC1 extends React.Component<AppProps> {
//     render() {
//         return (
//             <div className="root-app">
//                 <HeadPage />
//                 <this.props.Component {...this.props.pageProps} />
//             </div>
//         )
//     }
// }


//cach 2: khai bao theo functional
const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <div className="root-app">
             <HeadPage />
            <Component {...pageProps} />
        </div>
    )
}

// function MyApp({ Component, pageProps }) {
//     return (
//         <div className="root-app">
//              <HeadPage />
//             <Component {...pageProps} />
//         </div>
//     )
// }

export default CustomApp
