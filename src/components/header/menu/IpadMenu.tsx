import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'





export default function IpadMenu() {


    const exploreAll: List[] = [
        { id: '60', name: 'Explore All iPad',        href: '/' },
        { id: '61', name: 'iPad Pro'        ,        href: '/' },
        { id: '62', name: 'iPad Air'        ,        href: '/' },
        { id: '63', name: 'iPad'            ,        href: '/' },
        { id: '64', name: 'iPad mini'       ,        href: '/' },
        { id: '65', name: 'Apple Pencil'    ,        href: '/' },
        { id: '66', name: 'Keyboards'       ,        href: '/' },
    ]

    const shop: List[] = [
        { id: '68', name: 'Shop iPad'             ,   href: '/' },
        { id: '69', name: 'iPad Accessories'      ,   href: '/' },
        { id: '70', name: 'Apple Upgrade'        ,   href: '/' },
        { id: '71', name: 'Apple Trade In'       ,   href: '/' },
        { id: '72', name: 'Financing'            ,   href: '/' },
        { id: '73', name: 'Personal Setup'       ,   href: '/' },
        { id: '74', name: 'College Student Offer',   href: '/' }

    ]

    const moreFrom: List[] = [
        { id: '75', name: 'iPad Support'                , href: '/' },
        { id: '76', name: 'AppleCare'                  , href: '/' },
        { id: '77', name: 'iPadOS 27 Preview'           , href: '/' },
        { id: '78', name: 'Apple Intelligence and Siri', href: '/' },
        { id: '79', name: 'Apps by Apple'              , href: '/' },
        { id: '80', name: 'Apple Creator Studio'       , href: '/' },
        { id: '82', name: 'iCloud+'                    , href: '/' },
        { id: '84', name: 'Education'                  , href: '/' },
        { id: '85', name: 'Apple at Work'              , href: '/' }
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore iPad</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Shop iPad</h3>
                        {
                            shop.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>More from iPad</h3>
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
