import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function StoreMenu() {


    const shopList: List[] = [
        { id: '10', name: 'Shop the Latest', href: '/' },
        { id: '11', name: 'Mac', href: '/' },
        { id: '12', name: 'iPad', href: '/' },
        { id: '13', name: 'iPhone', href: '/' },
        { id: '14', name: 'Apple Watch', href: '/' },
        { id: '15', name: 'Apple Vision Pro', href: '/' },
        { id: '16', name: 'AirPods', href: '/' },
        { id: '17', name: 'Accessories', href: '/' },
    ]

    const quikLinksList: List[] = [
        { id: '18', name: 'Find a Store', href: '/' },
        { id: '19', name: 'Order Status', href: '/' },
        { id: '20', name: 'Apple Upgrade', href: '/' },
        { id: '21', name: 'Apple Trade In', href: '/' },
        { id: '22', name: 'Financing', href: '/' },
        { id: '23', name: 'Personal Setup', href: '/' },
        { id: '24', name: 'College Student Offer', href: '/' },

    ]

    const specialStoresList: List[] = [
        { id: '25', name: 'Certified Refurbished', href: '/' },
        { id: '26', name: 'Education', href: '/' },
        { id: '27', name: 'Buisness', href: '/' },
        { id: '28', name: 'Veterans and Military', href: '/' },
        { id: '29', name: 'Government', href: '/' },
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Shop</h3>
                    {
                        shopList.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Quick Links</h3>
                        {
                            quikLinksList.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>Shop Special Stores</h3>
                        {
                            specialStoresList.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
