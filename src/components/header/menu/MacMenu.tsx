import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../types/listType'



export default function MacMenu() {


    const exploreAll: List[] = [
        { id: '30', name: 'Explore All Mac',        href: '/' },
        { id: '31', name: 'MacBook Neo'    ,        href: '/' },
        { id: '32', name: 'MacBook Air'    ,        href: '/' },
        { id: '33', name: 'MacBook Pro'    ,        href: '/' },
        { id: '34', name: 'iMac'           ,        href: '/' },
        { id: '35', name: 'Mac mini'       ,        href: '/' },
        { id: '36', name: 'Mac Studio'     ,        href: '/' },
        { id: '37', name: 'Displays'       ,        href: '/' }
    ]

    const shop: List[] = [
        { id: '38', name: 'Shop Mac'             ,   href: '/' },
        { id: '39', name: 'Mac Accessories'      ,   href: '/' },
        { id: '40', name: 'Apple Upgrade'        ,   href: '/' },
        { id: '41', name: 'Apple Trade In'       ,   href: '/' },
        { id: '42', name: 'Financing'            ,   href: '/' },
        { id: '43', name: 'Personal Setup'       ,   href: '/' },
        { id: '44', name: 'College Student Offer',   href: '/' }

    ]

    const moreFrom: List[] = [
        { id: '45', name: 'Mac Support'                , href: '/' },
        { id: '46', name: 'AppleCare'                  , href: '/' },
        { id: '47', name: 'macOS 27 Preview'           , href: '/' },
        { id: '48', name: 'Apple Intelligence and Siri', href: '/' },
        { id: '49', name: 'Apps by Apple'              , href: '/' },
        { id: '50', name: 'Apple Creator Studio'       , href: '/' },
        { id: '51', name: 'Better with iPhone'         , href: '/' },
        { id: '52', name: 'iCloud+'                    , href: '/' },
        { id: '53', name: 'Mac for Business'           , href: '/' },
        { id: '54', name: 'Education'                  , href: '/' },
        { id: '55', name: 'Apple at Work'              , href: '/' }
    ]




    return (
        <div className='menu'>
            <div className="menu-container">
                <div className="shop">
                    <h3>Explore Mac</h3>
                    {
                        exploreAll.map(elem => (
                            <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                        ))
                    }
                </div>
                <div className="box">
                    <div className="quickLinks">
                        <h3>Shop Mac</h3>
                        {
                            shop.map(elem => (
                                <span key={elem.id}><Link to={elem.href}>{elem.name}</Link></span>
                            ))
                        }
                    </div>
                    <div className="special">
                        <h3>More from Mac</h3>
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
