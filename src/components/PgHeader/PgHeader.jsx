/* eslint-disable */
import React, { Fragment } from 'react';
import { PageHeader, Space } from 'antd';

export default function PgHeader({extra=[]}) {
    return (
        <Fragment>
            <center>
                <PageHeader
                    title="42-1"
                    subTitle={"Compare Your Product Price"}
                    style={{ borderBottom: "1px solid #e9e9e9", maxWidth: 1400, }}
                    extra={extra}
                />
            </center>
            <Space />
        </Fragment>
    )
}