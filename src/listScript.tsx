import type { Guide, CardControl } from 'interguidejs/dist/types';
import close from './assets/close.svg';
import { hydrateRoot } from 'react-dom/client';
import { Typography, Spin } from 'antd';
import { FinalCard } from './components/finalCard/FinalCard';
import { DefaultCard } from './components/defaultCard/DefaultCard';

const { Text } = Typography;

const spin = (wrapper: HTMLElement) => {
  hydrateRoot(wrapper, <Spin size="large" />);
};

const card = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Добавьте хотя бы один элемент</Text>
        </>
      }
    />,
  );
};

const card2 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Нажмите кнопку</Text>
        </>
      }
    />,
  );
};

const finalCard = (wrapper: HTMLElement, cancel?: () => void) => {
  hydrateRoot(
    wrapper,
    <FinalCard
      cancel={cancel}
      title={
        <>
          <Text>Спасибо, что прошли обучение!</Text>
        </>
      }
    />,
  );
};

export const guide: Guide = {
  rootContext: '[id=l-body]',
  finalElement: {
    render: finalCard,
    position: { top: 'calc(50vh - 39px)', left: 'calc(50vw - 112px)' },
  },
  loadingElement: {
    render: spin,
    position: { top: 'calc(50vh - 20px)', left: 'calc(50vw - 20px)' },
  },
  deactivateElement: {
    render: (wrapper, cancel) => {
      hydrateRoot(
        wrapper,
        <img style={{ cursor: 'pointer' }} src={close} alt="" onClick={cancel} />,
      );
    },
    position: { top: '24px', right: '24px' },
  },
  steps: [
    {
      points: [
        {
          cardRender: (wrapper, control) => card(wrapper, control),
          selector: "[data-guide-id='list']",
          direction: 'right',
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: (wrapper, control) => card2(wrapper, control),
          selector: "[data-guide-id='submit2']",
          direction: 'bottomRight',
          requiredElements: ["[data-guide-id='submit2']:not([disabled])"],
        },
      ],
    },
  ],
};
