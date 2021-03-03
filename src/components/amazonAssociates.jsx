/* eslint-disable */
import React, { Fragment } from 'react';
import { Row, Col } from 'antd';


export default function AmazonAssociates() {
    return (
        <Fragment>
            <center>
                <Row
                    gutter={24}
                    style={{
                        marginLeft: 0,
                        marginRight: 0,
                        paddingTop: 10,
                        marginBottom: 5,
                        maxWidth: 1200,
                    }}
                >
                    <Col
                        xs={0} sm={0} md={0} lg={6} xl={6}
                        style={{ paddingTop: 10 }}
                    >
                    </Col>
                    <Col
                        xs={12} sm={10} md={8} lg={6} xl={6}
                        style={{ paddingTop: 10 }}
                    >
                        <iframe
                            style={{
                                height: 240,
                                textAlign: "center"
                            }}
                            marginwidth="0"
                            marginheight="0"
                            scrolling="no"
                            frameborder="0"
                            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=421shp-20&marketplace=amazon&amp;region=US&placement=B000J07BRQ&asins=B000J07BRQ&linkId=cf718a8603ca0457bf6fa4be33737059&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>
                    </Col>
                    <Col
                        xs={12} sm={10} md={8} lg={6} xl={6}
                        style={{ paddingTop: 10 }}
                    >
                        <iframe
                            style={{
                                height: 240,
                            }}
                            marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=421shp-20&marketplace=amazon&amp;region=US&placement=B07N8VFFNS&asins=B07N8VFFNS&linkId=031a580c70ac7b4876ff76a7b87cd41e&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>
                    </Col>
                    <Col
                        xs={0} sm={0} md={0} lg={6} xl={6}
                        style={{ paddingTop: 10 }}
                    >
                    </Col>
                </Row>

                <Row 
                    gutter={16} 
                    style={{
                        marginLeft: 0,
                        marginRight: 0,
                        paddingTop: 10,
                        marginBottom: 5,
                        maxWidth: 1200,
                    }}
                >
                    <Col xs={0} sm={0} md={0} lg={4} xl={4}/>
                    <Col span={12}>
                        <iframe 
                            src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=26&l=ur1&category=software&banner=1KA3F83MXGSW8Z2RT9G2&f=ifr&linkID=e47ed0630091e15edded576454d9e784&t=421shp-20&tracking_id=421shp-20" 
                            width="468" 
                            height="60" 
                            scrolling="no" 
                            border="0" 
                            marginwidth="0" 
                            style={{ border: "none" }} 
                            frameborder="0"
                        ></iframe>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={6} xl={6} />
                </Row>
            </center>
        </Fragment>
    )
}