import {  type TabsProps, Tabs } from 'antd';

import "../../InterGuideJS/dist/interguidejs.esm.css"
import FullScriptPage from './components/fullScriptPage/FullScriptPage';
import CardsPage from './components/cardsPage/CardsPage';
import FormPage from './components/formPage/FormPage';
import ListPage from './components/listPage/ListPage';


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
    label: 'Форма',
    children: <FormPage />,
  },
  {
    key: '4',
    label: 'Списки',
    children: <ListPage />,
  },
];

function App() {
  

  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}

export default App
