import { interpolate } from 'interguidejs';
import type { GuideStep } from 'interguidejs/dist/types';
import s from './App.module.css';

export const guide: GuideStep[] = [
  {
    points: [
      {
        card: (control) =>
          interpolate`<div class="${s.card}">${control.poinstCount}/${control.pointNumber}</div>`,
        id: "[data-guide-id='test']",
        direction: 'bottomRight',
      },
    ],
  },
  {
    points: [
      {
        card: (control) =>
          interpolate`<div class="${s.card}">${control.poinstCount}/${control.pointNumber}</div>`,
        id: "[data-guide-id='test2']",
        direction: 'bottomRight',
      },
    ],
    /* nextStepElements: ["[data-guide-id='test3']"], */
  },
  {
    points: [
      {
        card: (control) =>
          interpolate`<div class="${s.card}">${control.poinstCount}/${control.pointNumber}</div>`,
        id: "[data-guide-id='test3']",
        direction: 'bottomRight',
      },
    ],
  },
];
