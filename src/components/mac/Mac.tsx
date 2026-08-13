import './Mac.scss'
import i1 from '../../images/Section-hero-images/hero_macbook_air_m5.jpg'
import i2 from '../../images/Section-hero-images2/hero_macbook_air_m5__eb1idggd120y_small_2x.jpg'
export default function Mac() {
  return (
    <div className='mac'>
      <div className="container">
        <h2>MacBook Air</h2>
        <p>Now supercharged by M5.</p>
        <div className="btns">
          <button>Learn more</button>
          <button>Buy</button>
        </div>
      </div>
      <picture>
        <source media='(max-width: 734px)' srcSet={i2}/>
        <img src={i1} alt="" loading='lazy' />
      </picture>
    </div>
  )
}
