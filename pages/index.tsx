import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeModule from '../modules/home'

const _Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>泰克谢尔--一个IT人的自我修养</title>
                <meta name="description" content="技术博客,前端、后端技术分享,高级前端工程师"></meta>
            </Head>
            <HomeModule />
        </>
    )
}
export default _Index