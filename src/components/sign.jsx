/* eslint-disable */
import React, { useState } from 'react';
import { Drawer, Button, Form, Input, message } from 'antd';
import jscookie from 'js-cookie'
import API from './../service/api'

function SignIN({ pageView }) {

    const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [forceUpdate, setForceUpdate] = useState(Number(new Date()));

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const singIn = async () => {

        if (username === "" || mobileno === "") {
            message.destroy()
            message.info("Please type your usename or mobile no")
        } else {
            
            let details = await API.ax_post({
                path: "/sign",
                params: {
                    username,
                    mobileno
                }
            })
    
            jscookie.set("userid", details.user_id)
            setVisible(false);
        }   
    }

    return (
        <>
            <Button
                type="primary"
                onClick={showDrawer}
                block
                hidden={jscookie.get("userid")}
            >Login</Button>

            <Button
                type="primary"
                danger
                onClick={() => {
                    message.destroy()
                    message.info("User Logout")
                    jscookie.remove("userid")
                    setForceUpdate(Number(new Date()))
                }}
                block
                hidden={!jscookie.get("userid")}
            >Logout</Button>

            <Drawer
                title={"Sign"}
                placement="right"
                closable
                onClose={onClose}
                visible={visible}
                width={"30%"}
            >

                <Form layout={"vertical"}>
                    <Form.Item label={"Username"}>
                        <Input placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Item>

                    <Form.Item label={"Mobile No"}>
                        <Input placeholder={"Mobile No"} onChange={(e) => setMobileno(e.target.value)} />
                    </Form.Item>
                </Form>

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
                    <Button type="default" onClick={onClose} style={{ marginRight: 5 }}>Close</Button>
                    <Button type="primary" onClick={singIn}>Login</Button>
                </div>
            </Drawer>
        </>
    );
};

export default SignIN