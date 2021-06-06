import React, { useState, useEffect } from 'react'
import { message, Table } from 'antd';
import { getUserList, deleteUser } from '../../../../services/user';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function MovieList() {
    const [userList, setUserList] = useState([]);
    const [cPage, setCPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        (async () => {
            await getUsers(cPage, 8);
        })();
    }, [cPage])

    const getUsers = async () => {
        const res = await getUserList(cPage, 8);
        setUserList(res.data.data.datas);
        setTotal(res.data.data.total);
    }

    const toDelete = async (id) => {
        try {
            await deleteUser(id);
            message.success('用户注销成功')
            getUsers(cPage, 8);
        } catch {
            message.error('用户注销失败')
        }
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => {
                return format(new Date(text), 'yyyy-MM-dd HH:mm:ss');
            }
        },
        {
            title: '操作',
            key: 'action',
            render: (text) => (
                <a onClick={() => toDelete(text.id)}>注销</a>

            ),
        },
    ];

    return (
        <>
            <h2>用户列表</h2>
            <Table
                dataSource={userList}
                columns={columns}
                pagination={{
                    total: total,
                    pageSize: 8,
                    onChange: (val) => {
                        setCPage(val);
                    }
                }}
                bordered
            />
        </>
    )
}
