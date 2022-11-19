import css from './Section5.module.css'


function Section5() {
    return(
        <div className={css.Section5Contener}>
            <div className={css.Section5Img}>

            </div>
            <div className={css.Section5btn}>
                <span>Правила проживания</span>
                <div className={css.btndiv}>
                    <button>Забронировать</button>
                </div>
            </div>

        </div>
    )
}

export default Section5;