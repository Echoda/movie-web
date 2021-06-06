// 点击某个电影评论进入的某一电影下的评论列表
import React, { useState, useEffect } from 'react';
import { InputNumber, Button, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './index.less';
import global from '../../../../global';
import { getMovie } from '../../../../services/movie';
import { getComments, createComments } from '../../../../services/comment';
import { withRouter } from 'react-router';
import {format} from 'date-fns';

export default function Comment(props) {
    const [movie, setMovie] = useState([]);
    const [visible, setVisible] = useState(false)
    const [commentList, setCommentList] = useState([]);
    const [comStar, setComStar] = useState('');
    const [comContent, setComContent] = useState('');
    const loginInfo = JSON.parse(window.localStorage.getItem('userInfo'));
    const userId = loginInfo.id;
    const movieId = props.match.params.id;

    useEffect(() => {
        (async () => {
            const res = await getMovie(movieId);
            setMovie(res.data.data);
            const comRes = await getComments(movieId);
            setCommentList(comRes.data.data.datas);
        })();
    }, [movieId])

    const comment = ({ user, star, ctime, comment }) => {
        return (
            <>
                <p>
                    <span className="user">{user}</span>
                        看过
                        <span className="star">{star}</span>
                    <span className="ctime">{ctime}</span>
                </p>
                <p className="comment">{comment}</p>
            </>
        )
    }

    const CreateComment = (props) => {
        return (
            <span className="write" onClick={() => { onClickCreate(props) }}>写影评</span>
        )
    }
    const CreateCommentWrapper = withRouter(CreateComment)

    const onClickCreate = (props) => {
        if (loginInfo) {
            setVisible(true)
        } else {
            props.history.push({
                pathname: '/login',
                state: props.location.pathname
            });
        }
    }

    const onSubmit = async () => {
        setVisible(false);
        console.log(comContent, comStar, 'movieId:', movieId, 'userId:', userId);
        try {
            await createComments(comContent, comStar, movieId, userId);
            message.success('提交成功')
        } catch {
            message.error('评论失败，请稍后重试');
        }
    }

    const onStarChange = (val) => {
        console.log(val)
        setComStar(val);
    }

    const onTextChange = (val) => {
        setComContent(val);
    }

    const { name, cover, sort, country, publishTime, star, desc } = movie;

    return (
        <div className="comment-page">
            <div className="movie">
                <p className="title">{name}</p>
                <div className="info">
                    <img src={cover} />
                    <p className="sort">类型：<span>{sort}</span></p>
                    <p className="country">制片国家、地区：<span>{country}</span></p>
                    <p className="ctime">上映时间：<span>{publishTime}</span></p>
                    <p className="star">评分：<span>{star || '暂无评分'}</span></p>
                    <p className="desc">简介：<span>{desc}</span></p>
                </div>
            </div>
            <div className="create-comment">
                <p><EditOutlined /> <CreateCommentWrapper /> <Button size="small" onClick={onSubmit} disabled={!visible} >提交</Button></p>
                {visible && (
                    <div className="toggle">
                        <p>
                            评分：<InputNumber size="small" min={1} max={10} defaultValue={6} onChange={onStarChange} />
                        </p>
                        <textarea name="comment" id="" cols="80" rows="6" className="text" onChange={(e) => onTextChange(e.target.value)}></textarea>
                    </div>
                )}

            </div>
            <div className="comment-list">
                <ul>
                    {commentList.map((it) => {
                        return (
                            <li key={it.username}>
                                {comment({
                                    user: it.username,
                                    star: it.star + '.0',
                                    ctime: format(new Date(it.createdAt), 'yyyy-MM-dd HH:mm:ss'),
                                    comment: it.content
                                })}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
