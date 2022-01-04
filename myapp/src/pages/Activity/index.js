import React, { useRef, useState } from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import ProForm, { ProFormRadio, ProFormField, ProFormDependency } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { useIntl } from 'umi';

const defaultData = [
    {
        id: '624748504',
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

    const [editableKeys, setEditableRowKeys] = useState(() => []);
    const [position, setPosition] = useState('bottom');
    const formRef = useRef();
    const columns = [
        {
            title: intl.formatMessage({
                id: 'pages.activity.title',
                defaultMessage: 'pages.activity.title',
            }),
            dataIndex: 'title',
            formItemProps: () => {
                return {
                    rules: [{
                        required: true, message: intl.formatMessage({
                            id: 'pages.activity.title',
                            defaultMessage: 'pages.activity.title',
                        }),
                    }],
                };
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
                all: {
                    title: intl.formatMessage({
                        id: 'pages.activity.all',
                        defaultMessage: 'pages.activity.all',
                    }),
                    status: 'Default'
                },
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
                    var _a, _b;
                    const tableDataSource = (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.getFieldValue('table');
                    (_b = formRef.current) === null || _b === void 0 ? void 0 : _b.setFieldsValue({
                        table: tableDataSource.filter((item) => item.id !== record.id),
                    });
                }}>
                    {del}
                </a>,
            ],
        },
    ];
    return (<ProForm formRef={formRef} initialValues={{
        table: defaultData,
    }}>
        <EditableProTable rowKey="id" maxLength={5} name="table" recordCreatorProps={position !== 'hidden'
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
                ]} />,
            ]} columns={columns} editable={{
                type: 'multiple',
                editableKeys,
                onChange: setEditableRowKeys,
            }} />
    </ProForm>);
};
