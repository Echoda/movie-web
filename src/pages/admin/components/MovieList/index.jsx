import React from 'react'
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';

export default function MovieList() {


    const dataSource = [
        {
            movieId: '1',
            name: '千与千寻',
            sort: '动漫',
            country: '日本',
            desc: '治愈动画',
            cover: '',
            cTime: '2021-2-2'
        },
        {
            id: '2',
            name: '借东西的艾莉小人',
            sort: '动漫',
            country: '日本',
            desc: 'desc',
            cover: '',
            cTime: '2021-2-2'
        },
    ];

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '类型',
            dataIndex: 'sort',
            key: 'sort',
        },
        {
            title: '国家',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: '上映时间',
            dataIndex: 'cTime',
            key: 'cTime',
        },
        {
            title: '操作',
            key: 'action',
            render: (text) => (
                <Space size="middle">
                    <Link to={`/admin/movielist/edit/id=${text.movieId}`}>编辑</Link>
                    <Link to={`/admin/movielist/comments/id=${text.movieId}`}>查看影评</Link>
                </Space>

            ),
        },
    ];

    return (
        <Table dataSource={dataSource} columns={columns} bordered/>
    )
}
