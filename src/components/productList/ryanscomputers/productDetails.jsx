/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PgHeader from './PgHeader'
import api from '../../../service/api'
import { Row, Col, Card, Button, Result, Divider } from 'antd';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import data from './startech/data'

const html_header = data.header;
const html_body_0 = data.body_0;
const html_body_1 = data.body_1;
const html_body_2 = data.body_2;
const html_footer = data.footer;

export default function ProductDetails() {

    let { id } = useParams();
    const [details, setDetails] = useState({})
    const [isnotfound, setIsnotfound] = useState(false)

    useEffect(() => {
        getDetails()
    }, [])


    async function getDetails() {
        let a = await api.ax_post({ path: "/details", params: { name: id } })
        console.log("log file", a)
        if (Array.isArray(a.return) && a.return.length === 0) {
            setDetails({})
            setIsnotfound(true)
        } else {
            setIsnotfound(false)
            setDetails(a.return[0])
        }
    }


    return (
        <Fragment>
            <center>
                <div
                    style={{ maxWidth: 1200, }}
                >
                    <PgHeader
                        extra={[
                            <Button
                                type="primary"
                                onClick={() => window.location.href = "/"}
                            >Back</Button>
                        ]}
                    />

                    {
                        isnotfound &&
                        <Result title={"No Product Details Found"} />
                    }

                    <Row
                        gutter={16}
                        style={{ marginTop: 10, maxWidth: 1200 }}
                        hidden={Object.keys(details).length === 0 ? true : false}
                    >
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                            <center>
                                <Card
                                    title={
                                        details.source === "startech" ? (
                                            <center>
                                                <img
                                                    src={"https://www.startech.com.bd/image/catalog/logo.png"}
                                                    alt={details.source}
                                                    style={{ height: 32, width: 85, float: "left" }}
                                                />
                                            </center>
                                        ) : details.source === "ryanscomputers" ? (
                                            <img
                                                src={"https://www.ryanscomputers.com/assets/website/img/ryans-computers.svg"}
                                                alt={details.source}
                                                style={{ height: 32, width: 85, float: "left" }}
                                            />
                                        ) : ""
                                    }
                                    bordered={false}
                                >
                                    <centr>
                                        <img
                                            style={{
                                                width: 300,
                                                height: 300,
                                                marginTop: 5
                                            }}
                                            alt={details.name}
                                            src={details.img}
                                        />

                                        <Divider>Product Name</Divider>
                                        <b> {details.name} </b>


                                        <Divider>Details</Divider>
                                        <p> {details.details} </p>

                                        <div>{ReactHtmlParser(html_header)}</div>
                                        <div>{ReactHtmlParser(html_body_0)}</div>
                                        <div>{ReactHtmlParser(html_body_1)}</div>
                                        <div>{ReactHtmlParser(html_body_2)}</div>
                                        <div>{ReactHtmlParser(html_footer)}</div>
                                    </centr>
                                </Card>
                            </center>
                        </Col>
                    </Row>
                </div>
            </center>
        </Fragment>
    )
}