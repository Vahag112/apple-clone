import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../types/listType'





export default function IpadMenu() {


    const exploreAll: List[] = [
        { id: '86', name: 'Explore All iPhone', href: '/' },
        { id: '87', name: 'iPhone 17 Pro', href: '/' },
        { id: '88', name: 'iPhone Air', href: '/' },
        { id: '89', name: 'iPhone 17', href: '/' },
        { id: '90', name: 'iPhone 17e', href: '/' },
        { id: '91', name: 'iPhone 16', href: '/' },
    ]

    const shop: List[] = [
        { id: '94', name: 'Shop iPhone', href: '/' },
        { id: '95', name: 'iPhone Accessories', href: '/' },
        { id: '96', name: 'Apple Upgrade', href: '/' },
        { id: '97', name: 'Apple Trade In', href: '/' },
        { id: '98', name: 'Carrier Deals at Apple', href: '/' },
        { id: '99', name: 'Financing', href: '/' },
        { id: '100', name: 'Personal Setup', href: '/' }

    ]

    const moreFrom: List[] = [
        { id: '101', name: 'iPhone Support', href: '/' },
        { id: '102', name: 'AppleCare', href: '/' },
        { id: '103', name: 'iPadOS 27 Preview', href: '/' },
        { id: '104', name: 'Apple Intelligence and Siri', href: '/' },
        { id: '105', name: 'iPhone Privacy', href: '/' },
        { id: '106', name: 'Apps by Apple', href: '/' },
        { id: '107', name: 'Better with Mac', href: '/' },
        { id: '108', name: 'iCloud+', href: '/' },
        { id: '109', name: 'Wallet, Pay, Card', href: '/' },
        { id: '110', name: 'Apple at Work', href: '/' }
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore iPhone</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Shop iPhone</h3>
                        {
                            shop.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>More from iPhone</h3>
                        {
                            moreFrom.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
