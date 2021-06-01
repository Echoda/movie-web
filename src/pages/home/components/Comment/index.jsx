// 点击某个电影评论进入的某一电影下的评论列表
import React from 'react';
import { InputNumber, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './index.less';

export default function index() {

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

    return (
        <div className="comment-page">
            <div className="movie">
                <p className="title">潜艇总动员：地心游记</p>
                <div className="info">
                    <img src="http://img5.mtime.cn/mt/2021/01/29/160259.71072536_1280X720X2.jpg" alt="" />
                    <p className="sort">类型：<span>冒险</span></p>
                    <p className="country">制片国家、地区：<span>欧美</span></p>
                    <p className="ctime">上映时间：<span>2021</span></p>
                    <p className="star">评分：<span>8.2</span></p>
                    <p className="desc">简介：<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, inventore eius maxime dolorem delectus voluptas eos, iusto quae corporis possimus temporibus totam a tenetur aperiam. Voluptate, voluptas quam. Debitis praesentium distinctio expedita? Iste excepturi esse minima expedita! Tempore reiciendis aut maxime doloremque a iusto excepturi atque dolorem consequatur, sed officia. Tempora quos, et, voluptate deleniti, reprehenderit beatae nemo nam tenetur minus nisi sapiente ratione? Placeat rem iusto ducimus rerum temporibus est. Similique error at blanditiis possimus fuga corporis ab doloremque sapiente delectus? Inventore ducimus unde, cum laborum ab repellat obcaecati magni suscipit earum quia magnam praesentium dicta velit qui error, non debitis totam libero, quasi temporibus. Officia doloremque dicta similique distinctio dolorum tempora corrupti iusto reprehenderit eius exercitationem quidem odio nisi quasi natus, eos nam. Repudiandae placeat, similique amet, at aut ipsam esse ratione repellendus libero enim accusamus minima non quo reiciendis rem nulla ipsum illo. Modi possimus ipsum officia exercitationem! Dolore quam consequuntur officiis illo, a minima repellendus voluptatibus nesciunt odio asperiores rerum sit voluptatum fuga blanditiis fugiat minus sunt cum dolor commodi provident, omnis esse molestiae? Dolorem inventore eligendi illo provident natus nihil obcaecati similique pariatur nostrum! At, rem nisi amet dolorum sequi blanditiis labore! Aspernatur, unde quia!</span></p>
                </div>
            </div>
            <div className="create-comment">
                <p><EditOutlined /> <span className="write">写影评</span> <Button size="small">提交</Button></p>
                <div className="toggle">
                    <p>
                        评分：<InputNumber size="small" min={1} max={10} defaultValue={6} onChange={onStarChange} />
                    </p>
                    <textarea name="comment" id="" cols="80" rows="6" className="text"></textarea>
                </div>
                
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
