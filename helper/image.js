
import ImageTracer from './imagetracer'

export const convertImage = ({ file, options, updateProgressBar }) => {
    return new Promise(async (resolve, reject) => {
        const objectURL = window.URL.createObjectURL(file)
        const result = await ImageTracer.imageToSVG(
            objectURL,
            {
                ...options,
                viewbox: true,
            },
            updateProgressBar,
        )
        resolve(result)
    })
}

export const getImageSrc = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => resolve(e.target.result)
        reader.readAsDataURL(file)
    })
}