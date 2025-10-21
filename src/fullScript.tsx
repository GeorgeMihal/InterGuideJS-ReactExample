import type { Guide, CardControl } from 'interguidejs/dist/types';
import close from './assets/close.svg';
import { hydrateRoot } from 'react-dom/client';
import { DefaultCard } from './components/defaultCard/DefaultCard';
import { Button, Typography, Spin } from 'antd';
import { FinalCard } from './components/finalCard/FinalCard';

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
          <Text>
            Всем привет! Сейчас я вам расскажу про библиотеку InterGuideJS и её возможности
          </Text>
          <Text>
            Это шаг номер {control.stepNumber}, а всего их {control.stepsCount}
          </Text>
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
          <Text>
            Информацию для вывода номера шага или их колличества вы можете взять в параметре control
          </Text>
          <Text>control.stepNumber это номер шага, а control.stepsCount колличество шагов</Text>
          <Text>Также в нём есть информация о поинтах, но об этом далее.</Text>
        </>
      }
    />,
  );
};

const card3 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      hasButtons={false}
      control={{
        ...control,
        next: undefined,
        prev: undefined,
      }}
      title={
        <>
          <Text>На одном шаге может быть несколько поинтов</Text>
          <Text>Всего в данном сценарии {control.pointsCount} поинтов</Text>
          <Text>Колличество поинтов в сценарии лежит в control.pointsCount</Text>
          <Text>А в шаге {control.pointsCountInStep} поинтов</Text>
          <Text>Получить их можно через поле control.pointsCountInStep</Text>
        </>
      }
    />,
  );
};

const card4 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>В рамках сценария это поинт под номером {control.pointNumber}</Text>
          <Text>Лежит в control.pointNumber</Text>
          <Text>В рамках шага это поинт под номером {control.pointNumberInStep}</Text>
          <Text>Лежит в control.pointNumberInStep</Text>
        </>
      }
    />,
  );
};

const card5 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Button color="purple" type="dashed" onClick={control.deactivate}>
            Не нажимай на эту кнопку. Придётся начинать всё с начала :/
          </Button>
        </>
      }
    />,
  );
};

const card6 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>
            Функция control.next доступна только если в действующем шаге активирован флаг nextButton
          </Text>
          <Text>
            Функция control.prev доступна только если в предыдущем шаге активирован флаг nextButton
          </Text>
        </>
      }
    />,
  );
};

const card7 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Цвет затемнения заднего фона настраивается в поле shadowColor на шаге</Text>
          <Text>По стандартну он имеет значение rgba(121, 121, 121, 0.25)</Text>
        </>
      }
    />,
  );
};

const card8 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      hasButtons={false}
      control={control}
      title={
        <>
          <Text>Иногда у элемента нет выставленного в стилях заднего фона</Text>
          <Text>С этим могут быть проблемы, например у текста</Text>
          <Text>Для решения этой проблемы существует поле style.backgroundColor у поинта</Text>
        </>
      }
    />,
  );
};

const card9 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Также с помощью поля style можно кастомизироать область вокруг элемента</Text>
          <Text>Отступы: padding</Text>
          <Text>Обводка: border</Text>
          <Text>Радиус: borderRadius</Text>
        </>
      }
    />,
  );
};

const card10 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      hasButtons={false}
      control={control}
      title={
        <>
          <Text>Для перехода на следующий шаг нажмите левый shift</Text>
        </>
      }
    />,
  );
};

const card11 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>
            У карточек могут быть разные направления расположения, это настраивается в поле
            direction у поинта
          </Text>
          <Text>И разные расстояния от элемента, это настраивается в поле position у поинта</Text>
        </>
      }
    />,
  );
};

const card12 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      hasButtons={false}
      control={control}
      title={
        <>
          <Text>Стандартное расстояние</Text>
        </>
      }
    />,
  );
};

const card13 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      hasButtons={false}
      control={control}
      title={
        <>
          <Text>Увеличенное расстояние</Text>
          <Text>по горизонтали и вертикали на 20 пикселей</Text>
        </>
      }
    />,
  );
};

const card14 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>У каждого элемента можно настроить скролл до нужной области</Text>
          <Text>Добавить плавности через поле scroll.behavior</Text>
          <Text>Или установить позиционирование через поля scroll.block и scroll.inline</Text>
        </>
      }
    />,
  );
};

const card15 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>У карточки можно настроить анимацию перехода</Text>
        </>
      }
    />,
  );
};

const card16 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Добавить задержку через поле cardAnimation.delay</Text>
        </>
      }
    />,
  );
};

const card17 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Увеличить длительность анимации через cardAnimation.duration</Text>
        </>
      }
    />,
  );
};

const card18 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Изменить кривую скорости анимации через cardAnimation.timingFunction</Text>
        </>
      }
    />,
  );
};

const card19 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>
            Если поле nextButton у шага выставлено в false, то перейти на следующий шаг можно по
            нажатию на сам элемент
          </Text>
        </>
      }
    />,
  );
};

const card20 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>С помощью поля contexts, можно менять контекст выполнения шага</Text>
        </>
      }
    />,
  );
};

const card21 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>
            С помощью поля disable у поинта, можно заблокировать взаимодействие с элементом
          </Text>
        </>
      }
    />,
  );
};

const card22 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Сценарий может ждать асинхронные события</Text>
        </>
      }
    />,
  );
};

const card23 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>
            Сценарий может переходить на следующий шаг при появлении всех элементов из списка
            nextStepElements
          </Text>
        </>
      }
    />,
  );
};

const card24 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      hasButtons={false}
      title={
        <>
          <Text>
            Поинт может становиться активным при появлении всех элементов из списка requiredElements
          </Text>
        </>
      }
    />,
  );
};

const card25 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      hasButtons={false}
      title={
        <>
          <Text>Продолжайте увеличивать счётчик</Text>
        </>
      }
    />,
  );
};

const card26 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Вы достигли нужной отметки</Text>
        </>
      }
    />,
  );
};

const card27 = (wrapper: HTMLElement, control: CardControl) => {
  hydrateRoot(
    wrapper,
    <DefaultCard
      control={control}
      title={
        <>
          <Text>Завершайте сценарий!</Text>
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

const decoration = (wrapper: HTMLElement) => {
  hydrateRoot(
    wrapper,
    <FinalCard
      title={
        <>
          <Text>Внимание! работает система обучения!</Text>
        </>
      }
    />,
  );
};

export const guide: Guide = {
  rootContext: '[id=body]',
  finalElement: {
    render: finalCard,
    position: { top: 'calc(50vh - 39px)', left: 'calc(50vw - 112px)' },
  },
  decorations: [
    { render: decoration, position: { top: '24px', left: 'calc(50vw - 135px)' } },
  ],
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
          cardRender: card,
          selector: "[data-guide-id='test']",
          direction: 'bottomRight',
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card2,
          selector: "[data-guide-id='test2']",
          direction: 'bottomRight',
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card3,
          selector: "[data-guide-id='test3']",
          direction: 'bottomRight',
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card4,
          selector: "[data-guide-id='test4']",
          direction: 'bottomRight',
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card5,
          selector: "[data-guide-id='test5']",
          direction: 'bottomRight',
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card6,
          selector: "[data-guide-id='test6']",
          direction: 'bottomRight',
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card7,
          selector: "[data-guide-id='test7']",
          direction: 'bottomRight',
        },
      ],
      shadowColor: 'rgba(17, 172, 224, 0.25)',
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card8,
          selector: "[data-guide-id='test8']",
          direction: 'bottomRight',
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card9,
          selector: "[data-guide-id='test9']",
          direction: 'bottomRight',
          style: {
            padding: 12,
            borderRadius: '8px',
            border: '2px black solid',
          },
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card10,
          selector: "[data-guide-id='test10']",
          direction: 'bottomRight',
        },
      ],
      key: 'ShiftLeft',
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card11,
          selector: "[data-guide-id='test11']",
          direction: 'topRight',
          position: {
            top: 100,
          },
          scroll: {
            selector: "[data-guide-id='test5']",
          },
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card12,
          selector: "[data-guide-id='test12']",
          direction: 'bottomRight',
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card13,
          selector: "[data-guide-id='test13']",
          direction: 'right',
          position: {
            top: 40,
            left: 40,
          },
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card12,
          selector: "[data-guide-id='test14']",
          direction: 'topRight',
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card13,
          selector: "[data-guide-id='test15']",
          direction: 'top',
          position: {
            top: 40,
            left: 40,
          },
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card13,
          selector: "[data-guide-id='test16']",
          direction: 'top',
          position: {
            top: 40,
            left: 40,
          },
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card13,
          selector: "[data-guide-id='test17']",
          direction: 'bottomLeft',
          position: {
            top: 40,
            left: 40,
          },
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card12,
          selector: "[data-guide-id='test18']",
          direction: 'left',
          style: {
            backgroundColor: 'white',
          },
        },
        {
          cardRender: card13,
          selector: "[data-guide-id='test19']",
          direction: 'topLeft',
          style: {
            backgroundColor: 'white',
          },
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card14,
          selector: "[data-guide-id='test20']",
          direction: 'topRight',
          position: {
            top: undefined,
            left: undefined,
          },
          scroll: {
            selector: "[data-guide-id='test20']",
            behavior: 'smooth',
          },
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card15,
          selector: "[data-guide-id='test21']",
          direction: 'topRight',
          position: {
            top: undefined,
            left: undefined,
          },
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card16,
          selector: "[data-guide-id='test22']",
          direction: 'topRight',
          cardAnimation: {
            delay: '1s',
          },
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card17,
          selector: "[data-guide-id='test23']",
          direction: 'topRight',
          cardAnimation: {
            duration: '0.2s',
          },
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card18,
          selector: "[data-guide-id='test24']",
          direction: 'topRight',
          cardAnimation: {
            duration: '1s',
            timingFunction: 'ease-in',
          },
        },
      ],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card19,
          selector: "[data-guide-id='test25']",
          direction: 'topRight',
          position: {
            top: 30,
          },
        },
      ],
    },
    {
      points: [
        {
          cardRender: card20,
          selector: "[data-guide-id='modal-body']",
          direction: 'topRight',
          disable: true,
        },
      ],
      contexts: [{ selector: "[id='modal']" }],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card21,
          selector: "[data-guide-id='test26']",
          direction: 'topRight',
          disable: true,
        },
      ],
      contexts: [{ selector: "[id='modal']" }],
      nextButton: true,
    },
    {
      points: [
        {
          cardRender: card22,
          selector: "[data-guide-id='test26']",
          direction: 'topRight',
        },
      ],
      contexts: [{ selector: "[id='modal']" }],
    },
    {
      points: [
        {
          cardRender: card23,
          selector: "[data-guide-id='test27']",
          direction: 'topRight',
        },
      ],
      nextStepElements: ["[data-guide-id='test28']"],
      contexts: [{ selector: "[id='modal']" }],
    },
    {
      points: [
        {
          cardRender: card24,
          selector: "[data-guide-id='test28']",
          direction: 'topRight',
        },
        {
          cardRender: card25,
          selector: "[data-guide-id='test29']",
          direction: 'bottomLeft',
          style: {
            backgroundColor: 'white',
          },
          requiredElements: ["[data-count='3']"],
        },
        {
          cardRender: card26,
          selector: "[data-guide-id='test30']",
          direction: 'bottomRight',
          style: {
            backgroundColor: 'white',
          },
          requiredElements: ["[data-count='5']"],
        },
      ],
      nextButton: true,
      contexts: [{ selector: "[id='modal']" }],
    },
    {
      points: [
        {
          cardRender: card27,
          selector: "[data-guide-id='test31']",
          direction: 'topRight',
        },
      ],
      contexts: [{ selector: "[id='modal']" }],
    },
  ],
};
