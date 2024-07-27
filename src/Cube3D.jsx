import './Cube3D.css'
import { useState, useEffect } from 'react';

export default function Cube3D() {
//Хуки состояния для углов поворота
const [rotateX, setRotateX] = useState(0); //вокруг x - вверх/вниз
const [rotateY, setRotateY] = useState(0);  //вокруг y - влево/вправо
 const [rotateZ, setRotateZ] = useState(0);  //вокруг z - shift+вверх/вниз

 useEffect(() => {
//Обработчик событий для клавиш
  const handleKeyDown = (e) => {
    console.log(`Key pressed: ${e.keyCode}`); //для отладки

    const isShiftPressed = e.shiftKey;    //проверяем, нажат ли Shift

    switch (e.keyCode) {
      case 37: // Left arrow
          setRotateY((prev) => prev - 4);  // при 1 нажатии - угол меняется на 4 градуса
          break;
        case 38: // Up arrow
          if (isShiftPressed) {
            setRotateZ((prev) => prev + 4); //вращение вокруг Z при Shift+Up
          } else {
            setRotateX((prev) => prev + 4);  //иначе - вокруг X
          }
          break;
        case 39: // Right arrow
          setRotateY((prev) => prev + 4);
          break;
        case 40: // Down arrow
          if (isShiftPressed) {
            setRotateZ((prev) => prev - 4); //вращение вокруг Z при Shift+Down
          } else {
            setRotateX((prev) => prev - 4); //иначе - вокруг X
          }
          break;
        default:
          break;
      }
    };

//Добавление обработчика события
  window.addEventListener('keydown', handleKeyDown);

  //Удаление обработчика события при размонтировании компонента (необяз)
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };

}, []);

  return (
    <div  className="wrapper">
      <div className="description">
        <h2>Move the cube using the keyboard!</h2>
          <p>- press left/right - <span>rotate Y</span></p>
          <p>- press up/down - <span>rotate X</span></p>
          <p>- press shift+up/shift+down - <span>rotate Z</span></p>
      </div>


      <div className="container">
        <div
          className="cube"
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`, 
          }}
        >
          <div className="side front">front</div>
          <div className="side back">back</div>
          <div className="side right">right</div>
          <div className="side left">left</div>
          <div className="side top">top</div>
          <div className="side bottom">bottom</div>
        </div>
      </div>
</div>
  )
}
