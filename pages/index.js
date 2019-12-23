import React, { useState } from 'react'
import Head from 'next/head'
import { SvgIcon } from '@material-ui/core'
import "../styles/global.css"
import {
  Dropzone,
  Header,
  Loader,
  Result,
  Sidebar,
} from '../components'
import { convertImage, getImageSrc } from '../helper/image'
import { presets, defaultPreset } from '../helper/presets'
import * as S from '../styles/landing'

const Home = () => {
  const [imageSrc, setImageSrc] = useState(undefined)
  const [imageFile, setImageFile] = useState(undefined)
  const [svgPreview, setSvgPreview] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [options, setOptions] = useState(presets[defaultPreset])

  const setFileAndConvert = async file => {
    setIsLoading(true)
    setImageSrc(undefined)
    setSvgPreview(undefined)
    setImageFile(file)

    const imageFile = await getImageSrc(file)
    setImageSrc(imageFile)

    const svgString = await convertImage({ file, options })
    setSvgPreview(svgString)
    setIsLoading(false)
  }

  const updateSvg = async () => {
    setIsUpdating(true)
    setSvgPreview(undefined)

    const svgString = await convertImage({ file: imageFile, options })
    setSvgPreview(svgString)
    setIsUpdating(false)
  }

  const hideUpload = isLoading || svgPreview || imageSrc
  const showResult = !!svgPreview || isUpdating

  return (
    <S.Container>
      <Head>
        <title>Convert2Svg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      { !showResult &&
        <S.CenterContent>
          { !hideUpload && <Dropzone setImageSrc={setFileAndConvert} /> }
          { isLoading && <Loader /> }
        </S.CenterContent>
      }

      { showResult &&
        <S.SidebarContent>
          { imageSrc && <Sidebar
            imageSrc={imageSrc}
            options={options}
            setOptions={setOptions}
            updateSvg={updateSvg}
          /> }
          <S.CenterContent>
            { svgPreview && <Result svgPreview={svgPreview} /> }
            { isUpdating && <Loader /> }
          </S.CenterContent>
        </S.SidebarContent>
      }

      <script src="/imagetracer_v1.2.5.js"></script>
    </S.Container>
  )
}

export default Home
