/* eslint-disable */
import { Fragment, useEffect, useState } from 'react';
import { PageHeader, Row, Col, Card, Space, Input, Skeleton, Result, Select, Form, message, Progress, Tag, Divider } from 'antd';
import jscookie from 'js-cookie'
import AdSense from 'react-adsense';

import api from '../service/api'
import PageViewDrawer from '../components/pageViewDrawer'
import loadingGIF from './../loading.gif'
import productList from '../productList'

import SignIN from '../components/sign'
import AddToCart from '../components/addtocart'

const { Meta } = Card;

function Home() {

    const [product, setProduct] = useState([])
    const [selectedproduct, setselectedproduct] = useState("0")
    const [loading, setLoading] = useState(true)
    const [_, setForceupdate] = useState(Number(new Date()))

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


    async function productType(e) {
        message.destroy()
        // message.loading("Please wait...", 0)
        setProduct([])
        setForceupdate(Number(new Date()))
        setLoading(true)
        setselectedproduct("0")
        let list = await api.ax_post({
            path: "/search",
            params: {
                type: "product",
                name: e
            }
        })
        message.destroy()
        message.destroy()
        setForceupdate(Number(new Date()))
        setProduct(list.return)
        setselectedproduct(e)
        setLoading(false)
    }

    return (
        <Fragment>
            {
                loading &&
                <>
                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: -10,
                            width: '110%',
                            position: "fixed",
                            marginLeft: -20,
                            marginRight: -20,
                            zIndex: 99
                        }}
                    >
                        <Progress percent={100} status="active" showInfo={false} />
                    </div>

                    <div
                        style={{
                            width: '110%',
                            position: "fixed",
                            top: "12%",
                        }}
                    >
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={8} xl={9} />
                            <Col xs={22} sm={20} md={10} lg={8} xl={8}>
                                <img src={loadingGIF} style={{ height: 250 }} />
                            </Col>
                        </Row>
                    </div>
                </>
            }
            {
                !loading &&
                <div>
                    <center>
                        <PageHeader
                            title="42-1"
                            style={{ borderBottom: "1px solid #e9e9e9", maxWidth: 1400, }}
                            extra={[
                                // <AddToCart />,
                                // <SignIN />,
                                <Input.Search
                                    placeholder={"Search Product Name"}
                                    allowClear
                                    enterButton
                                    style={{
                                        width: "100%",
                                        borderLeft: "none",
                                        borderRight: "none",
                                        borderTop: "none"
                                    }}
                                    onSearch={async (e) => {
                                        message.destroy()
                                        message.loading("Searching, Please wait...", 0)
                                        let list = await api.ax_post({
                                            path: "/search",
                                            params: {
                                                type: "search",
                                                name: e
                                            }
                                        })
                                        message.destroy()
                                        message.destroy()
                                        setProduct(list.return)
                                    }}
                                    size="middle"
                                />
                            ]}
                        />
                    </center>

                    <Space />

                    <div style={{ margin: 20, maxWidth: 1400, }}>
                        <Skeleton active loading={loading} />
                    </div>
                </div>
            }
            {
                !loading &&
                <>
                    {/* NOTE Searching */}
                    <center>
                        <Form
                            layout="vertical"
                            style={{
                                padding: 10,
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            <div
                                style={{ maxWidth: 1200, textAlign: "left" }}
                            >
                                <Divider orientation="left">Products</Divider>
                                {
                                    productList.map(e =>
                                        <Tag color={"green"} style={{ margin: 5 }}>
                                            <a onClick={() => productType(e.value)}>{e.title}</a>
                                        </Tag>
                                    )
                                }
                                <Divider />
                            </div>
                        </Form>
                        <AdSense.Google
                            client='ca-pub-4319664345109203'
                            slot='1314312404'
                            style={{
                                display: "inline-block",
                                width: window.innerWidth - 200,
                                height: 90
                            }}
                            layoutKey="-eo-29+1q-1j+dw"
                            format='fluid'
                        />
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
                                maxWidth: 1200,
                                marginBottom: 100
                            }}
                            hidden={product.length === 0 ? true : false}
                        >
                            {
                                product.map(ii =>
                                    <Col
                                        xs={12} sm={10} md={8} lg={6} xl={6}
                                        style={{ paddingTop: 10 }}
                                    >
                                        <Card
                                            title={
                                                ii.source === "startech" ? (
                                                    <img
                                                        src={"https://www.startech.com.bd/image/catalog/logo.png"}
                                                        style={{ height: 32, width: 85, float: "left" }}
                                                    />
                                                ) : ii.source === "ryanscomputers" ? (
                                                    <img
                                                        src={"https://www.ryanscomputers.com/assets/website/img/ryans-computers.svg"}
                                                        style={{ height: 32, width: 85, float: "left" }}
                                                    />
                                                ) : ""
                                            }
                                            style={{
                                                minHeight: 400,
                                                marginTop: 20,
                                                marginBottom: 20,
                                                overflow: "hidden"
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

                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    bottom: 44,
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
                                                    background: '#426184',
                                                    textAlign: 'right',
                                                    borderTop: '1px solid #fff'
                                                }}
                                            >
                                                <b style={{ color: "#fff" }}>Price: {ii.price}</b>
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
