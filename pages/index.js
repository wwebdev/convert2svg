import React, { useState } from 'react'
import Head from 'next/head'
import { SvgIcon } from '@material-ui/core' // TODO use that

import "../styles/global.css"
import {
  ConvertResult,
  Dropzone,
  Header,
} from '../components'
import { convertImage, getImageSrc } from '../helper/image'
import * as S from '../styles/landing'

// https://github.com/jankovicsandras/imagetracerjs/blob/master/options.md

const Home = () => {
  const [imageSrc, setImageSrc] = useState(undefined)
  const [svgPreview, setSvgPreview] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const setFileAndConvert = async file => {
    setIsLoading(true)
    setImageSrc(undefined)
    setSvgPreview(undefined)

    const imageFile = await getImageSrc(file)
    console.log('file', file)
    setImageSrc(imageFile)

    const svgString = await convertImage(file)
    console.log('svgString')
    setSvgPreview(svgString)
    setIsLoading(false)
  }

  const hideUpload = isLoading || svgPreview || imageSrc

  return (
    <S.Container>
      <Head>
        <title>Convert2Svg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <S.CenterContent>
        { !hideUpload && <Dropzone setImageSrc={setFileAndConvert} /> }

        { svgPreview && <ConvertResult
          imageSrc={imageSrc}
          isLoading={isLoading}
          svgPreview={svgPreview}
        /> }
      </S.CenterContent>

      <script src="/imagetracer_v1.2.5.js"></script>
    </S.Container>
  )
}

export default Home
