import type { FC } from "react";
import s from './DefaultCard.module.css'
import { Button } from 'antd';
import type { CardControl } from "interguidejs/dist/types";
import type React from "react";

type DefaultCardProps = {
    control: CardControl;
    title: React.ReactNode;
    hasButtons?: boolean;
}

export const DefaultCard: FC<DefaultCardProps> = ({ control, title, hasButtons = true }) => {
    return(
    <div className={s.card}>
        {
            title
        }
        { hasButtons && (
            <div className={s.buttons}>
            {control.prev && (
                <Button color="primary" type='primary' onClick={control.prev}>Вернуться на предыдущий шаг</Button>
            )}
            {control.next && (
                <Button color="primary" type='primary' onClick={control.next}>Перейти на следующий шаг</Button>
            )}
            </div>
        )}
    </div>
    )
}