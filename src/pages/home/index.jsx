import React, { useState } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { Input } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import MovieList from './components/MovieList/index';
import Comment from './components/Comment/index';
import './index.less';

const { Search } = Input;

export default function Home() {
    const [isLogin, setIsLogin] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    const onSearch = (value) => {
        console.log(value)
    }

    const onLogout = () => {
        setIsLogin(false);
        window.localStorage.removeItem('islogin');
    }

    // 最新影评 card
    const CommentCard = ({ cover, comment, user, movieName, id, ...rest }) => {
        return (
            <>
                <img src={cover} />
                <div className="desc">
                    <p className="comment" onClick={() => rest.history.push(`/home/${id}`)} >{comment}</p>
                    <p className="footer">{user} 评 《 <span className="movie-name">{movieName}</span> 》</p>
                </div>
            </>
        )
    }
    const CpmmentCardWrapper = withRouter(CommentCard);

    // 最受欢迎 card
    const movieCard = ({ cover, star, id, ...rest }) => {
        return (
            <>
                <img src={cover} onClick={() => rest.history.push(`/home/${id}`)} />
                <span className="star">{star}</span>
            </>
        )
    }
    const movieCardWrapper = withRouter(movieCard);

    const Main = (props) => {
        return (
            <>
                <Search placeholder="搜索影片" onSearch={onSearch} style={{ width: 300, margin: "6px 0 20px 450px" }} className="search" />
                {/* 最新影评 */}
                <div className="lasted">
                    <div className="lasted-header">
                        <span className="subtitle">
                            最新影评
                        </span>
                        <Link to="/home/lasted" >
                            <RightOutlined style={{ color: '#6e6e6e' }} />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            {CpmmentCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/04/14/100352.99938324_1280X720X2.jpg',
                                movieName: '哆啦A梦：伴我同行2',
                                user: 'nick',
                                id: 1,
                                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vel expedita earum nam. Recusandae sunt molestias quis quaerat! Ipsum laboriosam quod, assumenda perspiciatis suscipit deserunt nisi animi porro provident enim sapiente tenetur excepturi sed deleniti amet. Sint, repudiandae quos ut, fuga fugit voluptatibus nesciunt, ducimus ipsam assumenda maxime animi iusto?'
                            })}
                        </li>
                        <li>
                            {CpmmentCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/04/14/100352.99938324_1280X720X2.jpg',
                                movieName: '哆啦A梦：伴我同行2',
                                user: 'nick',
                                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vel expedita earum nam. Recusandae sunt molestias quis quaerat! Ipsum laboriosam quod, assumenda perspiciatis suscipit deserunt nisi animi porro provident enim sapiente tenetur excepturi sed deleniti amet. Sint, repudiandae quos ut, fuga fugit voluptatibus nesciunt, ducimus ipsam assumenda maxime animi iusto?'
                            })}
                        </li>
                        <li>
                            {CpmmentCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/04/14/100352.99938324_1280X720X2.jpg',
                                movieName: '哆啦A梦：伴我同行2',
                                user: 'nick',
                                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vel expedita earum nam. Recusandae sunt molestias quis quaerat! Ipsum laboriosam quod, assumenda perspiciatis suscipit deserunt nisi animi porro provident enim sapiente tenetur excepturi sed deleniti amet. Sint, repudiandae quos ut, fuga fugit voluptatibus nesciunt, ducimus ipsam assumenda maxime animi iusto?'
                            })}
                        </li>
                        <li>
                            {CpmmentCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/04/14/100352.99938324_1280X720X2.jpg',
                                movieName: '哆啦A梦：伴我同行2',
                                user: 'nick',
                                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vel expedita earum nam. Recusandae sunt molestias quis quaerat! Ipsum laboriosam quod, assumenda perspiciatis suscipit deserunt nisi animi porro provident enim sapiente tenetur excepturi sed deleniti amet. Sint, repudiandae quos ut, fuga fugit voluptatibus nesciunt, ducimus ipsam assumenda maxime animi iusto?'
                            })}
                        </li>
                    </ul>
                </div>
                {/* 最受欢迎 */}
                <div className="favorite">
                    <div className="favorite-header">
                        <span className="subtitle">
                            最受欢迎
                        </span>
                        <Link to="/home/favorite">
                            <RightOutlined style={{ color: '#6e6e6e' }} />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            {movieCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/05/20/091102.74956843_1280X720X2.jpg',
                                star: '9.0',
                                id: 11
                            })}
                        </li>
                        <li>
                            {movieCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/05/20/091102.74956843_1280X720X2.jpg',
                                star: '8.2'
                            })}
                        </li>
                        <li>
                            {movieCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/05/20/091102.74956843_1280X720X2.jpg',
                                star: '9.0'
                            })}
                        </li>
                        <li>
                            {movieCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/05/20/091102.74956843_1280X720X2.jpg',
                                star: '9.0'
                            })}
                        </li>
                        <li>
                            {movieCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/05/20/091102.74956843_1280X720X2.jpg',
                                star: '9.0'
                            })}
                        </li>
                        <li>
                            {movieCardWrapper({
                                cover: 'http://img5.mtime.cn/mt/2021/05/20/091102.74956843_1280X720X2.jpg',
                                star: '9.0'
                            })}
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    const Lasted = () => {
        return MovieList('最新影评')
    };
    const Favorite = () => {
        return MovieList('最受欢迎')
    };

    return (
        <div className="home">
            <div className="header">
                <Link to="/home" className="title">电影点评网站</Link>
                <p className="header-right">
                    {isLogin ? (
                        <>
                            <span>hi, nick</span>
                            <span onClick={onLogout}>退出</span>
                            {isAdmin && <Link to="/admin" style={{ color: '#fff' }} >管理员后台</Link>}
                        </>
                    ) : (
                        <Link to="/login" style={{ color: '#fff' }}>登录</Link>
                    )}
                </p>
            </div>
            <div className="main">
                <Switch>
                    <Route path="/home/lasted" exact component={Lasted} />
                    <Route path="/home/favorite" exact component={Favorite} />
                    <Route path="/home/:id" exact component={Comment} />
                    <Route path="/home" exact component={Main} />
                </Switch>
            </div>
            {/* <div className="footer">
                电影点评网站的设计与开发研究
            </div> */}
        </div>
    )
}
