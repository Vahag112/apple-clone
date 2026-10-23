import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function SupportMenu() {


    const exploreAll: List[] = [
        { id: '240', name: 'iPhone'        ,        href: '/' },
        { id: '241', name: 'iPad'        ,        href: '/' },
        { id: '242', name: 'Mac'            ,        href: '/' },
        { id: '243', name: 'Watch'       ,        href: '/' },
        { id: '244', name: 'Apple Vision Pro'    ,        href: '/' },
        { id: '245', name: 'AirPods'       ,        href: '/' },
        { id: '246', name: 'Music'       ,        href: '/' },
        { id: '247', name: 'TV'       ,        href: '/' }
    ]

    const help: List[] = [
        { id: '248', name: 'Community'             ,   href: '/' },
        { id: '249', name: 'Check Coverage'      ,   href: '/' },
        { id: '250', name: 'Genius Bar'        ,   href: '/' },
        { id: '251', name: 'Repair'       ,   href: '/' }

    ]

    const helpfulTopics: List[] = [
        { id: '252', name: 'Get AppleCare'               , href: '/' },
        { id: '253', name: 'Apple Account and Password'                  , href: '/' },
        { id: '254', name: 'Billing & Subscriptions'          , href: '/' },
        { id: '255', name: 'Accessibility', href: '/' },
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore Support</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Get Help</h3>
                        {
                            help.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>Helpful Topics</h3>
                        {
                            helpfulTopics.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
