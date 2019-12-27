// todo only map preset to label here
export const presets = {
    'default': {
        label: 'Default',
        // Tracing
        corsenabled : false,
        ltres : 1,
        qtres : 1,
        pathomit : 8,
        rightangleenhance : true,

        // Color quantization
        colorsampling : 2,
        numberofcolors : 16,
        mincolorratio : 0,
        colorquantcycles : 3,

        // Layering method
        layering : 0,

        // SVG rendering
        strokewidth : 1,
        linefilter : false,
        scale : 1,
        roundcoords : 1,
        viewbox : false,
        desc : false,
        lcpr : 0,
        qcpr : 0,

        // Blur
        blurradius : 0,
        blurdelta : 20

    },

    'posterized1': {
        label: 'Posterized 1',
        colorsampling: 0,
        numberofcolors: 2,
    },

    'posterized2': {
        label: 'Posterized 2',
        numberofcolors: 4,
        blurradius: 5,
    },

    'curvy': {
        label: 'Curvy',
        ltres: 0.01,
        linefilter: true,
        rightangleenhance: false,
    },

    'sharp': {
        label: 'Sharp',
        qtres: 0.01,
        linefilter: false,
    },

    'detailed': {
        label: 'Detailed',
        pathomit: 0,
        roundcoords: 2,
        ltres: 0.5,
        qtres: 0.5,
        numberofcolors: 64,
    },

    'smoothed': {
        label: 'Smoothed',
        blurradius: 5,
        blurdelta: 64,
    },

    'grayscale': {
        label: 'Grayscale',
        colorsampling: 0,
        colorquantcycles: 1,
        numberofcolors: 7,
    },

    'fixedpalette': {
        label: 'Fixed Palette',
        colorsampling: 0,
        colorquantcycles: 1,
        numberofcolors: 27,
    },

    'randomsampling1': {
        label: 'Random Sampling 1',
        colorsampling: 1,
        numberofcolors: 8,
    },

    'randomsampling2': {
        label: 'Random Sampling 2',
        colorsampling: 1,
        numberofcolors: 64,
    },

    'artistic1': {
        label: 'Artistic 1',
        colorsampling: 0,
        colorquantcycles: 1,
        pathomit: 0,
        blurradius: 5,
        blurdelta: 64,
        ltres: 0.01,
        linefilter: true,
        numberofcolors: 16,
        strokewidth: 2,
    },

    'artistic2': {
        label: 'Artistic 2',
        qtres: 0.01,
        colorsampling: 0,
        colorquantcycles: 1,
        numberofcolors: 4,
        strokewidth: 0,
    },

    'artistic3': {
        label: 'Artistic 3',
        qtres: 10,
        ltres: 10,
        numberofcolors: 8,
    },

    'artistic4': {
        label: 'Artistic 4',
        qtres: 10,
        ltres: 10,
        numberofcolors: 64,
        blurradius: 5,
        blurdelta: 256,
        strokewidth: 2,
    },

    'posterized3': {
        label: 'Posterized 3',
        ltres: 1,
        qtres: 1,
        pathomit: 20,
        rightangleenhance: true,
        colorsampling: 0,
        numberofcolors: 3,
        mincolorratio: 0,
        colorquantcycles: 3,
        blurradius: 3,
        blurdelta: 20,
        strokewidth: 0,
        linefilter: false,
        roundcoords: 1,
        pal: [ { r: 0, g: 0, b: 100, a: 255 }, { r: 255, g: 255, b: 255, a: 255 } ],
    }
}

export const defaultPreset = presets.detailed
