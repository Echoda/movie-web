import React from 'react'
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';

export default function MovieList() {


    const dataSource = [
        {
            userId: '1',
            name: 'nick',
            email: '111@qq.com',
            cTime: '2021-2-2'
        },
        {
            userId: '2',
            name: 'sunny',
            email: '222@qq.com',
            cTime: '2021-1-2'
        }
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '创建时间',
            dataIndex: 'cTime',
            key: 'cTime',
        },
        {
            title: '操作',
            key: 'action',
            render: (text) => (
                    <a>注销</a>

            ),
        },
    ];

    return (
        <Table dataSource={dataSource} columns={columns} bordered/>
    )
}
