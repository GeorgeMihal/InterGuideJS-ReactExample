import { useState } from 'react'
import s from './CardsPage.module.css'
import { Button, Radio, Checkbox  } from 'antd';
import { guide } from '../../cardsScript';
import { InterGuide } from 'interguidejs';

import "../../../../InterGuideJS/dist/interguidejs.esm.css"


const GuideSystem = new InterGuide();

console.log(GuideSystem);

function CardsPage() {
  const [type, setType] = useState(1)
  const [isBadge, setBadge] = useState(false)
  const [isSteps, setSteps] = useState(false)
  const [isSlider, setSlider] = useState(false)
  const activeGuide = () => {
    GuideSystem.activateGuide(guide(type, isBadge, isSteps, isSlider));
  };


  return (
    <div className={s.body} id="c-body">
      <Radio.Group
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={[
          { value: 1, label: 'Кнопки' },
          { value: 2, label: 'Точки' },
          { value: 3, label: 'Пагинация' },
          { value: 4, label: 'Сегменты' },
          { value: 5, label: 'Автоматически' },
        ]}
      />
      <div className={s.switchers}>
        <Checkbox value={isBadge}  onChange={(e) => setBadge(e.target.checked)}>Показать badge</Checkbox >
        <Checkbox value={isSteps}  onChange={(e) => setSteps(e.target.checked)}>Показать steps</Checkbox >
        <Checkbox value={isSlider}  onChange={(e) => setSlider(e.target.checked)}>Показать slider</Checkbox >
      </div>
      <Button color="primary" type='primary' onClick={activeGuide}>Активировать сценарий</Button>
      <div className={s.text} data-guide-id="c-test">Первый шаг</div>
      <div className={s.text} data-guide-id="c-test2">Второй шаг</div>
      <div className={s.text} data-guide-id="c-test3">Третий шаг</div>
      <div className={s.text} data-guide-id="c-test4">Четвёртый шаг</div>
      <div className={s.text} data-guide-id="c-test5">Пятый шаг</div>
      <div className={s.text} data-guide-id="c-test6">Шестой шаг</div>
      <div className={s.text} data-guide-id="c-test7">Седьмой шаг</div>
    </div>
  )
}

export default CardsPage
