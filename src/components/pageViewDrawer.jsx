/* eslint-disable */
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons'

function PageViewDrawer({ pageView }) {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            {/* <Button type="primary" onClick={showDrawer}>
                Open
            </Button> */}
            <Button
                type="primary"
                icon={<LinkOutlined />}
                onClick={showDrawer}
            />
            <Drawer
                placement="right"
                closable
                onClose={onClose}
                visible={visible}
                width={"85%"}
            >
                <iframe src={pageView} width="100%" height="90%" frameBorder="0" style={{ marginTop: 40 }} />
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                        borderTop: '1px solid #ebebeb'
                    }}
                >
                    <Button type="primary" onClick={onClose}>Close</Button>
                </div>
            </Drawer>
        </>
    );
};

export default PageViewDrawer