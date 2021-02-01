import { Fragment, useEffect, useState } from 'react';
import { PageHeader, Row, Col, Card, Space, Input, Skeleton, Button, Result, Select, Form, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons'
import api from '../service/api'

const { Meta } = Card;

function Home() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductAll()
    }, [])

    async function getProductAll() {
        setLoading(true)
        let list = await api.ax_get({ path: "/list" })
        if (list.status) {
            setProduct(list.return)
        }
        setLoading(false)
    }

    return (
        <Fragment>
            <PageHeader
                title="Shop 421"
                style={{ borderBottom: "1px solid black" }}
            />

            <Space />

            <Skeleton loading={loading}>
                <Form layout="vertical" style={{ padding: 20 }}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Search">
                                <Input
                                    placeholder={"Search Product Name"}
                                    style={{
                                        width: "100%",
                                    }}
                                    onChange={async (e) => {
                                        let list = await api.ax_post({
                                            path: "/search",
                                            params: {
                                                type: "search",
                                                name: e.target.value
                                            }
                                        })
                                        setProduct(list.return)
                                    }}
                                    size="large"
                                />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item label="Product Type">
                                <Select
                                    size="large"
                                    placeholder="Select Product Type"
                                    style={{
                                        width: "100%",
                                    }}
                                    onChange={async (e) => {
                                        message.destroy()
                                        message.loading("Please wait...", 0)
                                        let list = await api.ax_post({
                                            path: "/search",
                                            params: {
                                                type: "product",
                                                name: e
                                            }
                                        })
                                        message.destroy()
                                        message.destroy()
                                        setProduct(list.return)
                                    }}
                                >
                                    <Select.Option key="1" value="headphone">Headphone</Select.Option>
                                    <Select.Option key="2" value="keyboards">Keyboards</Select.Option>
                                    <Select.Option key="3" value="micro-sd-card">Micro/SD card</Select.Option>
                                    <Select.Option key="4" value="microphone">Microphone</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

                {
                    product.length === 0 &&
                    <Result
                        status="warning"
                        title="No Product Found"
                    />
                }
                <center>
                    <Row
                        gutter={24}
                        style={{
                            marginRight: 0,
                            marginLeft: 0,
                            paddingTop: 10,
                            paddingLeft: 5,
                            paddingRight: 5,
                        }}
                        hidden={product.length === 0 ? true : false}
                    >
                        {
                            product.map(ii =>
                                <Col
                                    xs={20} sm={16} md={4} lg={4} xl={4}
                                    style={{ paddingTop: 10 }}
                                >
                                    <Card
                                        title={"Startech"}
                                        style={{ minHeight: 550, marginTop: 20, width: 240 }}
                                        cover={<img style={{ padding: 8, width: 200, height: 200 }} alt="aaxx" src={ii.img} />}
                                        extra={[
                                            <Button
                                                type="primary"
                                                icon={<LinkOutlined />}
                                                onClick={() => window.open(ii.url, "_blank")}
                                            />
                                        ]}
                                        onClick={() => window.open(ii.url, "_blank")}
                                    >

                                        <b>{ii.name}</b>
                                        <Meta style={{ marginTop: 5 }} description={ii.details} />

                                        <div
                                            style={{
                                                position: 'absolute',
                                                right: 0,
                                                bottom: 0,
                                                width: '100%',
                                                padding: '10px 16px',
                                                background: '#fff',
                                                textAlign: 'right',
                                                borderTop: '1px solid black'
                                            }}
                                        >
                                            <h3>
                                                <b>Price: {ii.price}</b>
                                            </h3>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </center>
            </Skeleton>
        </Fragment>
    );
}

export default Home;
