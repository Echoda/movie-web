// 点击 最新/最受欢迎 进入的列表页
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Pagination } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { getMovieList } from '../../../../services/movie';
import './index.less';


function CommentList(list) {
    const commentCard = ({ name, cover, sort, star, country, publishTime, desc, id, ...rest }) => {
        return (
            <div className="movie">
                <p className="title">{name}</p>
                <div className="info">
                    <img src={cover} onClick={() => rest.history.push(`/home/${id}`)}/>
                    <p className="sort">类型：<span>{sort}</span></p>
                    <p className="country">制片国家、地区：<span>{country}</span></p>
                    <p className="ctime">上映时间：<span>{publishTime}</span></p>
                    <p className="star">评分：<span>{star || '暂无评分'}</span></p>
                    <p className="desc">简介：<span>{desc}</span></p>
                </div>
            </div>
        )
    }
    const commentCardWrapper = withRouter(commentCard);

    return (
        <ul className="comment-list">
            {list.map((it) => {
                return (
                    <li key={it.name}>
                        {commentCardWrapper({
                            name: it.name,
                            cover: it.cover,
                            sort: it.sort,
                            star: it.star,
                            country: it.country,
                            publishTime: it.publishTime,
                            desc: it.desc,
                            id: it.id,
                        })}
                    </li>
                )
            })}
        </ul>
    )
}

export default function MovieList(title) {

    const [list, setList] = useState([]);
    const [cPage, setCPage] = useState(1);
    const [total, setTotal] = useState(0);
    const order = title === '最近上映' ? 'createdAt' : 'star';

    useEffect(() => {
        (async () => {
            const res = await getMovieList(cPage, 6, '', order);
            setList(res.data.data.datas);
            setTotal(res.data.data.total);
            console.log(total, 'total')
        })();
    }, [cPage, order])

    return (
        <div className="lasted-page">
            <p className="title">
                <Link to="/home">
                    <LeftOutlined style={{ color: '#333' }} />
                </Link>
                <span>{title}</span>
            </p>
            {CommentList(list)}
            <Pagination 
            showLessItems={true} 
            defaultCurrent={1}
            total={total} 
            style={{ marginLeft: 200 }} 
            onChange={(page) => setCPage(page)}
            pageSize={6}
             />
        </div>
    )
};