import { Link } from 'react-router-dom'
import './Footer.scss'
import { footerColumns } from './footerData'


export default function Footer() {


    return (
        <footer>
            <div className="container">
                <div className="content">
                    {
                        footerColumns.map((col, colIndex) => (
                            <div className="box" key={colIndex}>
                                {
                                    col.map((section, sectionIndex) => (
                                        <ul key={sectionIndex}>
                                            <li><h3>{section.title}</h3></li>
                                            {
                                                section.items.map((item) => (
                                                    <li key={item.name}>
                                                        <Link to={item.href}>{item.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    ))
                                }
                            </div>
                        ))
                    }

                </div>
                <div className="content">
                    <div className="item">
                        <p>More ways to shop: <Link to='/'>Find an Apple Store</Link> or <Link to='/'>other retailer</Link> near you. Or call <Link to='/'> 1-800-MY-APPLE</Link> (1-800-692-7753).</p>
                    </div>
                    <div className="item">
                        <div className="detal">
                            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
                            <span>Privacy Policy  |  Terms of Use  |  Sales and Refunds  |  Legal  |  Site Map</span>
                        </div>
                        <p>United States</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
