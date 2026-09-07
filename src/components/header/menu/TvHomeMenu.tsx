import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function TvHomeMenu() {


    const exploreAll: List[] = [
        { id: '165', name: 'Explore TV & Home'    ,        href: '/' },
        { id: '166', name: 'Apple TV 4K'              ,        href: '/' },
        { id: '167', name: 'HomePod'          ,        href: '/' },
        { id: '168', name: 'HomePod mini'           ,        href: '/' }
    ]

    const shop: List[] = [
        { id: '169', name: 'Shop Apple TV 4K'             ,   href: '/' },
        { id: '170', name: 'Shop HomePod'      ,   href: '/' },
        { id: '171', name: 'Shop HomePod mini'      ,   href: '/' },
        { id: '172', name: 'Shop Siri Remote'      ,   href: '/' },
        { id: '173', name: 'TV & Home Accessories'      ,   href: '/' }

    ]

    const moreFrom: List[] = [
        { id: '174', name: 'Apple TV Support'            , href: '/' },
        { id: '175', name: 'HomePod Support'                  , href: '/' },
        { id: '176', name: 'AppleCare for Apple TV'             , href: '/' },
        { id: '177', name: 'AppleCare for HomePod'                , href: '/' },
        { id: '178', name: 'Apple TV app'             , href: '/' },
        { id: '179', name: 'Apple TV'             , href: '/' },
        { id: '180', name: 'Home app'             , href: '/' },
        { id: '181', name: 'Apple Music'             , href: '/' },
        { id: '182', name: 'AirPlay'             , href: '/' }
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore TV & Home</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Shop TV & Home</h3>
                        {
                            shop.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>More from TV & Home</h3>
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
