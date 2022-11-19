import css from './Footer.module.css'

function Footer() {
    return(
        <div className={css.FooterCont}>
            <div className={css.block1}>

            </div>
            <div className={css.block2}>
                <p>2022 ИП "Новожилова Н.С. " <br></br>
                    г. Иркутск, ул. Аэрофлотская, дом 7, квартира 116
                   
                   </p>
                   <p>Информация на сайте носит справочный характер<br></br>
                     и не является публичной офертой.</p>
                    <p>Политика конфиденциальности.</p>
            </div>
        </div>
    )
}


export default Footer;