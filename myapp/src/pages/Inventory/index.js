import { PageContainer } from '@ant-design/pro-layout'
import { useIntl, FormattedMessage } from 'umi';
import { Button, message } from 'antd';
import ProForm, {
  ModalForm,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';



const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ture);
    }, time);
  })
}

const Inventory = () => {

  const intl = useIntl()
  return (
    <PageContainer
      header={{
        title: intl.formatMessage({
          id: 'pages.inventory.title',
          defaultMessage: 'pages.inventory.title',
        })
      }}
    >
       <ModalForm
      title="新建表单"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建表单
        </Button>
      }
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('提交成功');
        return true;
      }}
    >
    </ModalForm>
    </PageContainer >
    
  )
};

export default Inventory;