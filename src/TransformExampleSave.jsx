import './TransformExampleSave.css'
import { useEffect } from 'react';

export default function TransformExampleSave() {

//Чтобы анимация сохранилась(даже когда hover ушёл), а не вернулась в исх-положение:
  useEffect(() => {
//находим необходимый div, где лежит картинка:
    const transformRotateDiv = document.getElementById('transform_rotate');


//обработчик присваивает ему класс hovered :   
    const handleMouseOver = () => {
      transformRotateDiv.classList.add('hovered');
    };

//обработчик срабатывает, как только курсор оказался на картинке 
    transformRotateDiv.addEventListener('mouseover', handleMouseOver); //событие mouseover - некий аналог hover


    //очистка, когда компонент размонтируется. Этот return делать необяз:
    return () => {
      transformRotateDiv.removeEventListener('mouseover', handleMouseOver);
    };

  }, []);

  return (
    <div id="transform_rotate" className="transform_rotate">
      <img src="https://avatars.mds.yandex.net/i?id=7ef6a87c9f64e79a12e1c877607b1a674c1b1549-12399165-images-thumbs&n=13" alt="example" />  
    </div>
  );
}
