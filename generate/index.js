import { customGen } from 'burst-generate-files';

customGen([
    {
        stringsReplacers: {
            replaceVar: '00000000000000000',
            value: '00000000000000000',
        },
        pathToTemplate: `src/german`,
        outputPath: `./build/german`,
        markers: [
            {
                pattern: '// COMMON FRONT',
                markerTemplate: `src/common/front.js`,
                pathToMarker: `build/german/front.html`,
            },
        ],
    },
    {
        stringsReplacers: {
            replaceVar: '00000000000000000',
            value: '00000000000000000',
        },
        pathToTemplate: `src/english`,
        outputPath: `./build/english`,
        markers: [
            {
                pattern: '// COMMON FRONT',
                markerTemplate: `src/common/front.js`,
                pathToMarker: `build/english/front.html`,
            },
        ],
    },
    {
        stringsReplacers: {
            replaceVar: '00000000000000000',
            value: '00000000000000000',
        },
        pathToTemplate: `src/common/style`,
        outputPath: `./build`,
    },
])