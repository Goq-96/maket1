import css from './Section4.module.css'
import bad from './../image/bed.png'
import tv from './../image/tv.png'
import wifi from './../image/wifi.png'
import shover from './../image/shover.png'
import bar from './../image/bar.png'
import safe from './../image/safe.png'
import phone from './../image/phone.png'
import utug from './../image/utug.png'
import pencil from './../image/pencil.png'
import dress from './../image/dress.png'
import coffee from './../image/coffee.png'
import fen from './../image/ya_ne_torch.png'
import kit from './../image/kit.png'
import Carusel from '../Carusel/Carusel'

function Section4(){
    return(
        <div className={css.Section4Contener}>
            <div className={css.Section4Main}>
                <h3>DELUXE</h3>
            
            <div className={css.textP}>
                <p>
                    НАШИ НОМЕРА КАТЕГОРИИ ДЕЛЮКС ПОДОЙДУТ ДЛЯ<br></br>
                     КОМФОРТНОГО РАЗМЕЩЕНИЯ ОДНОМУ ИЛИ НЕСКОЛЬКИМ <br></br>
                      ГОСТЯМ. ЗДЕСЬ ВАС ЖДУТ ВАРИАНТЫ С ОДНОЙ БОЛЬШОЙ <br></br>
                      ДВУХМЕСТНОЙ КРОВАТЬЮ И ДВУМЯ ОДНОМЕСТНЫМИ. 
                </p>
            </div><br></br>

            <div className={css.textP}>
                <p>
                ДЛЯ УДОБСТВА БОЛЬШИНСТВО НОМЕРОВ КАТЕГОРИИ ДЕЛЮКС  <br></br>
                ОСНАЩЕНЫ ДОПОЛНИТЕЛЬНОЙ ПУФ-КРОВАТЬЮ. НЕКОТОРЫЕ <br></br>
                НОМЕРА ДАННОЙ КАТЕГОРИИ МОГУТ БЫТЬ СОЕДИНЕНЫ МЕЖДУ <br></br> СОБОЙ
                ДВЕРЬЮ ДЛЯ БОЛЬШИХ КОМПАНИЙ ИЛИ СЕМЕЙ.
                </p>
            </div><br></br>

            <div className={css.btnZa}>
                <button>Забронировать</button>
            </div>

            <div className={css.list}>
                <div className={css.lineCont}>
                    <div className={css.line}></div>
                    <span> в номере </span>
                    <div className={css.allList}>
                        <ul>
                            <li>
                                <img src={bad} alt='bad' /> 
                                <span>Кровать-трансформер</span>
                            </li>
                            <li>
                                <img src={tv} alt='tv' /> 
                                <span>Телевизор</span>
                            </li>
                            <li>
                                <img src={wifi} alt='wifi' /> 
                                <span>WI-FI</span>
                            </li>
                            <li>
                                <img src={shover} alt='shover' /> 
                                <span>Душевая кабина</span>
                            </li>
                            <li>
                                <img src={bar} alt='bar' /> 
                                <span>Мини-бар</span>
                            </li>
                            <li>
                                <img src={safe} alt='safe' /> 
                                <span>Сейф</span>
                            </li>
                            <li>
                                <img src={phone} alt='phone' /> 
                                <span>Телефон</span>
                            </li>
                            <li>
                                <img src={utug} alt='utug' /> 
                                <span>Утюг + гладильная доска</span>
                            </li>
                            <li>
                                <img src={pencil} alt='pencil' /> 
                                <span>Письменные <br></br>принадлежности</span>
                            </li>
                            <li>
                                <img src={dress} alt='dress' /> 
                                <span>Халат по запросу</span>
                            </li>
                            <li>
                                <img src={coffee} alt='coffee' className={css.coffee} /> 
                                <span>Чайные пренадлежности</span>
                            </li>
                            <li>
                                <img src={fen} alt='fen' className={css.coffee} /> 
                                <span>Фен</span>
                            </li>
                            <li>
                                <img src={kit} alt='kit' className={css.coffee} /> 
                                <span>Наборы <br></br> для индивидуального <br></br>использвания</span>
                            </li>
                        </ul>
                    </div>

                  
                </div>

            </div>

            </div>
                <div className={css.carusel}>
                    <Carusel />
                </div>
        </div>
    )
}

export default Section4;