// 点击某个电影评论进入的某一电影下的评论列表
import React, { useState, useEffect } from 'react';
import { InputNumber, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './index.less';
import global from '../../../../global';
import {getMovie} from '../../../../services/movie';
import { withRouter } from 'react-router';

export default function Comment(props) {
    const [movie, setMovie] = useState([]);
    const [visible, setVisible] = useState(false)
    const [commentList, setCommentList] = useState([]);
    const islogin = global.userInfo;
    const id = props.match.params.id;

    useEffect(() => {
        (async () => {
            const res = await getMovie(id);
            setMovie(res.data.data);
        })();
    }, [id])

    const onStarChange = (val) => {
        console.log(val)
    }

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
        if (islogin) {
            setVisible(true)
        } else {
            props.history.push({
                pathname: '/login',
                state: props.location.pathname
            });
        }
    }

    const {name, cover, sort, country, publishTime, star, desc} = movie;

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
                <p><EditOutlined /> <CreateCommentWrapper /> <Button size="small" onClick={() => setVisible(false)} disabled={!visible} >提交</Button></p>
                {visible && (
                    <div className="toggle">
                        <p>
                            评分：<InputNumber size="small" min={1} max={10} defaultValue={6} onChange={onStarChange} />
                        </p>
                        <textarea name="comment" id="" cols="80" rows="6" className="text"></textarea>
                    </div>
                )}

            </div>
            <div className="comment-list">
                <ul>
                    <li>
                        {comment({
                            user: 'nickk',
                            star: '8.9',
                            ctime: '2021/2/2 12:12:12',
                            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi, placeat magni earum dolor a error voluptatum unde eos ducimus, obcaecati, ratione asperiores sit ad quaerat corporis? Voluptates vitae facilis maiores provident laudantium ipsum asperiores magni, eveniet nam vero, debitis saepe, officia perferendis accusamus quia dicta. Voluptate, distinctio qui sed dolorum error quas debitis id cum doloremque quaerat deserunt quia eos! Ipsa nesciunt similique repellat laudantium nihil natus possimus blanditiis. Accusamus, soluta iste! Molestiae vitae odio corrupti laborum sapiente. Ab aut labore eius unde dignissimos fugiat vero sapiente necessitatibus numquam in fuga quas rem ratione quidem, distinctio dicta animi neque'
                        })}
                    </li>
                    <li>
                        {comment({
                            user: 'nickk',
                            star: '8.9',
                            ctime: '2021/2/2 12:12:12',
                            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi, placeat magni earum dolor a error voluptatum unde eos ducimus, obcaecati, ratione asperiores sit ad quaerat corporis? Voluptates vitae facilis maiores provident laudantium ipsum asperiores magni, eveniet nam vero, debitis saepe, officia perferendis accusamus quia dicta. Voluptate, distinctio qui sed dolorum error quas debitis id cum doloremque quaerat deserunt quia eos! Ipsa nesciunt similique repellat laudantium nihil natus possimus blanditiis. Accusamus, soluta iste! Molestiae vitae odio corrupti laborum sapiente. Ab aut labore eius unde dignissimos fugiat vero sapiente necessitatibus numquam in fuga quas rem ratione quidem, distinctio dicta animi neque'
                        })}
                    </li>
                    <li>
                        {comment({
                            user: 'nickk',
                            star: '8.9',
                            ctime: '2021/2/2 12:12:12',
                            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi, placeat magni earum dolor a error voluptatum unde eos ducimus, obcaecati, ratione asperiores sit ad quaerat corporis? Voluptates vitae facilis maiores provident laudantium ipsum asperiores magni, eveniet nam vero, debitis saepe, officia perferendis accusamus quia dicta. Voluptate, distinctio qui sed dolorum error quas debitis id cum doloremque quaerat deserunt quia eos! Ipsa nesciunt similique repellat laudantium nihil natus possimus blanditiis. Accusamus, soluta iste! Molestiae vitae odio corrupti laborum sapiente. Ab aut labore eius unde dignissimos fugiat vero sapiente necessitatibus numquam in fuga quas rem ratione quidem, distinctio dicta animi neque'
                        })}
                    </li>
                    <li>
                        {comment({
                            user: 'nickk',
                            star: '8.9',
                            ctime: '2021/2/2 12:12:12',
                            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi, placeat magni earum dolor a error voluptatum unde eos ducimus, obcaecati, ratione asperiores sit ad quaerat corporis? Voluptates vitae facilis maiores provident laudantium ipsum asperiores magni, eveniet nam vero, debitis saepe, officia perferendis accusamus quia dicta. Voluptate, distinctio qui sed dolorum error quas debitis id cum doloremque quaerat deserunt quia eos! Ipsa nesciunt similique repellat laudantium nihil natus possimus blanditiis. Accusamus, soluta iste! Molestiae vitae odio corrupti laborum sapiente. Ab aut labore eius unde dignissimos fugiat vero sapiente necessitatibus numquam in fuga quas rem ratione quidem, distinctio dicta animi neque'
                        })}
                    </li>
                </ul>
            </div>
        </div>
    )
}
