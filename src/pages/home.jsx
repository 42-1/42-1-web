/* eslint-disable */
import { Fragment, useEffect, useState } from 'react';
import { PageHeader, Row, Col, Card, Space, Input, Skeleton, Button, Result, Select, Form, message, Progress } from 'antd';
import jscookie from 'js-cookie'

import api from '../service/api'
import PageViewDrawer from '../components/pageViewDrawer'
import loadingGIF from './../loading.gif'

import SignIN from '../components/sign'
import AddToCart from '../components/addtocart'

const { Meta } = Card;

function Home() {

    const [product, setProduct] = useState([])
    const [selectedproduct, setselectedproduct] = useState("0")
    const [loading, setLoading] = useState(true)
    const [forceupdate, setForceupdate] = useState(Number(new Date()))

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
        // setLoading(false)
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
                            <Col
                                xs={0} sm={0} md={10} lg={9} xl={9}
                            />
                          
                            <Col
                                xs={24} sm={24} md={10} lg={8} xl={8}

                            >
                                <img src={loadingGIF} style={{height: 250}}/>
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
                            <Row
                                gutter={16}
                                style={{ maxWidth: 1200, textAlign: "left" }}
                            >
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
                                            value={selectedproduct}
                                            size="large"
                                            placeholder="Select Product Type"
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={async (e) => {
                                                message.destroy()
                                                message.loading("Please wait...", 0)
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
                                            }}
                                        >
                                            <Select.Option key="0" value="0" disabled>Select Product Type</Select.Option>
                                            <Select.Option key="1" value="headphone">Headphone</Select.Option>
                                            <Select.Option key="2" value="keyboards">Keyboards</Select.Option>
                                            <Select.Option key="3" value="micro-sd-card">Micro/SD card</Select.Option>
                                            <Select.Option key="4" value="microphone">Microphone</Select.Option>

                                            <Select.Option key="5" value="casing"> Casing </Select.Option>
                                            <Select.Option key="6" value="casing-cooler">Casing Cooler </Select.Option>
                                            <Select.Option key="7" value="power-supply">Power Supply </Select.Option>
                                            <Select.Option key="8" value="water-or-liquid-cooling"> Water or Liquid Cooling</Select.Option>
                                            <Select.Option key="9" value="processor">Processor </Select.Option>
                                            <Select.Option key="10" value="CPU-Cooler">CPU Cooler </Select.Option>
                                            <Select.Option key="11" value="motherboard"> Motherboard</Select.Option>
                                            <Select.Option key="12" value="graphics-card">Graphics Card </Select.Option>
                                            <Select.Option key="13" value="portable-hard-disk-drive">Portable Hard Disk Drive </Select.Option>
                                            <Select.Option key="14" value="hard-disk-drive">Hard Disk Drive </Select.Option>
                                            <Select.Option key="15" value="SSD-Hard-Disk"> SSD Hard Disk</Select.Option>
                                            <Select.Option key="16" value="ram">Ram </Select.Option>
                                            <Select.Option key="17" value="laptop-ram">Laptop Ram </Select.Option>
                                            <Select.Option key="18" value="portable-ssd-hard-disk">Portable SSD Hard Disk </Select.Option>
                                            <Select.Option key="19" value="sound-card">Sound Card </Select.Option>
                                            <Select.Option key="20" value="optical-hdd"> Optical Hdd</Select.Option>
                                            <Select.Option key="21" value="stabilizer"> Stabilizer</Select.Option>
                                            <Select.Option key="22" value="vertical-graphics-card-holder">Vertical Graphics Card Holder </Select.Option>
                                            <Select.Option key="23" value="monitor">Monitor </Select.Option>
                                            <Select.Option key="24" value="server-networking"> Server Networking</Select.Option>
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
