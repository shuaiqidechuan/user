import { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProList from '@ant-design/pro-list';
import { StatisticCard } from '@ant-design/pro-card';
import { Progress, Button, Typography, Space, Radio } from 'antd';
import styles from './index.less';

const { Divider } = StatisticCard;
const { Text } = Typography;

const dataSource = [
    {
        title: '烟台红富士苹果新鲜水果山东栖霞平果助农当季脆甜一级5 10斤包邮',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: '新鲜海鲜菇2斤食用菌菇蟹味菇白玉菇斑玉蕈香蘑菇真姬菇煲汤蔬菜',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: '云南现挖红心天山雪莲果净重10斤清甜水果 泡沫箱包装 村侠果蔬',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: '青海特产风干牦牛肉干内蒙古超干手撕耗牛肉干500g正宗麻辣零食',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
];

const checkGoods = () => {
    return (
        <>
            <PageContainer
                header={{
                    title: '查看商品',
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
                <StatisticCard.Group>
                    <StatisticCard
                        className={styles.statisticCard}
                        statistic={{
                            title: '商品数量',
                            value: 10,
                        }}
                    />
                    <Divider />
                    <StatisticCard
                        className={styles.statisticCard}
                        statistic={{
                            title: '活动商品',
                            value: 5,
                            status: 'processing',
                        }}
                    />
                    <Divider />
                    <StatisticCard
                        className={styles.statisticCard}
                        statistic={{
                            title: '无活动商品',
                            value: 5,
                            status: 'default',
                        }}
                    />
                </StatisticCard.Group>

                <ProList
                    toolBarRender={() => {
                        return (
                            <Radio.Group defaultValue="a" size="middle">
                                <Radio.Button value="a">全部</Radio.Button>
                                <Radio.Button value="b">活动中</Radio.Button>
                                <Radio.Button value="c">无活动</Radio.Button>
                            </Radio.Group>
                        );
                    }}
                    pagination={{
                        defaultPageSize: 10,
                        showSizeChanger: true,
                    }}
                    metas={{
                        title: {},
                        // description: {
                        //     render: () => {
                        //         return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
                        //     },
                        // },
                        avatar: {
                            render: () => (
                                <img
                                    width={46}
                                    height={46}
                                    alt="logo"
                                    src="https://www.upmedia.mg/upload/article/20200824113827561313.jpg"
                                />
                            ),
                        },
                        content: {
                            render: () => (
                                <div style={{
                                    minWidth: 720,
                                    display: 'flex',
                                }}>
                                    <div style={{
                                        flex: 1,
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        textAlign: 'center'
                                    }}>
                                        <Space direction="vertical">
                                            <Text type="secondary">价格</Text>
                                            <Text type="secondary">12</Text>
                                        </Space>
                                        <Space direction="vertical">
                                            <Text type="secondary">库存</Text>
                                            <Text type="secondary">123</Text>
                                        </Space>
                                        <Space direction="vertical">
                                            <Text type="secondary">折扣</Text>
                                            <Text type="secondary">8</Text>
                                        </Space>
                                        <Space direction="vertical">
                                            <Text type="secondary">活动开始时间</Text>
                                            <Text type="secondary">2022-01-01</Text>
                                        </Space>
                                    </div>
                                    <div style={{
                                        minWidth: 200,
                                    }}>
                                        <div>
                                            <div>活动名称</div>
                                            <Progress percent={80} />
                                        </div>
                                    </div>
                                </div>
                            ),
                        },
                        actions: {
                            render: () => {
                                return [<a key="init">编辑</a>, '下架'];
                            },
                        },
                    }}
                    split="true"
                    rowKey="title"
                    headerTitle="全部商品"
                    dataSource={dataSource} />
            </PageContainer>
        </>
    );
};

export default checkGoods