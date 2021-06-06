import React, { useEffect, useState } from 'react'
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { getMovieList } from '../../../../services/movie';

export default function MovieList() {
    const [movieList, setMovieList] = useState([]);
    const [cPage, setCPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await getMovieList(cPage, 8);
            setMovieList(res.data.data.datas);
            setTotal(res.data.data.total);
        })();
    }, [cPage])

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
            width: 80,
            render: (text) => (
                <Link to={`/admin/movielist/edit/id=${text.id}`}>编辑</Link>
            ),
        },
    ];

    return (
        <>
            <h2>影片列表</h2>
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
