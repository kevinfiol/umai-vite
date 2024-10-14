import { m, mount } from 'umai';
import { Counter } from './Counter';
import { Input } from './Input';
import { Fragments } from './Fragments';
import './main.css';

const App = () => (
  m('div',
    m('h1', '🍜 umai vite starter'),
    m(Counter),
    Fragments(),
    m(Input),
  )
);

mount(document.getElementById('app'), App);

// @ts-ignore: Enable HMR
if (import.meta.hot) { import.meta.hot.accept(); }