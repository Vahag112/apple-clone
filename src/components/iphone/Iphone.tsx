import './Iphone.scss'
import i1 from '../../images/Section-hero-images/iphone.jpg'
import i2 from '../../images/Section-hero-images2/hero_iphone_family__be5jkzxszb1e_small_2x.jpg'
export default function Iphone() {
  return (
    <div className='iphone'>
      <div className="container">
        <div className="box">
          <h2>iPhone</h2>
          <p>Meet the latest iPhone lineup.</p>
        </div>
        <div className="btns">
          <button>Learn more</button>
          <button>Shop iPhone</button>
        </div>
      </div>
      <picture>
        <source media='(max-width: 734px)' srcSet={i2}/>
        <img src={i1} alt="" loading='lazy'/>
      </picture>
    </div>
  )
}
