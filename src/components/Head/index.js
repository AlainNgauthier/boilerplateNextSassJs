import * as React from 'react';
import Head from 'next/head';

function Head({ title }) {
    return (
        <Head>
            <title>
                {title}
            </title>
        </Head>
    );
}

export default Head;