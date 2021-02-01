import React, { useEffect, useState } from 'react';
import { Drawer, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons'

function PageViewDrawer({ pageView }) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(pageView)
    })

    const showDrawer = () => {
        // window.open(pageView, "_blank")}
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
                width={"95%"}
            >
                <iframe src={pageView} width="100%" height="90%" frameBorder="0" style={{marginTop: 40}}/>
            </Drawer>
        </>
    );
};

export default PageViewDrawer