import { trigger, state, style } from '@angular/animations';

export const Animations = [
  trigger('dialog', [
    state('true', style({
      opacity: 1,
      display: 'block',
      'z-index': 1000
    }))
  ]),
  trigger('overlay', [
    state('true', style({
      position: 'fixed',
      'z-index': 999,
      top: '-100px',
      left: 0,
      bottom: 0,
      right: 0,
      height: '125%',
      width: '100%',
      background: '#BCBCBC',
      opacity: 0.5,
      display: 'block'
    }))
  ])
];
