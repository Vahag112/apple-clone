import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { footerColumns } from './footerData'


export default function Footer() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

    const toggleSection = (key: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    return (
        <footer>
            <div className="container">
                <div className="content">
                    {
                        footerColumns.map((col, colIndex) => (
                            <div className="box" key={colIndex}>
                                {
                                    col.map((section, sectionIndex) => {
                                        const key = `${colIndex}-${sectionIndex}`
                                        const isOpen = !!openSections[key]
                                        return (
                                            <ul key={sectionIndex} className={isOpen ? 'is-open' : ''}>
                                                <li>
                                                    <h3
                                                        onClick={() => toggleSection(key)}
                                                        role="button"
                                                        tabIndex={0}
                                                    >
                                                        <span>{section.title}</span>
                                                    <svg
                                                        className="chevron"
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M6 9L12 15L18 9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    </h3>
                                                </li>
                                                {
                                                    section.items.map((item) => (
                                                        <li key={item.name} className="footer-item">
                                                            <Link to={item.href}>{item.name}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    })
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




