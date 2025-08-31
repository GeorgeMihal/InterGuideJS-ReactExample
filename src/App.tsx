import { useState } from 'react'
import s from './App.module.css'
import { Button } from 'antd';
import { guide } from './script';
import close  from './assets/close.svg';
import { InterGuide, interpolate } from 'interguidejs';

const GuideSystem = new InterGuide();
GuideSystem.setRootContext('root');
GuideSystem.createFinalWindow(
  (cancel) => interpolate`<div class="${s.cancel}" onClick="${cancel}" />`,
  { top: '224px', left: '224px' }
);
GuideSystem.createLoadingWindow(
  interpolate`<div class="${s.cancel}" />`,
  { top: '524px', left: '524px' }
);
console.log(GuideSystem);

function App() {
  const [count, setCount] = useState(0)
  const [third, setThird] = useState(false)
  const onCountHandler = () => setCount((value) => value + 1)
  const activeGuide = () => {
    GuideSystem.addDecoration(
      interpolate`<img src="${close}" class="${s.cancel}" onClick="${GuideSystem.deactivateGuide}"></img>`,
      { top: '24px', right: '24px' },
      'InterGuide-CancelElement'
    );
    GuideSystem.activateGuide(guide);
  };
  return (
    <div className={s.body}>
      <Button color="primary" type='primary' onClick={activeGuide}>Активировать сценарий</Button>
      <div className={s.buttons}>
      <Button  data-guide-id="test" color="purple" variant="filled" onClick={onCountHandler}>Кнопка первого шага</Button>
      <Button  data-guide-id="test2" color="purple" variant="filled" onClick={() => setTimeout(() => setThird(true), 5000)}>Кнопка второго шага</Button>
      {
        third && (<Button  data-guide-id="test3" color="purple" variant="filled">Кнопка третьего шага</Button>)
      }
      </div>
      {count}
    </div>
  )
}

export default App
