export const convertImage = file => {
    return new Promise((resolve, reject) => {
        const objectURL = window.URL.createObjectURL(file)
        ImageTracer.imageToSVG(
            objectURL,
            svgstr => resolve(svgstr),
            'detailed', // TODO check image size and set default option by that
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