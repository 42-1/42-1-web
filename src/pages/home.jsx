import { Fragment, useEffect, useState } from 'react';
import { PageHeader, Row, Col, Card, Space, Input, Skeleton, Button, Result, Select, Form, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons'
import api from '../service/api'
import PageViewDrawer from '../components/pageViewDrawer'

const { Meta } = Card;

function Home() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductAll()
    }, [])

    async function getProductAll() {
        setLoading(true)
        setProduct([])
        let list = await api.ax_get({ path: "/list" })
        if (list.status) {
            setProduct(list.return)
        }
        setLoading(false)
    }

    return (
        <Fragment>
            <PageHeader
                title="42-1"
                style={{ borderBottom: "1px solid black" }}
            />

            <Space />

            <div style={{ margin: 20 }}>
                <Skeleton active loading={loading} />
            </div>
            
            {
                !loading &&
                <>
                    <center>
                        <Form layout="vertical" style={{ padding: 10 }}>
                            <Row gutter={16} style={{ maxWidth: 1600 }}>
                                <Col
                                    xs={24} sm={24} md={12} lg={12} xl={12}
                                >
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

                                <Col
                                    xs={24} sm={24} md={12} lg={12} xl={12}
                                >
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
                                                setProduct([])
                                                setLoading(true)
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
                                                setLoading(false)
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
                    </center>

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
                                marginLeft: 0,
                                marginRight: 0,
                                paddingTop: 10,
                                maxWidth: 1600
                            }}
                            hidden={product.length === 0 ? true : false}
                        >
                            {
                                product.map(ii =>
                                    <Col
                                        xs={24} sm={12} md={12} lg={8} xl={4}
                                        style={{ paddingTop: 10 }}
                                    >
                                        <Card
                                            title={<img src={"https://www.startech.com.bd/image/catalog/logo.png"} style={{ height: 40, width: 70, float: "left" }} />}
                                            style={{ minHeight: 550, marginTop: 20 }}
                                            cover={
                                                <img 
                                                    style={{ padding: 8, width: 180, height: 180 }} 
                                                    alt={ii.name} 
                                                    src={ii.img} 
                                                    onClick={() => window.open(ii.url, "_blank")}
                                                />
                                            }
                                            extra={[
                                                <PageViewDrawer pageView={ii.url}/>
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
                                                    background: '#cdcdcd',
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
                </>
            }

        </Fragment>
    );
}

export default Home;
