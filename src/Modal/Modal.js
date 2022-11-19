import css from './Modal.module.css'


function Modal() {
    return (
        <div className={css.ModalContener}>
            <div className={css.blok1}>
                <div className={css.list1}>
                        <p className={css.h}>Отель</p>
                        <p>Делюкс</p>
                        <p>Полулюкс</p>
                        <p>Правила проживания</p>
                        <p>Люкс</p>
                        <p>Дополнительные услуги</p>
                </div>
                <div className={css.list2}>
                        <p className={css.h}>Экскурсии</p>
                        <p>Обзорная по г.Иркутск</p>
                        <p>Экскурсия по храмам города</p>
                        <p>Экскурсия в бухту Песчаная</p>
                        <p>Экскурсия по Кругобайкалке</p>
                        <p>Музей Тальцы на теплоходе</p>
                        <p>Больште Коты на теплоходе</p>
                        <p>О.Ольхон</p>
                        <p>Правила бронирования</p>
                </div>
            </div>
            <div className={css.blok1}>
               
                    <div className={css.list2blok2}>
                            <p className={css.h}>Ресторан</p>
                            <p>Концепция</p>
                            <p>Основное меню</p>
                            <p>Карта бара</p>
                            <p>Банкетное меню</p>
                            <p>Завтраки</p>
                            <p>Базнес-ланчи</p>
                            <p>Сезонные предложения</p>
                            <p>Мероприятия</p>
                    </div>
                    <div className={css.list2blok3}>
                            <p className={css.h}>Конференц-зал</p>
                            <p>Пространство</p>
                            <p>Условия аренды</p>
                            <p>Спецпредложения</p>
                    </div>
            </div>
            <div className={css.blok3}>

            </div>
            <div className={css.blok4}>

            </div>
        </div>
    )
}

export default Modal;