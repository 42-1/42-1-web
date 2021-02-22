/* eslint-disable */
import React, { Fragment } from 'react';
import AdSense from 'react-adsense';

export default function GoogleAdSence() {
    return (
        <Fragment>
            <AdSense.Google
                client='ca-pub-4319664345109203'
                slot='1314312404'
                style={{
                    display: "inline-block",
                    width: 360,
                    height: 90
                }}
                layoutKey="-eo-29+1q-1j+dw"
                format='fluid'
            />
        </Fragment>
    )
}