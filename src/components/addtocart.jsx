/* eslint-disable */
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

function AddToCart({ pageView }) {

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
                type="default"
                onClick={showDrawer}
            >
                Add To Cart
            </Button>

            <Drawer
                title="Add To Cart"
                placement="right"
                closable
                onClose={onClose}
                visible={visible}
                width={"100%"}
            >
                
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
                    <Button type="default" block onClick={onClose}>Close</Button>
                </div>
            </Drawer>
        </>
    );
};

export default AddToCart