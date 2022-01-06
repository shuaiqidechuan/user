import React, { useState } from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import { ProFormRadio, ProFormField } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { useIntl } from 'umi';

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};
const defaultData = [
    {
        id: 624748504,
        title: '活动名称一',
        decs: '这个活动真好玩',
        state: 'open',
        created_at: '2020-05-26T09:42:56Z',
        update_at: '2020-05-26T09:42:56Z',
    },
];
export default () => {

    const intl = useIntl()
    const del = intl.formatMessage({
        id: 'pages.activity.delete',
        defaultMessage: 'pages.activity.delete',
    })
    const edit = intl.formatMessage({
        id: 'pages.activity.edit',
        defaultMessage: 'pages.activity.edit',
    })

    const [editableKeys, setEditableRowKeys] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [position, setPosition] = useState('bottom');
    const columns = [
        {
            title: intl.formatMessage({
                id: 'pages.activity.title',
                defaultMessage: 'pages.activity.title',
            }),
            dataIndex: 'title',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 2 ? [{  required: true, message: intl.formatMessage({
                        id: 'pages.activity.title',
                        defaultMessage: 'pages.activity.title',
                    }), }] : [],
                };
            },
            editable: (text, record, index) => {
                return index !== 0;
            },
            width: '30%',
        },
        {
            title: intl.formatMessage({
                id: 'pages.activity.state',
                defaultMessage: 'pages.activity.state',
            }),
            key: 'state',
            dataIndex: 'state',
            valueType: 'select',
            valueEnum: {
                title: intl.formatMessage({
                    id: 'pages.activity.all',
                    defaultMessage: 'pages.activity.all',
                }),
                open: {
                    text: intl.formatMessage({
                        id: 'pages.activity.ended',
                        defaultMessage: 'pages.activity.ended',
                    }),
                    status: 'Error',
                },
                closed: {
                    text: intl.formatMessage({
                        id: 'pages.activity.ongoing',
                        defaultMessage: 'pages.activity.ongoing',
                    }),
                    status: 'Success',
                },
            },
        },
        {
            title: intl.formatMessage({
                id: 'pages.activity.describe',
                defaultMessage: 'pages.activity.describe',
            }),
            dataIndex: 'decs',
        },
        {
            title: intl.formatMessage({
                id: 'pages.activity.time',
                defaultMessage: 'pages.activity.time',
            }),
            dataIndex: 'created_at',
            valueType: 'date',
        },
        {
            title: intl.formatMessage({
                id: 'pages.activity.option',
                defaultMessage: 'pages.activity.option',
            }),
            valueType: 'option',
            width: 200,
            render: (text, record, _, action) => [
                <a key="editable" onClick={() => {
                        var _a;
                        (_a = action === null || action === void 0 ? void 0 : action.startEditable) === null || _a === void 0 ? void 0 : _a.call(action, record.id);
                    }}>
          {edit}
        </a>,
                <a key="delete" onClick={() => {
                        setDataSource(dataSource.filter((item) => item.id !== record.id));
                    }}>
          {del}
        </a>,
            ],
        },
    ];
    return (<>
      <EditableProTable rowKey="id" headerTitle="可编辑表格" maxLength={5} recordCreatorProps={position !== 'hidden'
            ? {
                position: position,
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
            }
            : false} toolBarRender={() => [
            <ProFormRadio.Group key="render" fieldProps={{
                    value: position,
                    onChange: (e) => setPosition(e.target.value),
                }} options={[
                    {
                        label: intl.formatMessage({
                            id: 'pages.activity.addtop',
                            defaultMessage: 'pages.activity.addtop',
                        }),
                        value: 'top',
                    },
                    {
                        label: intl.formatMessage({
                            id: 'pages.activity.addbottom',
                            defaultMessage: 'pages.activity.addbottom',
                        }),
                        value: 'bottom',
                    },
                    {
                        label: intl.formatMessage({
                            id: 'pages.activity.hidden',
                            defaultMessage: 'pages.activity.hidden',
                        }),
                        value: 'hidden',
                    },
                ]}/>,
        ]} columns={columns} request={async () => ({
            data: defaultData,
            total: 3,
            success: true,
        })} value={dataSource} onChange={setDataSource} editable={{
            type: 'multiple',
            editableKeys,
            onSave: async (rowKey, data, row) => {
                console.log(rowKey, data, row);
                await waitTime(2000);
            },
            onChange: setEditableRowKeys,
        }}/>
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField ignoreFormItem fieldProps={{
            style: {
                width: '100%',
            },
        }} mode="read" valueType="jsonCode" text={JSON.stringify(dataSource)}/>
      </ProCard>
    </>);
};