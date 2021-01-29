import { Fragment, useEffect, useState } from 'react';
import { PageHeader, Row, Col, Card, Space, Input, Skeleton, Button, Result, Select, Form } from 'antd';
import { UnorderedListOutlined, LinkOutlined } from '@ant-design/icons'
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
                                        let list = await api.ax_post({
                                            path: "/search",
                                            params: {
                                                type: "product",
                                                name: e
                                            }
                                        })
                                        setProduct(list.return)
                                    }}
                                >
                                    <Select.Option key="1" value="headphone">Headphone</Select.Option>
                                    <Select.Option key="2" value="keyboards">Keyboards</Select.Option>
                                    <Select.Option key="3" value="micro-sd-card">Micro/SD card</Select.Option>
                                    <Select.Option key="4" value="microphone">Microphone</Select.Option>
                                    <Select.Option key="5" value="headphone">Headphone</Select.Option>
                                    <Select.Option key="6" value="headphone">Headphone</Select.Option>
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



                <Row
                    gutter={24}
                    style={{
                        marginTop: 2,
                        marginRight: 0,
                        marginLeft: 0,
                        padding: 10
                    }}
                    hidden={product.length === 0 ? true : false}
                >
                    {
                        product.map(ii =>
                            <Col
                                xs={24} sm={24} md={24} lg={24} xl={4}
                                style={{ paddingTop: 10, paddingLeft: 30, paddingRight: 30 }}
                            >
                                <Card
                                    title={"Startech"}
                                    style={{ minHeight: 600, marginTop: 20 }}
                                    cover={<img style={{ zIndex: 10, padding: 20 }} alt="aaxx" src={ii.img} />}
                                    extra={[
                                        <Button
                                            type="primary"
                                            icon={<LinkOutlined />}
                                            onClick={() => {
                                                window.open(ii.url, "_blank")
                                            }}
                                        />
                                    ]}
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
            </Skeleton>
        </Fragment>
    );
}

export default Home;
