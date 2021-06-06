import React, { useEffect, useState } from 'react'
import { Table, Button, Space, message } from 'antd';
import { Link } from 'react-router-dom';
import { deleteMovie, getMovieList } from '../../../../services/movie';

export default function MovieList(props) {
    const [movieList, setMovieList] = useState([]);
    const [cPage, setCPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        (async () => {
            await getMovies(cPage, 8);
        })();
    }, [cPage])

    const getMovies = async (page, limit) => {
        const res = await getMovieList(page, limit);
        setMovieList(res.data.data.datas);
        setTotal(res.data.data.total);
    }

    const toDelete = async (id) => {
        try {
            await deleteMovie(id);
            message.success('删除成功')
            await getMovies(cPage, 8);

        } catch {
            message.error('删除失败')
        }
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: 50,
        },
        {
            title: '影片名称',
            dataIndex: 'name',
            key: 'name',
            width: 150
        },
        {
            title: '类型',
            dataIndex: 'sort',
            key: 'sort',
            width: 100
        },
        {
            title: '国家',
            dataIndex: 'country',
            key: 'country',
            width: 100
        },
        {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
            ellipsis: true,
        },
        {
            title: '上映时间',
            dataIndex: 'publishTime',
            key: 'publishTime',
            width: 150
        },
        {
            title: '操作',
            key: 'action',
            width: 120,
            render: (text) => (
                <Space>
                    <Link to={`/admin/movielist/${text.id}`}>编辑</Link>
                    <a onClick={() => toDelete(text.id)}>删除</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <h2>影片列表</h2>
            <Button type="primary" onClick={() => props.history.push('/admin/movielist/add')} style={{ marginBottom: 10 }}>新建</Button>
            <Table
                dataSource={movieList}
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
