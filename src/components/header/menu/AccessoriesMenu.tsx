import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function AccessoriesMenu() {


    const shopProduct: List[] = [
        { id: '205', name: 'Shop Accessories',        href: '/' },
        { id: '206', name: 'iPhone'        ,        href: '/' },
        { id: '207', name: 'iPad'        ,        href: '/' },
        { id: '208', name: 'Mac'            ,        href: '/' },
        { id: '209', name: 'Apple Watch'       ,        href: '/' },
        { id: '210', name: 'Apple Vision Pro'    ,        href: '/' },
        { id: '211', name: 'AirPods'       ,        href: '/' },
        { id: '212', name: 'Home'       ,        href: '/' },
        { id: '213', name: 'AirTag'       ,        href: '/' },
        { id: '214', name: 'Beats'       ,        href: '/' }
    ]

    const shop: List[] = [
        { id: '215', name: 'Headphones & Speakers'             ,   href: '/' },
        { id: '216', name: 'Chargers & Adapters'      ,   href: '/' },
        { id: '217', name: 'Smart Home Essentials'        ,   href: '/' },
        { id: '218', name: 'Cases & Protection'       ,   href: '/' },
        { id: '219', name: 'Content Creation'            ,   href: '/' },
        { id: '220', name: 'Gaming'       ,   href: '/' },
        { id: '221', name: 'Hard Drives & Storage',   href: '/' },
        { id: '222', name: 'Mice & Keyboards',   href: '/' },
        { id: '223', name: 'Health & Fitness',   href: '/' },
        { id: '224', name: 'Office Accessories',   href: '/' },
        { id: '225', name: 'Software',   href: '/' }

    ]

    const moreFrom: List[] = [
        { id: '226', name: 'New Arrivals'               , href: '/' },
        { id: '227', name: 'Made by Apple'                  , href: '/' },
        { id: '228', name: 'Accessiblity'          , href: '/' },
        { id: '229', name: 'Assistive Technologies', href: '/' },
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Shop by Product</h3>
                    {
                        shopProduct.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Shop by Category</h3>
                        {
                            shop.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>More to Explore</h3>
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
