import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import {Pagination} from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import './index.less';


function CommentList(){
    const commentCard = ({ cover, user, star, comment, time, id, ...rest }) => {
        return (
            <>
                <img src={cover} />
                <div className="desc">
                    <p><span className="nickname">{user}</span> <span className="time">{time}</span> </p>
                    <span className="star">{star}</span>
                    <p className="comment" onClick={() => rest.history.push(`/home/${id}`)}>{comment}</p>
                </div>
            </>
        )
    }
    const commentCardWrapper = withRouter(commentCard);

    return (
        <ul className="comment-list">
            <li>
                {commentCardWrapper({
                    cover: 'http://img5.mtime.cn/mt/2020/07/16/090830.63356219_1280X720X2.jpg',
                    user: 'nick',
                    star: '8.9',
                    time: '2021-2-2 10:12:09',
                    id: 2,
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit neque voluptatibus et adipisci maxime, repudiandae amet quisquam harum maiores cum rerum placeat soluta odit totam minus, ut dolor nulla ducimus eaque nesciunt quam autem voluptates sequi. Pariatur, eum impedit quo fuga adipisci, distinctio cupiditate ut, corporis autem laudantium excepturi quisquam aspernatur ipsa beatae. Ipsa rerum laborum, voluptas sunt earum non, magnam iusto facere nisi ullam sit fuga labore pariatur deleniti fugit voluptatem molestias in, quasi animi repellendus dolorum dolores. Voluptas cumque reiciendis repellat temporibus esse cupiditate quis fugiat culpa? Saepe eum aspernatur provident inventore fugiat repellat maxime magni vero odit architecto ipsum adipisci accusamus odio laudantium beatae est itaque quo ad, vel, maiores, voluptas reprehenderit temporibus facere et! Animi a similique exercitationem nobis. Maxime debitis similique dolorem blanditiis inventore perspiciatis doloremque ipsam laudantium sunt earum? Error laboriosam, enim quod consequuntur eligendi magnam laudantium odit aliquam na'
                })}
            </li>
            <li>
                {commentCardWrapper({
                    cover: 'http://img5.mtime.cn/mt/2020/07/16/090830.63356219_1280X720X2.jpg',
                    user: 'nick',
                    star: '8.9',
                    time: '2021-2-2 10:12:09',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit neque voluptatibus et adipisci maxime, repudiandae amet quisquam harum maiores cum rerum placeat soluta odit totam minus, ut dolor nulla ducimus eaque nesciunt quam autem voluptates sequi. Pariatur, eum impedit quo fuga adipisci, distinctio cupiditate ut, corporis autem laudantium excepturi quisquam aspernatur ipsa beatae. Ipsa rerum laborum, voluptas sunt earum non, magnam iusto facere nisi ullam sit fuga labore pariatur deleniti fugit voluptatem molestias in, quasi animi repellendus dolorum dolores. Voluptas cumque reiciendis repellat temporibus esse cupiditate quis fugiat culpa? Saepe eum aspernatur provident inventore fugiat repellat maxime magni vero odit architecto ipsum adipisci accusamus odio laudantium beatae est itaque quo ad, vel, maiores, voluptas reprehenderit temporibus facere et! Animi a similique exercitationem nobis. Maxime debitis similique dolorem blanditiis inventore perspiciatis doloremque ipsam laudantium sunt earum? Error laboriosam, enim quod consequuntur eligendi magnam laudantium odit aliquam na'
                })}
            </li>
            <li>
                {commentCardWrapper({
                    cover: 'http://img5.mtime.cn/mt/2020/07/16/090830.63356219_1280X720X2.jpg',
                    user: 'nick',
                    star: '8.9',
                    time: '2021-2-2 10:12:09',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit neque voluptatibus et adipisci maxime, repudiandae amet quisquam harum maiores cum rerum placeat soluta odit totam minus, ut dolor nulla ducimus eaque nesciunt quam autem voluptates sequi. Pariatur, eum impedit quo fuga adipisci, distinctio cupiditate ut, corporis autem laudantium excepturi quisquam aspernatur ipsa beatae. Ipsa rerum laborum, voluptas sunt earum non, magnam iusto facere nisi ullam sit fuga labore pariatur deleniti fugit voluptatem molestias in, quasi animi repellendus dolorum dolores. Voluptas cumque reiciendis repellat temporibus esse cupiditate quis fugiat culpa? Saepe eum aspernatur provident inventore fugiat repellat maxime magni vero odit architecto ipsum adipisci accusamus odio laudantium beatae est itaque quo ad, vel, maiores, voluptas reprehenderit temporibus facere et! Animi a similique exercitationem nobis. Maxime debitis similique dolorem blanditiis inventore perspiciatis doloremque ipsam laudantium sunt earum? Error laboriosam, enim quod consequuntur eligendi magnam laudantium odit aliquam na'
                })}
            </li>
            <li>
                {commentCardWrapper({
                    cover: 'http://img5.mtime.cn/mt/2020/07/16/090830.63356219_1280X720X2.jpg',
                    user: 'nick',
                    star: '8.9',
                    time: '2021-2-2 10:12:09',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit neque voluptatibus et adipisci maxime, repudiandae amet quisquam harum maiores cum rerum placeat soluta odit totam minus, ut dolor nulla ducimus eaque nesciunt quam autem voluptates sequi. Pariatur, eum impedit quo fuga adipisci, distinctio cupiditate ut, corporis autem laudantium excepturi quisquam aspernatur ipsa beatae. Ipsa rerum laborum, voluptas sunt earum non, magnam iusto facere nisi ullam sit fuga labore pariatur deleniti fugit voluptatem molestias in, quasi animi repellendus dolorum dolores. Voluptas cumque reiciendis repellat temporibus esse cupiditate quis fugiat culpa? Saepe eum aspernatur provident inventore fugiat repellat maxime magni vero odit architecto ipsum adipisci accusamus odio laudantium beatae est itaque quo ad, vel, maiores, voluptas reprehenderit temporibus facere et! Animi a similique exercitationem nobis. Maxime debitis similique dolorem blanditiis inventore perspiciatis doloremque ipsam laudantium sunt earum? Error laboriosam, enim quod consequuntur eligendi magnam laudantium odit aliquam na'
                })}
            </li>
            <li>
                {commentCardWrapper({
                    cover: 'http://img5.mtime.cn/mt/2020/07/16/090830.63356219_1280X720X2.jpg',
                    user: 'nick',
                    star: '8.9',
                    time: '2021-2-2 10:12:09',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit neque voluptatibus et adipisci maxime, repudiandae amet quisquam harum maiores cum rerum placeat soluta odit totam minus, ut dolor nulla ducimus eaque nesciunt quam autem voluptates sequi. Pariatur, eum impedit quo fuga adipisci, distinctio cupiditate ut, corporis autem laudantium excepturi quisquam aspernatur ipsa beatae. Ipsa rerum laborum, voluptas sunt earum non, magnam iusto facere nisi ullam sit fuga labore pariatur deleniti fugit voluptatem molestias in, quasi animi repellendus dolorum dolores. Voluptas cumque reiciendis repellat temporibus esse cupiditate quis fugiat culpa? Saepe eum aspernatur provident inventore fugiat repellat maxime magni vero odit architecto ipsum adipisci accusamus odio laudantium beatae est itaque quo ad, vel, maiores, voluptas reprehenderit temporibus facere et! Animi a similique exercitationem nobis. Maxime debitis similique dolorem blanditiis inventore perspiciatis doloremque ipsam laudantium sunt earum? Error laboriosam, enim quod consequuntur eligendi magnam laudantium odit aliquam na'
                })}
            </li>
            <li>
                {commentCardWrapper({
                    cover: 'http://img5.mtime.cn/mt/2020/07/16/090830.63356219_1280X720X2.jpg',
                    user: 'nick',
                    star: '8.9',
                    time: '2021-2-2 10:12:09',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit neque voluptatibus et adipisci maxime, repudiandae amet quisquam harum maiores cum rerum placeat soluta odit totam minus, ut dolor nulla ducimus eaque nesciunt quam autem voluptates sequi. Pariatur, eum impedit quo fuga adipisci, distinctio cupiditate ut, corporis autem laudantium excepturi quisquam aspernatur ipsa beatae. Ipsa rerum laborum, voluptas sunt earum non, magnam iusto facere nisi ullam sit fuga labore pariatur deleniti fugit voluptatem molestias in, quasi animi repellendus dolorum dolores. Voluptas cumque reiciendis repellat temporibus esse cupiditate quis fugiat culpa? Saepe eum aspernatur provident inventore fugiat repellat maxime magni vero odit architecto ipsum adipisci accusamus odio laudantium beatae est itaque quo ad, vel, maiores, voluptas reprehenderit temporibus facere et! Animi a similique exercitationem nobis. Maxime debitis similique dolorem blanditiis inventore perspiciatis doloremque ipsam laudantium sunt earum? Error laboriosam, enim quod consequuntur eligendi magnam laudantium odit aliquam na'
                })}
            </li>
        </ul>
    )
}

export default function MovieList(title) {
return (
    <div className="lasted-page">
        <p className="title">
            <Link to="/home">
                <LeftOutlined style={{color: '#333'}}/>
            </Link>
            <span>{title}</span>
        </p>
        {CommentList()}
        <Pagination defaultCurrent={1} total={50} style={{marginLeft: 200}} />
    </div>
)};