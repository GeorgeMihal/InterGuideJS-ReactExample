import type { Guide, CardControl } from 'interguidejs/dist/types';
import close  from './assets/close.svg';
import { hydrateRoot } from 'react-dom/client';
import { ControlCard } from './components/controlCard/ControlCard';
import { Typography, Spin } from 'antd';
import { FinalCard } from './components/finalCard/FinalCard';

const { Text } = Typography;

const spin = (wrapper: HTMLElement) => {
  hydrateRoot(wrapper, <Spin size="large" />)
}

const card = (wrapper: HTMLElement, control: CardControl, type: number, badge?: boolean, steps?: boolean, slider?: boolean) => {
  hydrateRoot(wrapper, <ControlCard control={control} type={type} badge={badge} steps={steps} slider={slider} />)
}


const finalCard = (wrapper: HTMLElement, cancel?: () => void) => {
  hydrateRoot(wrapper, <FinalCard cancel={cancel} title={
    <>
      <Text>Спасибо, что прошли обучение!</Text>
    </>
  } />)
}

export const guide: (type: number, badge?: boolean, steps?: boolean, slider?: boolean) => Guide = (type: number, badge?: boolean, steps?: boolean, slider?: boolean) =>({
  rootContext: "[id=c-body]",
  finalElement: { 
    render: finalCard , 
    position: { top: 'calc(50vh - 39px)', left: 'calc(50vw - 112px)' } 
  },
  loadingElement: { 
    render: spin , 
    position: { top: 'calc(50vh - 20px)', left: 'calc(50vw - 20px)' } 
  },
  deactivateElement: { 
    render: (wrapper, cancel) => {  hydrateRoot(wrapper, <img style={{ cursor: "pointer" }} src={close} alt="" onClick={cancel} />)} ,
    position: { top: '24px', right: '24px' } 
  },
  steps: [
  {
    points: [
      {
        cardRender: (wrapper, control) => card(wrapper, control, type, badge, steps, slider),
        selector: "[data-guide-id='c-test']",
        direction: 'bottomRight',
      },
    ],
    nextButton: true,
  },
  {
    points: [
      {
        cardRender: (wrapper, control) => card(wrapper, control, type, badge, steps, slider),
        selector: "[data-guide-id='c-test2']",
        direction: 'bottomRight',
      },
    ],
    nextButton: true,
  },
  {
    points: [
      {
        cardRender: (wrapper, control) => card(wrapper, control, type, badge, steps, slider),
        selector: "[data-guide-id='c-test3']",
        direction: 'bottomRight',
      },
    ],
    nextButton: true,
  },
  {
    points: [
      {
        cardRender: (wrapper, control) => card(wrapper, control, type, badge, steps, slider),
        selector: "[data-guide-id='c-test4']",
        direction: 'bottomRight',
      },
    ],
    nextButton: true,
  },
  {
    points: [
      {
        cardRender: (wrapper, control) => card(wrapper, control, type, badge, steps, slider),
        selector: "[data-guide-id='c-test5']",
        direction: 'bottomRight',
      },
    ],
    nextButton: true,
  },
  {
    points: [
      {
        cardRender: (wrapper, control) => card(wrapper, control, type, badge, steps, slider),
        selector: "[data-guide-id='c-test6']",
        direction: 'bottomRight',
      },
    ],
    nextButton: true,
  },
  {
    points: [
      {
        cardRender: (wrapper, control) => card(wrapper, control, type, badge, steps, slider),
        selector: "[data-guide-id='c-test7']",
        direction: 'bottomRight',
      },
    ],
    nextButton: true,
  },
],
})