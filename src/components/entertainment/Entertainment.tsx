import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper'
import { Autoplay } from 'swiper/modules'
import i1 from '../../images/section-endless-entertainment-images/Media-gallery/IBM.jpg'
import i2 from '../../images/section-endless-entertainment-images/Media-gallery/MLS.jpg'
import i3 from '../../images/section-endless-entertainment-images/Media-gallery/cape-fear.jpg'
import i4 from '../../images/section-endless-entertainment-images/Media-gallery/friday-night.jpg'
import i5 from '../../images/section-endless-entertainment-images/Media-gallery/widows-bay.jpg'
import i7 from '../../images/section-endless-entertainment-images/Media-gallery/silo.jpg'


import i1_2 from '../../images/Section-hero-images2/IBM2.jpg'
import i2_2 from '../../images/Section-hero-images2/mls.jpg'
import i3_2 from '../../images/Section-hero-images2/capefear.jpg'
import i4_2 from '../../images/Section-hero-images2/baseball.jpg'
import i5_2 from '../../images/Section-hero-images2/widowsbay.jpg'
import i6_2 from '../../images/Section-hero-images2/silo.jpg'



import p1 from '../../images/section-endless-entertainment-images/Fitness+/programs.jpg'
import p2 from '../../images/section-endless-entertainment-images/Fitness+/tredimil.jpg'
import p3 from '../../images/section-endless-entertainment-images/Arcade/Hello-kitty.png'
import p4 from '../../images/section-endless-entertainment-images/Arcade/balatro+.png'
import p5 from '../../images/section-endless-entertainment-images/Arcade/powerWash.webp'
import p6 from '../../images/section-endless-entertainment-images/Fitness+/bakari.jpg'
import p7 from '../../images/section-endless-entertainment-images/Arcade/davidBowie.jpg'


import p1_2 from '../../images/Section-hero-images2/fitness2.jpg'
import p2_2 from '../../images/Section-hero-images2/fitness.jpg'
import p3_2 from '../../images/Section-hero-images2/hellokity2.jpg'
import p4_2 from '../../images/Section-hero-images2/balatro2.jpg'
import p5_2 from '../../images/Section-hero-images2/powerwash2.jpg'
import p6_2 from '../../images/Section-hero-images2/fitness.jpg'
import p7_2 from '../../images/Section-hero-images2/davidbowie2.jpg'




import './Entertainment.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

type SliderList = {
  id: string
  img: string
  img2?: string
  btn: string
  text: string
}

export default function Entertainment() {

  const topSwiper = useRef<SwiperClass | null>(null)
  const bottomSwiper = useRef<SwiperClass | null>(null)

  const isSyncing = useRef(false)

  const list: SliderList[] = [
    { id: '1006', img: i1, img2: i1_2 ,text: 'Every Grand Prix, live and on demand-all in one place, all year long', btn: 'F1 on Apple TV' },
    { id: '1007', img: i2, img2: i2_2 ,text: 'Watch every club, every match, live-all season long.', btn: 'MLS on Apple TV' },
    { id: '1008', img: i3, img2: i3_2 ,text: 'Triller Fear takes hold.', btn: 'Stream now' },
    { id: '1009', img: i4, img2: i4_2 ,text: 'Live MLB games, every Friday', btn: 'See the schedule' },
    { id: '1010', img: i5, img2: i5_2 ,text: 'Mystery 19 Emmy Nominations Including Best Comedy', btn: 'Stream now' },
    { id: '1011', img: i7, img2: i6_2 ,text: 'Sci-FI The truth lies in the past', btn: 'Stream now' },
  ]


  const list2: SliderList[] = [
    { id: '1012', img: p1, img2: p1_2, text: 'Programs', btn: 'Watch now' },
    { id: '1013', img: p2, img2: p2_2, text: 'Programs', btn: 'Watch now' },
    { id: '1014', img: p3, img2: p3_2, text: 'Hello kity Island Adventure', btn: 'Play now' },
    { id: '1015', img: p4, img2: p4_2, text: 'Baladro+', btn: 'Play now' },
    { id: '1016', img: p5, img2: p5_2, text: 'PowerWash Simulator', btn: 'Play now' },
    { id: '1017', img: p6, img2: p6_2, text: 'HIIT with Bakari', btn: 'Watch now' },
    { id: '1018', img: p7, img2: p7_2, text: 'David Bowie', btn: 'Watch now' },

  ]

  return (
    <div className='entertainment'>
      <h2>Endless entertainment.</h2>

      <div className="content">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            topSwiper.current = swiper
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}

          onSlideChange={(swiper) => {
            if (isSyncing.current) return

            const index = swiper.realIndex

            if (bottomSwiper.current) {
              isSyncing.current = true

              bottomSwiper.current.slideToLoop(
                index % list2.length,
                1000,
                false
              )

              setTimeout(() => {
                isSyncing.current = false
              }, 1000)
            }
          }}

          centeredSlides={true}
          slidesPerView='auto'
          spaceBetween={12}
          loop={true}
          speed={1000}
         
          className="topSwiper"
        >
          {list.map(elem => (
            <SwiperSlide key={elem.id}>
              <div className="slide-card">
                <picture>
                  <source media='(max-width: 733px)' srcSet={elem.img2}/>
                  <img src={elem.img} loading="lazy" alt="" />
                </picture>

                <div className="box">
                  <button>{elem.btn}</button>
                  <p>{elem.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>








        <Swiper
          onSwiper={(swiper) => {
            bottomSwiper.current = swiper
          }}

          onSlideChange={(swiper) => {
            if (isSyncing.current) return

            const index = swiper.realIndex

            if (topSwiper.current) {
              isSyncing.current = true

              topSwiper.current.slideToLoop(
                index % list.length,
                1000,
                false
              )

              setTimeout(() => {
                isSyncing.current = false
              }, 1000)
            }
          }}

          centeredSlides={true}
          slidesPerView='auto'
          spaceBetween={12}
          loop={true}
          speed={1000}


          className="bottomSwiper"
        >
          {list2.map(elem => (
            <SwiperSlide key={elem.id}>
              <div className="slide-card2">
                <picture>
                  <source media='(max-width: 1069px)' srcSet={elem.img2} />
                  <img src={elem.img} loading="lazy" alt="" />
                </picture>
                <div className="box">
                  <p>{elem.text}</p>
                  <Link to='/'><button>{elem.btn}</button></Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
