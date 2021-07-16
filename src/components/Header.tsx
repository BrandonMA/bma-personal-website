import React, { ReactElement } from 'react';
import Head from 'next/head';

export function Header(): ReactElement {
    return (
        <Head>
            <title>Brandon Maldonado Alonso</title>
            <meta property='og:title' content='Brandon Maldonado Alonso' key='title' />
        </Head>
    );
}
