/* eslint-disable */
import { Fragment, useEffect, useState } from 'react';
import { PageHeader, Row, Col, Card, Space, Input, Skeleton, Button, Result, Select, Form, message } from 'antd';
import jscookie from 'js-cookie'

import api from '../service/api'
import PageViewDrawer from '../components/pageViewDrawer'
import SignIN from '../components/sign'
import AddToCart from '../components/addtocart'

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


    async function addForCart({ details }) {

        let userid = jscookie.get("userid")
        await api.ax_post({
            path: "/addtocart", params: {
                userid,
                details
            }
        })

        message.destroy()
        message.info("Add To Cart")
    }

    return (
        <Fragment>
            <center>
                <PageHeader
                    title="42-1"
                    style={{ borderBottom: "1px solid white", maxWidth: 1400, }}
                    extra={[
                        <AddToCart />,
                        <SignIN />,
                    ]}
                />

                <Space />

                <div style={{ margin: 20,  maxWidth: 1400, }}>
                    <Skeleton active loading={loading} />
                </div>
            </center>

            {
                !loading &&
                <>
                    {/* NOTE Searching */}
                    <center>
                        <Form layout="vertical" style={{ padding: 10 }}>
                            <Row gutter={16} style={{ maxWidth: 1400 }}>
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


                    {/* NOTE No Product Found */}
                    {
                        product.length === 0 &&
                        <Result
                            status="warning"
                            title="No Product Found"
                        />
                    }

                    {/* NOTE Product Details */}
                    <center>
                        <Row
                            gutter={24}
                            style={{
                                marginLeft: 0,
                                marginRight: 0,
                                paddingTop: 10,
                                maxWidth: 1400,
                                marginBottom: 100
                            }}
                            hidden={product.length === 0 ? true : false}
                        >
                            {
                                product.map(ii =>
                                    <Col
                                        xs={12} sm={12} md={12} lg={8} xl={4}
                                        style={{ paddingTop: 10 }}
                                    >
                                        <Card
                                            title={
                                                ii.source === "startech" &&
                                                <img
                                                    src={"https://www.startech.com.bd/image/catalog/logo.png"}
                                                    style={{ height: 32, width: 85, float: "left" }}
                                                />
                                            }
                                            style={{
                                                minHeight: 550,
                                                marginTop: 20,
                                                marginBottom: 20,
                                            }}
                                            cover={
                                                <img
                                                    style={{
                                                        padding: 8,
                                                        width: 120,
                                                        height: 120,
                                                        marginTop: 5
                                                    }}
                                                    alt={ii.name}
                                                    src={ii.img}
                                                />
                                            }
                                        >

                                            <b>{ii.name}</b>
                                            <Meta style={{ marginTop: 5 }} description={ii.details} />

                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 65,
                                                    width: '100%',
                                                    marginBottom: 2
                                                }}
                                            >
                                                <Button
                                                    type="primary"
                                                    size="small"
                                                    block
                                                    disabled={!jscookie.get("userid")}
                                                    onClick={() => addForCart({ details: ii })}
                                                >
                                                   { jscookie.get("userid") ? "Add to Cart" : "Login Required"}
                                                </Button>
                                            </div>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 42,
                                                    width: '100%',
                                                }}
                                            >
                                                <PageViewDrawer pageView={ii.url} />
                                            </div>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 0,
                                                    width: '100%',
                                                    padding: '10px 16px',
                                                    background: '#cdcdcd',
                                                    textAlign: 'right',
                                                    borderTop: '1px solid #cdcdcd'
                                                }}
                                            >
                                                <b>Price: {ii.price}</b>
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
