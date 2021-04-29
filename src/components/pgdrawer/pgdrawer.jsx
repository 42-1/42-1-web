import React, { useState } from 'react';
import { Drawer, Button, message } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons'
import { ax_post } from "../../service/api"
import { isMobile } from 'react-device-detect'

// NOTE API Searching
const selectorProduct = async ({ name = "" }) => {

    message.destroy()
    message.loading("Please Wait...", 0)

    let list = await ax_post({
        path: "/search",
        params: {
            type: "product",
            name
        }
    })
    if (list?.status) {
        message.destroy()
        message.destroy()
        return list.return || []
    } else {
        message.destroy()
        message.destroy()
        message.info("No Product Found")
        return []
    }
}


// NOTE Page Drawer
function PgDrawer({
    productUpdate
}) {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                type="primary"
                size="large"
                icon={<UnorderedListOutlined />}
                onClick={showDrawer}
            />

            <Drawer
                title="Welcome to 42-1"
                placement="right"
                closable
                width={isMobile ? "100%" : "20%"}
                onClose={onClose}
                visible={visible}
            >
                <Button
                    type="primary"
                    block
                    style={{ marginTop: 5, marginRight: 5, textAlign: "left" }}
                    onClick={async () => {
                        let a = await selectorProduct({name: "headphone"})
                        productUpdate(a)
                        onClose()
                    }}
                >
                    Headphone
                </Button>
                <Button
                    type="primary"
                    block
                    style={{ marginTop: 5, marginRight: 5, textAlign: "left" }}
                    onClick={async () => {
                        let a = await selectorProduct({name: "keyboards"})
                        productUpdate(a)
                        onClose()
                    }}
                >
                    Keyboards
                </Button>
                <Button
                    type="primary"
                    block
                    style={{ marginTop: 5, marginRight: 5, textAlign: "left" }}
                    onClick={async () => {
                        let a = await selectorProduct({name: "micro-sd-card"})
                        productUpdate(a)
                        onClose()
                    }}
                >
                    Micro/SD Card
                </Button>
                <Button
                    type="primary"
                    block
                    style={{ marginTop: 5, marginRight: 5, textAlign: "left" }}
                    onClick={async () => {
                        let a = await selectorProduct({name: "microphone"})
                        productUpdate(a)
                        onClose()
                    }}
                >
                    Microphone
                </Button>
            </Drawer>
        </>
    );
};


export default PgDrawer;