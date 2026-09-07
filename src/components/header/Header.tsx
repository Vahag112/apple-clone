import { FaApple } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import './Header.scss'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import StoreMenu from "./menu/StoreMenu";
import MacMenu from "./menu/MacMenu";
import IpadMenu from "./menu/IpadMenu";
import IphoneMenu from "./menu/IphoneMenu";
import WatchMenu from './menu/WatchMenu';
import VisionMenu from './menu/VisionMenu';
import { TfiClose } from "react-icons/tfi";
import { HiBars2 } from "react-icons/hi2";
import { MdOutlineArrowBackIos } from "react-icons/md";
import AirpodsMenu from "./menu/AirpodsMenu";
import TvHomeMenu from "./menu/TvHomeMenu";





type NavList = {
    id: string
    name: string
    name2?: string
    href: string
}



export default function Header() {

    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [renderedMenu, setRenderedMenu] = useState<string | null>(null)
    const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [open, setOpen] = useState(false)


    const navList: NavList[] = [
        { id: '1',   name: 'Store',                href: '/' },
        { id: '2',   name: 'Mac',                 href: '/' },
        { id: '3',   name: 'iPad',                href: '/' },
        { id: '4',   name: 'iPhone',                href: '/' },
        { id: '5',   name: 'Watch',                href: '/' },
        { id: '6',   name: 'Vision',                href: '/' },
        { id: '7',   name: 'AirPods',                href: '/' },
        { id: '8',   name: 'TVHome',        name2: 'TV & Home',         href: '/' },
        { id: '9',   name: 'Entertainment',         href: '/' },
        { id: '10',  name: 'Accessories',           href: '/' },
        { id: '11',  name: 'Support',                href: '/' }
    ]

    const menusMap: Record<string, React.ReactNode> = {
        Store: <StoreMenu />,
        Mac: <MacMenu />,
        iPad: <IpadMenu />,
        iPhone: <IphoneMenu />,
        Watch: <WatchMenu />,
        Vision: <VisionMenu />,
        AirPods: <AirpodsMenu />,
        TVHome: <TvHomeMenu />
    }

    const openMenu = (name: string) => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current)
            closeTimeout.current = null
        }
        setActiveMenu(name)
        setRenderedMenu(name)
    }

    const closeMenu = () => {
        setActiveMenu(null)
        closeTimeout.current = setTimeout(() => {
            setRenderedMenu(null)
        }, 450)
    }


    return (
        <>
            <header onMouseLeave={closeMenu} className={activeMenu ? 'col' : ''}>
                <div className="container">

                    <div className="content">
                        <span className="logo"><Link to='/'><FaApple /></Link></span>
                        <nav className={open ? 'active' : ''}>
                            <ul>
                                {
                                    navList.map((elem) => (
                                        <li key={elem.id} onMouseEnter={() => {
                                            if(open){
                                                return ;
                                            }
                                            openMenu(elem.name)
                                        }}><Link onClick={(e) => {
                                            if (!activeMenu) {
                                                e.preventDefault()
                                                openMenu(elem.name)
                                            }
                                        }} to={elem.href}>{elem.name2 ? elem.name2 : elem.name}</Link></li>
                                    ))
                                }

                            </ul>

                        </nav>
                            <div className="box">
                                <span className="search"><CiSearch /></span>
                                <span className="shopping"><IoBagOutline /></span>
                                <span className="bars" onClick={() => setOpen(open => !open)}><HiBars2/></span>

                            </div>

                    </div>

                    <span className={open ? 'close active' : 'close'} onClick={() => {
                        setOpen(false)
                        setActiveMenu(null)
                    }
                    }><TfiClose /></span>

                    <div className={activeMenu ? 'menu-wrapper open col' : 'menu-wrapper'}>
                        <span className="back" onClick={() => setActiveMenu(null)}><MdOutlineArrowBackIos /></span>
                        {renderedMenu && menusMap[renderedMenu]}
                    </div>
                </div>


            </header>

            <div className={activeMenu ? 'menu-overlay open' : 'menu-overlay'}></div>
        </>

    )
}
