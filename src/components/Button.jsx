import classNames from 'classnames';
import {useState} from "react";


// classNames - с помощью неё мы задаем классы тегам, как представлено ниже

const Button = ({text, outline}) => {
  const [count, setCount] = useState(0);  // хук состояния

  const clickPoKnopke = () => {
    setCount(count + 1)
    // count выше, это начально состояние чего либо, может быть строкой, числом, объектом, чем угодно
    // в нашем случае оно равно number ноль
    // setCount принимает функцию, и меняет это состояние через функцию
    // при клике делаем count = 0+1 и обновляем страницу, вы не заметите это глазом, но она обновилась
    // далее count = 1, кликаем count 1+1, в <p> ниже count выведет вы "кликнули 2 раз"
  }
  console.log(text);

  return (
    <div className="buttonWrapper">
      <button
        onClick={clickPoKnopke}  // onClick это слушатель на кнопку, в скобках передается название функции
        className={classNames(
          'button',
          {
            'button--outline': outline   // мы прокинули пропс сюда, и задаем динамический класс для 'button--outline',
            // он будет выполняться только в том случае если outline true. Например так прокидывают класс active
          })}
      >
      {text}
      </button>
      {/* <p>{textClick} {count} раз</p> */}
    </div>
  )
}

export default Button