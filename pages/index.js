import React from 'react'
import "../styles/global.css"
import {
  Dropzone,
  Footer,
  Head,
  Header,
  Loader,
  Presets,
  Result,
} from '../components'
import { convertImage, getImageSrc } from '../helper/image'
import ImageTracer from '../helper/imagetracer'
import * as S from '../styles/landing'

class Home extends React.Component {
  state = {
    isLoading: false,
    preset: 'default',
    progress: 0,
    fileName: '',
  }

  updateProgressBar = (newProgress, all) => {
    const progressPercent = Math.round(((newProgress) / all) * 100)
    this.setState({ progress: progressPercent })
  }

  setFileAndConvert = async file => {
    const { preset } = this.state
    const imageSource = await getImageSrc(file)
    const fileName = file.name.split('.').slice(0, -1).join('.')

    this.setState({
      isLoading: true,
      imageSource,
      fileName,
    })

    const options = {
      ...ImageTracer.optionpresets[preset],
      viewbox: true,
    }

    const svgString = await convertImage({
      file,
      options,
      updateProgressBar: this.updateProgressBar,
    })

    this.setState({
      svgPreview: svgString,
      isLoading: false
    })
  }

  resetResult = () => {
    this.setState({
      imageSrc: undefined,
      svgPreview: undefined,
      isLoading: false,
      preset: 'default',
      progress: 0,
      fileName: '',
    })
  }

  render() {
    const {
      imageSrc,
      svgPreview,
      isLoading,
      preset,
      progress,
      fileName
    } = this.state
    const hideUpload = isLoading || svgPreview || imageSrc
    const showResult = !!svgPreview

    return (
      <S.Container>
        <Head />
        <Header />

        <S.CenterContent>
          { !hideUpload &&
            <React.Fragment>
              <h2>1) Select conversion option</h2>
              <Presets
                selectedPreset={preset}
                setPreset={preset => { this.setState({ preset })}}
              />
              <h2>2) Upload file</h2>
              <Dropzone setImageSrc={this.setFileAndConvert} />
            </React.Fragment>
          }
          { isLoading && <Loader progress={progress} /> }
          { showResult &&
            <Result
              svgPreview={svgPreview}
              resetResult={this.resetResult}
              fileName={fileName}
            />
          }
        </S.CenterContent>

        <Footer />
      </S.Container>
    )
  }
}

export default Home
