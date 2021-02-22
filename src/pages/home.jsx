/* eslint-disable */
import { Fragment, useEffect, useState } from 'react';
import { PageHeader, Row, Col, Card, Space, Input, Skeleton, Result, Select, Form, message, Progress, Tag, Divider, Menu, Dropdown, Button } from 'antd';
import jscookie from 'js-cookie'


import productList from '../productList'
import api from '../service/api'
import PageViewDrawer from '../components/pageViewDrawer'
import AmazonAssociates from '../components/amazonAssociates'
import GoogleAdSence from '../components/googleAdSense'

import loadingGIF from './../loading.gif'



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

    function menu(arr) {
        return <Menu>
            {arr.map((e, k) =>
                <Menu.Item key={k + 1} style={{ margin: 5 }}>
                    <a onClick={() => productType(e.value)}>{e.title}</a>
                </Menu.Item>
            )}
        </Menu>
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

                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            padding: '10px 16px',
                            textAlign: 'right',
                            borderTop: '1px solid #fff'
                        }}
                    >
                        <p style={{ color: "black", fontSize: 10 }}>v2.3.2</p>
                    </div>
                </>
            }
            {
                !loading &&
                <div>
                    <center>
                        <PageHeader
                            title="42-1"
                            subTitle={"Compare Your Product Price"}
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
                                style={{ maxWidth: 1200 }}
                            >
                                <Divider orientation="center">Products</Divider>
                                {
                                    productList.map(a =>
                                        <Dropdown overlay={() => menu(a.entry)} trigger={['click']}>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <Button type="primary" style={{ marginRight: 5 }}>{a.title}</Button>
                                            </a>
                                        </Dropdown>)
                                }
                                <Divider />
                            </div>
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

                        <GoogleAdSence />
                        <AmazonAssociates />

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
                                                        alt={ii.source}
                                                        style={{ height: 32, width: 85, float: "left" }}
                                                    />
                                                ) : ii.source === "ryanscomputers" ? (
                                                    <img
                                                        src={"https://www.ryanscomputers.com/assets/website/img/ryans-computers.svg"}
                                                        alt={ii.source}
                                                        style={{ height: 32, width: 85, float: "left" }}
                                                    />
                                                ) : ""
                                            }
                                            style={{
                                                minHeight: 460,
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
                                                    background: '#070707',
                                                    borderTop: '1px solid #fff'
                                                }}
                                            >
                                                <span style={{ color: "#fff" }}>Price: {ii.price}</span>
                                                <br />
                                                <span
                                                    style={{ color: "#fff" }}
                                                >
                                                    <a target="_blank" style={{ color: "#f1ffd0" }} href="https://www.startech.com.bd" >
                                                        Site:
                                                        {
                                                            ii.source === "startech" &&
                                                            String(" Startech")
                                                        }
                                                        {
                                                            ii.source === "ryanscomputers" &&
                                                            String(" Ryans Computers")
                                                        }
                                                    </a>
                                                </span>
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
