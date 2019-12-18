import React, { useState } from 'react'
import Head from 'next/head'
import { DotLoader } from 'react-spinners'
import { SvgIcon } from '@material-ui/core' // TODO use that
import { Dropzone } from '../components'
import "../styles/global.css"

// https://github.com/jankovicsandras/imagetracerjs/blob/master/options.md

const Home = () => {
  const [imageSrc, setImageSrc] = useState(undefined)
  const [svgPreview, setSvgPreview] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const setFileAndConvert = file => {
    setIsLoading(true)
    setImageSrc(file)
    const objectURL = window.URL.createObjectURL(file)

    ImageTracer.imageToSVG(
      objectURL,
      function(svgstr){
        setIsLoading(false)
        setSvgPreview(svgstr)
      },
      'detailed', // TODO check image size and set default option by that
    );
  }

  return (
    <div>
      <Head>
        <title>Image2Svg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dropzone setImageSrc={setFileAndConvert} />

      { isLoading && <DotLoader
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
      /> }

      { // TODO check better option than dangerouslySetInnerHTML
        svgPreview && <div dangerouslySetInnerHTML={{ __html: svgPreview }}></div>
      }

      <script src="/imagetracer_v1.2.5.js"></script>
    </div>
  )
}

export default Home
