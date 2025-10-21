import { useEffect, useState } from 'react';
import s from './FormPage.module.css';
import { Button, Radio, Form, Input } from 'antd';
import { guide } from '../../formScript';
import { InterGuide } from 'interguidejs';

import '../../../../InterGuideJS/dist/interguidejs.esm.css';

const GuideSystem = new InterGuide();

console.log(GuideSystem);

function FormPage() {
  const [form] = Form.useForm();

  const [name, setName] = useState<string>('');
  const [submittable, setSubmittable] = useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const [type, setType] = useState(0);
  const activeGuide = () => {
    GuideSystem.activateGuide(guide(type));
  };

  return (
    <div className={s.body} id="f-body">
      <Radio.Group
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={[
          { value: 0, label: 'Атрибуты' },
          { value: 1, label: 'Area атрибуты' },
          { value: 2, label: 'Элементы' },
          { value: 3, label: 'Комбинирование' },
        ]}
      />
      <Button color="primary" type="primary" onClick={activeGuide}>
        Активировать сценарий
      </Button>
      <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input
            data-name={name}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            data-guide-id="name"
          />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <Input data-guide-id="age" />
        </Form.Item>
        <Form.Item>
          <Button data-guide-id="submit" type="primary" htmlType="submit" disabled={!submittable}>
            Submit
          </Button>
        </Form.Item>
        {submittable && <div data-result="done">Форма заполнена!</div>}
      </Form>
    </div>
  );
}

export default FormPage;
