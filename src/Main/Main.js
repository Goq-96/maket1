import Modal from '../Modal/Modal';
import css from './Main.module.css'

function Main() {
    return(
        <div className={css.contenerMain}>
            {/* <Modal /> */}
            <div className={css.text}>
                <h2 className={css.text1}>«Baikal Forest Hotel»</h2>
                <h3 className={css.text2}>Комфортабельные номера с панорамным видом</h3>
            </div>
        </div>
    )
}

export default Main;