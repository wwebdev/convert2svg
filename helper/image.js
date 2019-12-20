export const convertImage = ({ file, options }) => {
    return new Promise((resolve, reject) => {
        const objectURL = window.URL.createObjectURL(file)
        ImageTracer.imageToSVG(
            objectURL,
            svgstr => resolve(svgstr),
            options,
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