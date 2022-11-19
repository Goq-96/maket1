import css from './Section3.module.css'

function Section3(){
    return(
        <div className={css.Section3Contener}>
            <div>
                <p>DELUX</p>
            </div>
            <div className={css.hotel}>
                <div>
                    <span>23 М2</span><br></br>
                    <span>1(2) РАЗМЕЩЕНИЕ</span>
                </div>
                <div>
                    <span>1(2) КРОВАТИ  </span><br></br>
                    <span>1 ВАННАЯ КОМНАТА</span>
                </div>
            </div>
        </div>
    )
}

export default Section3;