import './Section.scss'
import i1 from '../../images/Section-hero-images/Ipad-Air.jpg'
import i2 from '../../images/Section-hero-images/promo_macbook_pro__c9td9w1mc8ia_large_2x.jpg'
import i3 from '../../images/Section-promo-images/Watch-series-11.jpg'
import i4 from '../../images/Section-promo-images/ipad-pro.jpg'
import i5 from '../../images/Section-promo-images/trade-in.jpg'
import i6 from '../../images/Section-promo-images/card.jpg'
import ipadLogo from '../../images/Section-hero-images/iPadAir.png'
import tradeLogo from '../../images/Section-promo-images/trade-in-title.png';
import watchLogo from '../../images/Section-promo-images/watch-title.png'
import cartLogo from '../../images/Section-promo-images/card-title.png'
import p1 from '../../images/Section-hero-images/promo_ipad_air_m4.jpg'
import p3 from '../../images/Section-hero-images/promo_apple_watch_series_11__gnlwqxe1jlu2_medium_2x.jpg'
import p4 from '../../images/Section-hero-images/promo_ipad_pro__emtduc920o02_medium_2x.jpg'
import type React from 'react'


type sectionList = {
    id: string
    title: React.ReactNode
    text: string
    img: string
    img2? : string
    color?: string
    logo?: boolean
    btn1: string
    btn2? : string
}


export default function Section() {

    const list: sectionList[] = [
        { id: '1000', title: <img src={ipadLogo} loading='lazy' alt="" className='title' />,    text: 'Now supercharged by M4.',                                             btn1:'Learn more', btn2: 'Buy', img: i1, img2: p1,    logo: true},
        { id: '1001', title: 'MacBook Pro',                                                     text: 'Now with M5, M5 Pro, and M5 Max.',                                    btn1:'Learn more', btn2: 'Buy', img: i2,              color: 'white' },
        { id: '1002', title: <img src={watchLogo} loading='lazy' alt="" className='title' />,   text: 'The ultimate way to watch your health.',                              btn1:'Learn more', btn2: 'Buy', img: i3, img2: p3,    logo: true },
        { id: '1003', title: 'iPad Pro',                                                        text: 'Now supercharged by M4.',                                             btn1:'Learn more', btn2: 'Buy', img: i4, img2: p4,    color: 'white' },
        { id: '1004', title: <img src={tradeLogo} loading='lazy' alt="" className='title' />,   text: 'Get up to $195-$695 in credit when you trade in iPhone 13 or higher.',btn1:'Get your estimate',              img: i5,              logo: true },
        { id: '1005', title: <img src={cartLogo} loading='lazy' alt="" className='title' />,    text: 'Get up to 3% Daily Cash back with every purchase',                    btn1:'Learn more', btn2: 'Apply now', img: i6,              logo: true }
    ]

    return (
        <div className='section'>
            {
                list.map(elem => (
                    <div className="item" key={elem.id}>
                        <picture>
                            <source media='(max-width:1070px)' srcSet={elem.img2 || ''} />
                            <img src={elem.img} className='img' loading='lazy' alt="" />
                        </picture>
                        <div className="box">
                            {!elem.logo ? <h2 style={{ color: elem.color }}>{elem.title}</h2> : elem.title}
                            <p style={{ color: elem.color }}>{elem.text}</p>
                            <div className="btns">
                                <button>{elem.btn1}</button>
                                {elem.btn2 && <button>{elem.btn2}</button>}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
