import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { Input } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import MovieList from './components/MovieList/index';
import Comment from './components/Comment/index';
import './index.less';

import { getMovieList } from '../../services/movie';

const { Search } = Input;

export default function Home(props) {
    const [lastedMovieList, setLastedMovieList] = useState([])
    const [favoriteMovieList, setFavoriteMovieList] = useState([]);

    const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
    const [isLogin, setIsLogin] = useState(userInfo);
    const isAdmin = isLogin && userInfo.role === 'admin';

    useEffect(() => {
        (async () => {
            const lastedResult = await getMovieList(1, 6, '', 'createdAt');
            const favoriteResult = await getMovieList(1, 6, '', 'star');
            setLastedMovieList(lastedResult.data.data.datas);
            setFavoriteMovieList(favoriteResult.data.data.datas);
        })();
    }, [])

    const handleSearch = (value) => {
        props.history.push(`/home/search/${value}`)
    }

    const onLogout = () => {
        setIsLogin(false);
        window.localStorage.removeItem('userInfo');
    }

    // 最新 card
    const CommentCard = ({ cover, desc, country, movieName, id, ...rest }) => {
        return (
            <>
                <img src={cover} />
                <div className="desc">
                    <p className="comment" onClick={() => rest.history.push(`/home/${id}`)} >{desc}</p>
                    <p className="footer">{country} 《<span className="movie-name">{movieName}</span>》 </p>
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
                {/*最新推荐 */}
                <div className="lasted">
                    <div className="lasted-header">
                        <span className="subtitle">
                            最新推荐
                        </span>
                        <Link to="/home/lasted" >
                            <RightOutlined style={{ color: '#6e6e6e' }} />
                        </Link>
                    </div>
                    <ul>
                        {lastedMovieList.map((it) => {
                            return (
                                <li key={it.cover}>
                                    {CpmmentCardWrapper({
                                        cover: it.cover,
                                        movieName: it.name,
                                        country: it.country,
                                        id: it.id,
                                        desc: it.desc
                                    })}
                                </li>
                            )
                        })}
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
                        {favoriteMovieList.map((it) => {
                            return (
                                <li key={it.cover}>
                                    {movieCardWrapper({
                                        cover: it.cover,
                                        star: it.star,
                                        id: it.id
                                    })}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }

    const Lasted = () => {
        return MovieList('最新推荐')
    };
    const Favorite = () => {
        return MovieList('最受欢迎')
    };
    const SearchCom = (props) => {
        return MovieList('搜索', props)
    }

    return (
        <div className="home">
            <div className="header">
                <Link to="/home" className="title">电影点评网站</Link>
                <p className="header-right">
                    {isLogin ? (
                        <>
                            <span>hi, {userInfo.name}</span>
                            <span onClick={onLogout}>退出</span>
                            {isAdmin && <Link to="/admin/movielist" style={{ color: '#fff' }} >管理员后台</Link>}
                        </>
                    ) : (
                        <Link to="/login" style={{ color: '#fff' }}>登录</Link>
                    )}
                </p>
            </div>
            <div className="main">
                <Search placeholder="搜索影片" onSearch={(v) => handleSearch(v)} style={{ width: 300, margin: "6px 0 20px 450px" }} className="search" />
                <Switch>
                    <Route path="/home/lasted" exact component={Lasted} />
                    <Route path="/home/favorite" exact component={Favorite} />
                    <Route path="/home/search/:key" exact component={SearchCom} />
                    <Route path="/home/:id" exact component={Comment} />
                    <Route path="/home" exact component={Main} />
                </Switch>
            </div>
        </div>
    )
}
