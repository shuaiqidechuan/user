import { useState } from 'react';
import ReactQuill from 'react-quill';
import { Card } from 'antd';
import { PageContainer, FooterToolbar, ProBreadcrumb } from '@ant-design/pro-layout';
import ProForm from '@ant-design/pro-form';

import 'react-quill/dist/quill.snow.css';

const Brand = () => {
  const [value, setValue] = useState('');

  return (
    <PageContainer
      headerContentRender={() => <ProBreadcrumb />}
      header={{
        title: '品牌编辑',
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: 'home',
            },
            {
              path: '',
              breadcrumbName: 'goods',
            },
          ],
        },
      }}
    >
      <ProForm
        submitter={{
          render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
        }}
      >
        <Card>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </Card>
      </ProForm>
    </PageContainer>
  );
};

export default Brand;
