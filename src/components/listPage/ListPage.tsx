import { useState } from 'react';
import s from './ListPage.module.css';
import { Button, Transfer, type TransferProps } from 'antd';
import { guide } from '../../listScript';
import { InterGuide } from 'interguidejs';

import '../../../../InterGuideJS/dist/interguidejs.esm.css';

const GuideSystem = new InterGuide();

console.log(GuideSystem);

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

function ListPage() {
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);
  const [submittable, setSubmittable] = useState<boolean>(false);

  const activeGuide = () => {
    GuideSystem.activateGuide(guide);
  };

  const onChange: TransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
    setSubmittable(!!nextTargetKeys.length);
  };

  return (
    <div className={s.body} id="l-body">
      <Button color="primary" type="primary" onClick={activeGuide}>
        Активировать сценарий
      </Button>
      <div data-guide-id="list" style={{ width: 'fit-content' }}>
        <Transfer
          dataSource={mockData}
          titles={['Источник', 'Цель']}
          targetKeys={targetKeys}
          onChange={onChange}
          render={(item) => item.title}
        />
      </div>
      <Button data-guide-id="submit2" type="primary" htmlType="submit" disabled={!submittable}>
        Далее
      </Button>
    </div>
  );
}

export default ListPage;
