
import ImageTracer from './imagetracer2'

export const convertImage = ({ file, options, updateProgressBar }) => {
    return new Promise((resolve, reject) => {
        const objectURL = window.URL.createObjectURL(file)
        // modified version of (added progress bar functionality)
        // https://github.com/jankovicsandras/imagetracerjs
        ImageTracer.imageToSVG(
            objectURL,
            svgstr => resolve(svgstr),
            {
                ...options,
                viewbox: true,
            },
            updateProgressBar,
        )
    })
}

export const getImageSrc = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => resolve(e.target.result)
        reader.readAsDataURL(file)
    })
}