import React, { useState } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormMoney, ProFormUploadButton } from '@ant-design/pro-form';
import { Input, InputNumber, Button } from 'antd';
import styles from './index.less';

const onChange = (e) => {
  console.log('Change:', e.target.value);
};

const addGoods = () => {
  const [value, setValue] = React.useState('9999999');

  return (
    <>
      <PageContainer
        header={{
          title: '添加商品',
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
          <ProCard className={styles.option} gutter={[16, 16]}>
            <ProCard className={styles.title} colSpan="10%">
              商品标题
            </ProCard>
            <ProCard className={styles.content} colSpan="60%">
              <Input showCount maxLength={30} onChange={onChange} />
            </ProCard>
          </ProCard>
          <ProCard className={styles.option} gutter={[16, 16]}>
            <ProCard className={styles.title} colSpan="10%">
              商品轮播图
            </ProCard>
            <ProCard className={styles.content} colSpan="80%">
              <ProFormUploadButton
                name="upload"
                label="图片要求：宽高相等且大于480px，大小1M内。已上传0/10张"
                max={10}
                fieldProps={{
                  name: 'file',
                  listType: 'picture-card',
                }}
                action="/upload.do"
              />
            </ProCard>
          </ProCard>

          <ProCard className={styles.option} gutter={[16, 16]}>
            <ProCard className={styles.title} colSpan="10%">
              商品详情
            </ProCard>
            <ProCard className={styles.content} colSpan="80%">
              <ProFormUploadButton
                name="upload"
                label="图片要求：宽大于480px，大小1M内。已上传0/20张"
                max={20}
                fieldProps={{
                  name: 'file',
                  listType: 'picture-card',
                }}
                action="/upload.do"
              />
            </ProCard>
          </ProCard>

          <ProCard className={styles.option} gutter={[16, 16]}>
            <ProCard className={styles.title} colSpan="10%">
              商品规格
            </ProCard>
            <ProCard className={styles.content} colSpan="20%">
              <InputNumber min={1} max={1000000} value={value} onChange={setValue} />
            </ProCard>
          </ProCard>

          <ProCard className={styles.option} gutter={[16, 16]}>
            <ProCard className={styles.title} colSpan="10%">
              商品库存
            </ProCard>
            <ProCard className={styles.content} colSpan="20%">
              <InputNumber style={{ width: '100%' }} />
            </ProCard>
          </ProCard>

          <ProCard className={styles.option} gutter={[16, 16]}>
            <ProCard className={styles.title} colSpan="10%">
              商品价格
            </ProCard>
            <ProCard className={styles.content} colSpan="20%">
              <ProFormMoney name="amount2" locale="en-US" min={0} />
            </ProCard>
          </ProCard>
        </ProForm>
      </PageContainer>
    </>
  );
};

export default addGoods;
