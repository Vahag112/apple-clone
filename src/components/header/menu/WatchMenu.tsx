import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function IpadMenu() {


    const exploreAll: List[] = [
        { id: '111', name: 'Explore All Apple Watch',        href: '/' },
        { id: '112', name: 'Apple Watch Series 11'        ,        href: '/' },
        { id: '113', name: 'Apple Watch SE 3'        ,        href: '/' },
        { id: '114', name: 'Apple Watch Ultra 3'        ,        href: '/' },
        { id: '115', name: 'Apple Watch Nike'            ,        href: '/' },
        { id: '116', name: 'Apple Watch Hermes'       ,        href: '/' },
    ]

    const shop: List[] = [
        { id: '117', name: 'Shop Apple Watch'             ,   href: '/' },
        { id: '118', name: 'Apple Watch Bands'      ,   href: '/' },
        { id: '119', name: 'Apple Watch Accessories'        ,   href: '/' },
        { id: '120', name: 'Apple Upgrade'       ,   href: '/' },
        { id: '121', name: 'Apple Trade In'            ,   href: '/' },
        { id: '122', name: 'Financing',   href: '/' },
        { id: '123', name: 'Personal Setup',   href: '/' }

    ]

    const moreFrom: List[] = [
        { id: '124', name: 'Warch Apple Support'                , href: '/' },
        { id: '125', name: 'AppleCare'                  , href: '/' },
        { id: '126', name: 'watchOS 27 Preview'           , href: '/' },
        { id: '127', name: 'Apple Watch for Your Kids', href: '/' },
        { id: '128', name: 'Apps by Apple', href: '/' },
        { id: '129', name: 'Apple Fitness+ '              , href: '/' },
        { id: '130', name: 'Education'              , href: '/' },
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore Watch</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Shop Watch</h3>
                        {
                            shop.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>More from Watch</h3>
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
