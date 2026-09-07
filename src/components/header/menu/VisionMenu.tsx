import { Link } from 'react-router-dom'
import './Menu.scss'
import type { List } from '../../../types/listType'



export default function VisionMenu() {


    const exploreAll: List[] = [
        { id: '131', name: 'Explore Apple Vision Pro',        href: '/' },
    ]

    const shop: List[] = [
        { id: '132', name: 'Shop Apple Vision Pro'            ,   href: '/' },
        { id: '133', name: 'Apple Vision Pro Accessories'      ,   href: '/' },
        { id: '134', name: 'Book a Demo'        ,   href: '/' },
        { id: '135', name: 'Financing'            ,   href: '/' },
        { id: '136', name: 'Personal Setup'       ,   href: '/' },

    ]

    const moreFrom: List[] = [
        { id: '137', name: 'Apple Vision Pro Support'                , href: '/' },
        { id: '138', name: 'AppleCare'                  , href: '/' },
        { id: '139', name: 'visionOS 27 Preview'           , href: '/' },
        { id: '140', name: 'Apple Vision Pro for Enterprise', href: '/' },

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
