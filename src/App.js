import { Fragment } from 'react';
import { PageHeader, Row, Col, Card  } from 'antd';
import Product from './product.js'

const { Meta } = Card;

function App() {
  return (
    <Fragment>
      <PageHeader
        title="RND_1"
      />
      <Row
        gutter={16}
        style={{
          padding: 10,
          marginTop: 10
        }}
      >
        {
          Product.map(ii =>
            <Col xs={24} sm={24} md={16} lg={4} xl={4}>
              <Card
                hoverable
                style={{ width: 240, margin: 5, minHeight: 600, marginTop: 20 }}
                cover={<img alt="example" src={ii.img} />}
              > 

                <b>{ii.name}</b>
                <Meta style={{ marginTop: 5 }} description={ii.details} />

                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right',
                  }}
                >
                  <Meta title="Price" />
                  <Meta title={ii.price} />
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
