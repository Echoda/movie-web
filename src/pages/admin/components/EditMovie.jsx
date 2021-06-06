import React, { useEffect, useState } from 'react'
import { Form, Input, Button, message } from 'antd';
import { getMovie, updateMovie, addMovie } from '../../../services/movie';

export default function EditMovie(props) {
    const [movieInfo, setMovieInfo] = useState({});
    const [form] = Form.useForm();
    const movieId = props.match.params.id;

    useEffect(() => {
        movieId && (async () => {
            const res = await getMovie(movieId);
            setMovieInfo(res.data.data);
        })();
    }, [movieId])

    const { name, sort, cover, country, desc, publishTime } = movieInfo;
    movieInfo && form.setFieldsValue({
        name,
        sort,
        cover,
        country,
        desc,
        publishTime
    })

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = async (values: any) => {
        try {
            if (movieId) {
                await updateMovie(movieId, values);
            } else {
                await addMovie(values);
            }
            message.success(movieId ? '编辑成功' : '新建成功');
            props.history.goBack();
        } catch {
            message.error(movieId ? '编辑失败' : '新建失败')
        }
    };

    return (
        <div>
            <Form {...layout} form={form} onFinish={onFinish} style={{ paddingRight: 300 }} >
                <Form.Item name="name" label="名称">
                    <Input />
                </Form.Item>
                <Form.Item name="sort" label="类型">
                    <Input />
                </Form.Item>
                <Form.Item name="country" label="国家">
                    <Input />
                </Form.Item>
                <Form.Item name="publishTime" label="上映时间">
                    <Input />
                </Form.Item>
                <Form.Item name="cover" label="封面">
                    <Input />
                </Form.Item>
                <Form.Item name="desc" label="简介">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
                        保存
                    </Button>
                    <Button type="primary" onClick={() => props.history.goBack()}>
                        取消
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
