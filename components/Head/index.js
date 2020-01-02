import React from 'react'
import Head from 'next/head'

const MyHead = props => {
    const title = "Convert2Svg - A Simple Image To SVG Vector Converter"
    const link = "https://convert2svg.com"
    const description = "A free and open-source tool to easily transform any image or photo into a multi colored svg vector file"
    const image = "/preview.jpg"

    return (
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' type="image/x-icon" />
            <meta charSet="utf-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="robots" content="index, follow"></meta>
            <link rel="canonical" href={link} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={link} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:creator" content="@VincentWill4" />
            <meta name="twitter:image" content={`https://convert2svg.com${image}`} />

            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={`https://convert2svg.com${image}`} />
            <meta property="og:site_name" content="Vincent Will - Blog" />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={link} />
            <script type="text/javascript" src="/analytics.js"></script>
            <script type="text/javascript" src="https://analytics.vincentwill.com/hokuspokusj"></script>
        </Head>
    )
}

export default MyHead
