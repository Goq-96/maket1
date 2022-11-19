import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import css from './Section1.module.css'
import img from './../image/1.png'

function Section1(){
    return(
        <div className={css.Section1Contener}>
            <div className={css.sectionText}> 
                <h3>Номерной фонд</h3>
                <h4>Первой очереди отеля составляет:</h4>
            </div> <br></br>
            
            <div className={css.sectionText}> 
               <p>49 НОМЕРОВ КАТЕГОРИИ DELUXE <br></br>
                  (27 С ПАНОРАМНЫМ ВИДОМ НА ГОРОД, 22 С ВИДОМ НА ВНУТРЕННИЙ ДВОР, 1 ИЗ КОТОРЫХ<br></br>
                  ЯВЛЯЕТСЯ НОМЕРОМ С КАТЕГОРИЕЙ «ДЛЯ ИНВАЛИДОВ»);<br></br>
                </p>
            </div><br></br>
                <div className={css.sectionText}> 
                <p>19 НОМЕРОВ КАТЕГОРИИ J.SUITE (ВСЕ С ПАНОРАМНЫМ ВИДОМ<br></br> НА ГОРОД);
                    </p>
                </div><br></br>
            

                <div className={css.sectionText}> 
                <p>3 НОМЕРА КАТЕГОРИИ J.SUITE+(УЛУЧШЕННЫЕ НОМЕРА<br></br>
                    С БОЛЬШЕЙ ПЛОЩАДЬЮ, ДОПОЛНИТЕЛЬНЫМ ДИВАНОМ<br></br> И ПАНОРАМНЫМ ВИДОМ НА ГОРОД);
                    </p>
                </div><br></br>

                

                <div className={css.sectionText}> 
                <p>2 НОМЕРА LUXE (ВСЕ С ПАНОРАМНЫМ ВИДОМ НА ГОРОД);
                    </p>
                </div><br></br>
                    <div className={css.back}>
                    </div>
            <div >
                <img src={img} alt='img'  className={css.imgbac}/>
            </div> 
            <Section2 />
            <Section3 />
        </div>
    )
}

export default Section1;