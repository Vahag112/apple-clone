import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function EntertainmentMenu() {


    const exploreAll: List[] = [
        { id: '191', name: 'Explore Entertainment', href: '/' },
        { id: '192', name: 'Apple One', href: '/' },
        { id: '193', name: 'Apple TV', href: '/' },
        { id: '194', name: 'Apple Music', href: '/' },
        { id: '195', name: 'Apple Arcade', href: '/' },
        { id: '196', name: 'Apple Fitness+', href: '/' },
        { id: '197', name: 'Apple News+', href: '/' },
        { id: '198', name: 'Apple Podcasts', href: '/' },
        { id: '199', name: 'Apple Books', href: '/' },
        { id: '200', name: 'App Store', href: '/' }
    ]

    const support: List[] = [
        { id: '201', name: 'Apple TV Support', href: '/' },
        { id: '202', name: 'Apple Music Support', href: '/' }

    ]





    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore Entertainment</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Support</h3>
                        {
                            support.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
