import css from './Section2.module.css'

function Section2(){
    return(
        <div className={css.Section2Contener}>
            <div className={css.sectionText}> 
                <h3>ВСЕ НОМЕРА</h3>
                <h4>И РЕСТОРАН BAIKAL FOREST РАСПОЛОЖЕНЫ</h4>
                <h5>И РЕСТОРАН BAIKAL FOREST РАСПОЛОЖЕНЫ</h5>
            </div> <br></br>

            <div className={css.sectionText}> 
               <p>Интерьер каждого номера выполнен в спокойных<br></br>
                 минималистичных тонах.Вы можете выбрать видовой <br></br>
                 номер с панорамными окнами
                 или номер с видом <br></br> на внутренний двор.<br></br>
                </p>
            </div><br></br>
          
            <div className={css.sectionText}> 
               <p>Каждый номер оснащен кроватью-трансформером,<br></br> телевизором, Wi-Fi,
                    письменным столом и <br></br> принадлежностями,наборами
                     индивидуального <br></br>
                      пользования, чайными принадлежностями, гладильной <br></br>
                      доской и  утюгом, мини-баром и сейфом.
                </p>
            </div><br></br>

            <div className={css.sectionText}> 
               <p>В номерах категории J.SUITE+ и LUXE для большего комфорта <br></br>
                мы добавили уютный диван-трансформер.<br></br>
                А в номерах категории LUXE каждый гость сможет <br></br> расслабиться в
                массажном кресле-качалка <br></br> Yamaguchi Liberty.
                </p>
            </div><br></br> 
        </div>
    )
}

export default Section2;