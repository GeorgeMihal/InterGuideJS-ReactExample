import type { FC } from "react";
import s from './FinalCard.module.css'
import { Button } from 'antd';
import type React from "react";

type FinalCardProps = {
    cancel?: () => void;
    title: React.ReactNode;
}

export const FinalCard: FC<FinalCardProps> = ({ cancel, title }) => {
    return(
    <div className={s.card}>
        {
            title
        }
        <Button color="primary" type='primary' onClick={cancel}>Завершить обучение</Button>
    </div>
    )
}