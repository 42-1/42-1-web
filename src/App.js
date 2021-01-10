import { Fragment } from 'react';
import { PageHeader, Row, Col, Card, Space, Input  } from 'antd';
import Product from './product.js'

const { Meta } = Card;

function App() {
  return (
    <Fragment>
      <PageHeader
        title="421"
        style={{borderBottom: "1px solid black"}}
      />

      <Space />


      <Input 
        addonBefore="Search"
        placeholder={"Search Product Name"} 
        style={{ width: "100%", marginTop: 20, marginBottom: 20, paddingRight: 20, paddingLeft: 20 }} 
        size="large"
      />


      <Space />
      <Row
        gutter={16}
        style={{
          marginTop: 10,
          padding: 20
        }}
      >
        {
          Product.map(ii =>
            <Col xs={24} sm={24} md={24} lg={4} xl={4} style={{padding: 2}}>
              <Card
                title={"Startech"}
                style={{  minHeight: 600, marginTop: 20, zIndex: 100 }}
                cover={<img style={{zIndex: 10, padding: 20}} alt="example" src={ii.img} />}
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
                  }}
                >
                  {/* <Meta title="Price" /> */}
                   {/* <Meta title={ii.price} /> */}
                  <h3>
                   <b>Price: {ii.price}</b>
                  </h3>
                </div>
              </Card>
            </Col>
          )
        }

        {/* <Col xs={24} sm={24} md={16} lg={8} xl={8}>
          Col
        </Col>
        <Col xs={24} sm={24} md={16} lg={8} xl={8}>
          Col
        </Col> */}
      </Row>
    </Fragment>
  );
}

export default App;
