import {  type TabsProps, Tabs } from 'antd';

import "../../InterGuideJS/dist/interguidejs.esm.css"
import FullScriptPage from './components/fullScriptPage/FullScriptPage';
import CardsPage from './components/cardsPage/CardsPage';


const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Ознакомление с функционалом библиотеки',
    children: <FullScriptPage />,
  },
  {
    key: '2',
    label: 'Различные варианты карточек',
    children: <CardsPage />,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

function App() {
  

  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}

export default App
