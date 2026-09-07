import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function AirpodsMenu() {


    const exploreAll: List[] = [
        { id: '150', name: 'Explore TV & Home'    ,        href: '/' },
        { id: '151', name: 'Apple TV 4K'              ,        href: '/' },
        { id: '152', name: 'HomePod'          ,        href: '/' },
        { id: '153', name: 'HomePod mini'           ,        href: '/' }
    ]

    const shop: List[] = [
        { id: '154', name: 'Shop Apple TV 4K'             ,   href: '/' },
        { id: '155', name: 'Shop HomePod'      ,   href: '/' },
        { id: '155', name: 'Shop HomePod mini'      ,   href: '/' },
        { id: '155', name: 'Shop Siri Remote'      ,   href: '/' },
        { id: '155', name: 'TV & Home Accessories'      ,   href: '/' }

    ]

    const moreFrom: List[] = [
        { id: '156', name: 'AirPods Support'            , href: '/' },
        { id: '157', name: 'AppleCare'                  , href: '/' },
        { id: '158', name: 'Hearing Health'             , href: '/' },
        { id: '159', name: 'Apple Music'                , href: '/' },
        { id: '160', name: 'Apple Fitness+'             , href: '/' }
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore AirPods</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Shop AirPods</h3>
                        {
                            shop.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>More from AirPods</h3>
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
