import { useState } from 'react'
import s from './FullScriptPage.module.css'
import { Button, Modal } from 'antd';
import { guide } from '../../fullScript';
import { InterGuide } from 'interguidejs';

import "../../../../InterGuideJS/dist/interguidejs.esm.css"


const GuideSystem = new InterGuide();

console.log(GuideSystem);

function FullScriptPage() {
  const [count, setCount] = useState(0)
  const [newButtons, setNewButtons] = useState(false)
  const [moreNewButtons, setMoreNewButtons] = useState(false)
  const onCountHandler = () => setCount((value) => value + 1)
  const activeGuide = () => {
    GuideSystem.activateGuide(guide);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.body} id="body">
      <Button color="primary" type='primary' onClick={activeGuide}>Активировать сценарий</Button>
      <div className={s.text} data-guide-id="test">Это пример работы системы обучения</div>
      <div className={s.text} data-guide-id="test2">Вам демонстрируют работу сценария</div>
      <div className={s.text_wrapper}>
        <div className={s.text} data-guide-id="test3">Здесь будет много текста</div>
        <div className={s.text} data-guide-id="test4">Но так нужно</div>
      </div>
      <div className={s.text} data-guide-id="test5">Ещё можно отключить сценарий внутри карточки, используя функцию control.deactivate</div>
      <div className={s.text} data-guide-id="test6">И как ты заметил, можно передвигаться по шагам, используя функции control.prev и control.next, но только при определённых условиях</div>
      <div className={s.text} data-guide-id="test7">Меняем тень !</div>
      <div className={s.text_wrapper}>
        <div className={s.text} data-guide-id="test8">Правим задний фон</div>
        <div className={s.text} data-guide-id="test9">Выделяем элемент</div>
      </div>
      <div className={s.text} data-guide-id="test10">Можно перейти на слейдующий шаг по нажатию на клавишу</div>
      <div className={s.text} data-guide-id="test11">Положение карточек</div>
      <div className={s.text_row}>
      <div className={s.text_column}>
        <div className={s.text} data-guide-id="test12">bottomRight</div>
        <div className={s.text} data-guide-id="test13">right</div>
        <div className={s.text} data-guide-id="test14">topRight</div>
      </div>
      <div className={s.text_column}>
        <div className={s.text} data-guide-id="test15">bottom</div>
        <div className={s.text} data-guide-id="test16">top</div>
      </div>
      <div className={s.text_column}>
        <div className={s.text} data-guide-id="test17">bottomLeft</div>
        <div className={s.text} data-guide-id="test18">left</div>
        <div className={s.text} data-guide-id="test19">topLeft</div>
      </div>
      </div>
      <div className={s.text_wrap}>
        <div className={s.text} data-guide-id="test20">Не скроль до меня! Оно само!</div>
      </div>
      <div className={s.text} data-guide-id="test21">Анимация</div>
      <div className={s.text} data-guide-id="test22">Свет!</div>
      <div className={s.text} data-guide-id="test23">Камера!</div>
      <div className={s.text} data-guide-id="test24">Мотор!</div>
      <Button  data-guide-id="test25" color="purple" variant="filled" onClick={showModal}>Открыть модальное окно</Button>
      <Modal
        title="Новый контекст"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        wrapProps={{ id: "modal", }}
        onCancel={handleCancel}
      >
        <div className={s.body} data-guide-id="modal-body">
          <Button  data-guide-id="test26" color="purple" variant="filled" onClick={() => setTimeout(() => setNewButtons(true), 3000)}>Добавить новые кнопки</Button>
          { newButtons && 
          (<>
            <Button  data-guide-id="test27" color="purple" variant="filled" onClick={() => setTimeout(() => setMoreNewButtons(true), 3000)}>Добавить ещё больше кнопок</Button>
          </>) 
          }
          { moreNewButtons && 
          (<>
            <Button  data-guide-id="test28" color="purple" variant="filled" onClick={onCountHandler}>Увеличиваем счётчик</Button>
          </>) 
          }
          {count}
          <div data-count={count < 5 ? count : 5} className={s.count_wrapper}>
            <div className={s.text} data-guide-id="test29">Счётчик равен 3</div>
            <div className={s.text} data-guide-id="test30">Счётчик равен или больше 5</div>
          </div>
          <Button  data-guide-id="test31" color="purple" variant="filled">Завершить сценарий</Button>
        </div>
      </Modal>
    </div>
  )
}

export default FullScriptPage
