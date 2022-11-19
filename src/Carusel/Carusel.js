import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import css from './Carusel.module.css'
import img1 from './../image/1.png'
import img2 from './../image/2.png'
import img3 from './../image/3.png'


function Carusel() {
    let settings = {
        dot: true,
        infinity: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
     }
    return (
        <Slider {...settings} className={css.set}>       
        <div className="card-wrapper">
            <div className='card'>
                <div className='card-image'>
                    <img  className={css.img1} src={img1} />
                </div>
             
            </div>
        </div>
        <div className="card-wrapper">
            <div className='card'>
                <div className='card-image'>
                    <img className={css.img1}  src={img2} />
                </div>
             
            </div>
        </div>
       
        <div className="card-wrapper">
            <div className='card'>
                <div className='card-image'>
                    <img  className={css.img1}  src={img3} />
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className='card'>
                <div className='card-image'>
                    <img  className={css.img1}  src={img1} />
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className='card'>
                <div className='card-image'>
                    <img  className={css.img1}  src={img2} />
                </div>
            </div>
        </div>

    </Slider>
    )
}


export default Carusel;