import React, { useState } from 'react'
import Head from 'next/head'
import UploadInput from '../components/UploadInput'

// https://github.com/jankovicsandras/imagetracerjs/blob/master/options.md

const Home = () => {
  const [imageSrc, setImageSrc] = useState(undefined);
  const [svgPreview, setSvgPreview] = useState(undefined)

  const test = () => {
    const objectURL = window.URL.createObjectURL(imageSrc)

    ImageTracer.imageToSVG(
      objectURL,
      function(svgstr){
        setSvgPreview(svgstr)
      },
      'detailed', // TODO check image size and set default option by that
    );
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { /* <UploadInput /> */}

      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        onChange={e => setImageSrc(e.target.files[0])}
      ></input>

      <button onClick={test}>
        test
      </button>

      { svgPreview && <div dangerouslySetInnerHTML={{ __html: svgPreview }}></div> }

      <script src="/imagetracer_v1.2.5.js"></script>
    </div>
  )
}

export default Home
