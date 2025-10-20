/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState, type FC } from 'react';
import s from './ControlCard.module.css';
import { Button, Typography, Badge, Pagination, Segmented, Slider, Steps } from 'antd';
import type { CardControl } from 'interguidejs/dist/types';

const { Text } = Typography;

type ControlCardProps = {
  control: CardControl;
  type: number;
  badge?: boolean;
  steps?: boolean;
  slider?: boolean;
};

const ButtonsControls = ({ control }: { control: CardControl }) => {
  return (
    <div className={s.buttons}>
      {control.prev && (
        <Button color="primary" type="primary" onClick={control.prev}>
          Вернуться на предыдущий шаг
        </Button>
      )}
      {control.next && (
        <Button color="primary" type="primary" onClick={control.next}>
          Перейти на следующий шаг
        </Button>
      )}
    </div>
  );
};

const CarouselControls = ({ control }: { control: CardControl }) => {
  return (
    <div className={s.dots_list}>
      {Array.from(Array(control.stepsCount + 1).keys()).map((value) => (
        <div
          onClick={() => {
            if (control.stepNumber - 1 > value) {
              control.prev?.();
            } else if (control.stepNumber - 1 < value) {
              control.next?.();
            }
          }}
          className={control.stepNumber - 1 === value ? s.active_dot : s.dot}
        />
      ))}
    </div>
  );
};

const PaginationControls = ({ control }: { control: CardControl }) => {
  return (
    <Pagination
      onChange={(page) => {
        if (page > control.stepNumber) {
          control.next?.();
        } else {
          control.prev?.();
        }
      }}
      current={control.stepNumber}
      pageSize={1}
      total={control.stepsCount + 1}
    />
  );
};

const SegmentedControls = ({ control }: { control: CardControl }) => {
  return (
    <Segmented
      block={true}
      options={Array.from(Array(control.stepsCount + 1).keys()).map((i) => i + 1)}
      onChange={(value) => {
        if (value > control.stepNumber) {
          control.next?.();
        } else {
          control.prev?.();
        }
      }}
      value={control.stepNumber}
    />
  );
};

const getTypeControl = (type: number, control: CardControl) => {
  if (type === 1) {
    return <ButtonsControls control={control} />;
  } else if (type === 2) {
    return <CarouselControls control={control} />;
  } else if (type === 3) {
    return <PaginationControls control={control} />;
  } else if (type === 4) {
    return <SegmentedControls control={control} />;
  } else {
    return <></>;
  }
};

const SliderControls = ({ control }: { control: CardControl }) => {
  return <Slider max={control.stepsCount} min={1} step={1} value={control.stepNumber} />;
};

const StepsControls = ({ control, type }: { control: CardControl; type: number }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let intervalId: any = null;
    if (type === 5) {
      intervalId = setInterval(() => {
        setCounter((counter) => {
          if (counter < 50) {
            return counter + 1;
          } else {
            intervalId && clearInterval(intervalId);
            control.next?.();
            return counter;
          }
        });
      }, 100);
    }

    document?.addEventListener('deactivate-guide', () => {
        intervalId && clearInterval(intervalId);
    });
  }, [type, control]);
  return type !== 5 ? (
    <Steps
      percent={(control.stepNumber / control.stepsCount) * 100}
      size="small"
      current={control.stepNumber - 1}
      items={Array.from(Array(control.stepsCount).keys()).map(() => ({ title: 'Шаг' }))}
    />
  ) : (
    <Steps
      percent={(counter / 50) * 100}
      size="small"
      current={control.stepNumber - 1}
      items={Array.from(Array(control.stepsCount).keys()).map(() => ({ title: 'Шаг' }))}
    />
  );
};

export const ControlCard: FC<ControlCardProps> = ({ control, badge, type, steps, slider }) => {
  return badge ? (
    <Badge count={control.stepNumber}>
      <div className={s.card}>
        <Text>{`${control.stepNumber}/${control.stepsCount}`}</Text>
        {getTypeControl(type, control)}
        {slider && <SliderControls control={control} />}
        {steps && <StepsControls type={type} control={control} />}
      </div>
    </Badge>
  ) : (
    <div className={s.card}>
      <Text>{`${control.stepNumber}/${control.stepsCount}`}</Text>
      {getTypeControl(type, control)}
      {slider && <SliderControls control={control} />}
      {steps && <StepsControls type={type} control={control} />}
    </div>
  );
};
