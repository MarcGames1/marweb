import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: "3",
        theme_color: "#E93B81",
        background_color: "#1D1D1D",
        display: "standalone",
        start_url: "/",
        name: "MarWeb Digital Agency",
        short_name: "MarWeb",
        orientation: "portrait",
        prefer_related_applications: false,
        icons: [
            {
                src: '/pwaIcons/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: "/pwaIcons/windows11/SmallTile.scale-100.png",
                sizes: "71x71"
            },
            {
                src: "/pwaIcons/windows11/SmallTile.scale-125.png",
                sizes: "89x89"
            },
            {
                src: "/pwaIcons/windows11/SmallTile.scale-150.png",
                sizes: "107x107"
            },
            {
                src: "/pwaIcons/windows11/SmallTile.scale-200.png",
                sizes: "142x142"
            },
            {
                src: "/pwaIcons/windows11/SmallTile.scale-400.png",
                sizes: "284x284"
            },
            {
                src: "/pwaIcons/windows11/Square150x150Logo.scale-100.png",
                sizes: "150x150"
            },
            {
                src: "/pwaIcons/windows11/Square150x150Logo.scale-125.png",
                sizes: "188x188"
            },
            {
                src: "/pwaIcons/windows11/Square150x150Logo.scale-150.png",
                sizes: "225x225"
            },
            {
                src: "/pwaIcons/windows11/Square150x150Logo.scale-200.png",
                sizes: "300x300"
            },
            {
                src: "/pwaIcons/windows11/Square150x150Logo.scale-400.png",
                sizes: "600x600"
            },
            {
                src: "/pwaIcons/windows11/Wide310x150Logo.scale-100.png",
                sizes: "310x150"
            },
            {
                src: "/pwaIcons/windows11/Wide310x150Logo.scale-125.png",
                sizes: "388x188"
            },
            {
                src: "/pwaIcons/windows11/Wide310x150Logo.scale-150.png",
                sizes: "465x225"
            },
            {
                src: "/pwaIcons/windows11/Wide310x150Logo.scale-200.png",
                sizes: "620x300"
            },
            {
                src: "/pwaIcons/windows11/Wide310x150Logo.scale-400.png",
                sizes: "1240x600"
            },
            {
                src: "/pwaIcons/windows11/LargeTile.scale-100.png",
                sizes: "310x310"
            },
            {
                src: "/pwaIcons/windows11/LargeTile.scale-125.png",
                sizes: "388x388"
            },
            {
                src: "/pwaIcons/windows11/LargeTile.scale-150.png",
                sizes: "465x465"
            },
            {
                src: "/pwaIcons/windows11/LargeTile.scale-200.png",
                sizes: "620x620"
            },
            {
                src: "/pwaIcons/windows11/LargeTile.scale-400.png",
                sizes: "1240x1240"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.scale-100.png",
                sizes: "44x44"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.scale-125.png",
                sizes: "55x55"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.scale-150.png",
                sizes: "66x66"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.scale-200.png",
                sizes: "88x88"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.scale-400.png",
                sizes: "176x176"
            },
            {
                src: "/pwaIcons/windows11/StoreLogo.scale-100.png",
                sizes: "50x50"
            },
            {
                src: "/pwaIcons/windows11/StoreLogo.scale-125.png",
                sizes: "63x63"
            },
            {
                src: "/pwaIcons/windows11/StoreLogo.scale-150.png",
                sizes: "75x75"
            },
            {
                src: "/pwaIcons/windows11/StoreLogo.scale-200.png",
                sizes: "100x100"
            },
            {
                src: "/pwaIcons/windows11/StoreLogo.scale-400.png",
                sizes: "200x200"
            },
            {
                src: "/pwaIcons/windows11/SplashScreen.scale-100.png",
                sizes: "620x300"
            },
            {
                src: "/pwaIcons/windows11/SplashScreen.scale-125.png",
                sizes: "775x375"
            },
            {
                src: "/pwaIcons/windows11/SplashScreen.scale-150.png",
                sizes: "930x450"
            },
            {
                src: "/pwaIcons/windows11/SplashScreen.scale-200.png",
                sizes: "1240x600"
            },
            {
                src: "/pwaIcons/windows11/SplashScreen.scale-400.png",
                sizes: "2480x1200"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-16.png",
                sizes: "16x16"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-20.png",
                sizes: "20x20"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-24.png",
                sizes: "24x24"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-30.png",
                sizes: "30x30"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-32.png",
                sizes: "32x32"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-36.png",
                sizes: "36x36"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-40.png",
                sizes: "40x40"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-44.png",
                sizes: "44x44"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-48.png",
                sizes: "48x48"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-60.png",
                sizes: "60x60"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-64.png",
                sizes: "64x64"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-72.png",
                sizes: "72x72"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-80.png",
                sizes: "80x80"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-96.png",
                sizes: "96x96"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.targetsize-256.png",
                sizes: "256x256"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
                sizes: "16x16"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
                sizes: "20x20"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
                sizes: "24x24"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
                sizes: "30x30"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
                sizes: "32x32"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
                sizes: "36x36"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
                sizes: "40x40"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
                sizes: "44x44"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
                sizes: "48x48"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
                sizes: "60x60"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
                sizes: "64x64"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
                sizes: "72x72"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
                sizes: "80x80"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
                sizes: "96x96"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
                sizes: "256x256"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
                sizes: "16x16"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
                sizes: "20x20"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
                sizes: "24x24"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
                sizes: "30x30"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
                sizes: "32x32"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
                sizes: "36x36"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
                sizes: "40x40"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
                sizes: "44x44"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
                sizes: "48x48"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
                sizes: "60x60"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
                sizes: "64x64"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
                sizes: "72x72"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
                sizes: "80x80"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
                sizes: "96x96"
            },
            {
                src: "/pwaIcons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
                sizes: "256x256"
            },
            {
                src: "/pwaIcons/android/android-launchericon-512-512.png",
                sizes: "512x512"
            },
            {
                src: "/pwaIcons/android/android-launchericon-192-192.png",
                sizes: "192x192"
            },
            {
                src: "/pwaIcons/android/android-launchericon-144-144.png",
                sizes: "144x144"
            },
            {
                src: "/pwaIcons/android/android-launchericon-96-96.png",
                sizes: "96x96"
            },
            {
                src: "/pwaIcons/android/android-launchericon-72-72.png",
                sizes: "72x72"
            },
            {
                src: "/pwaIcons/android/android-launchericon-48-48.png",
                sizes: "48x48"
            },
            {
                src: "/pwaIcons/ios/16.png",
                sizes: "16x16"
            },
            {
                src: "/pwaIcons/ios/20.png",
                sizes: "20x20"
            },
            {
                src: "/pwaIcons/ios/29.png",
                sizes: "29x29"
            },
            {
                src: "/pwaIcons/ios/32.png",
                sizes: "32x32"
            },
            {
                src: "/pwaIcons/ios/40.png",
                sizes: "40x40"
            },
            {
                src: "/pwaIcons/ios/50.png",
                sizes: "50x50"
            },
            {
                src: "/pwaIcons/ios/57.png",
                sizes: "57x57"
            },
            {
                src: "/pwaIcons/ios/58.png",
                sizes: "58x58"
            },
            {
                src: "/pwaIcons/ios/60.png",
                sizes: "60x60"
            },
            {
                src: "/pwaIcons/ios/64.png",
                sizes: "64x64"
            },
            {
                src: "/pwaIcons/ios/72.png",
                sizes: "72x72"
            },
            {
                src: "/pwaIcons/ios/76.png",
                sizes: "76x76"
            },
            {
                src: "/pwaIcons/ios/80.png",
                sizes: "80x80"
            },
            {
                src: "/pwaIcons/ios/87.png",
                sizes: "87x87"
            },
            {
                src: "/pwaIcons/ios/100.png",
                sizes: "100x100"
            },
            {
                src: "/pwaIcons/ios/114.png",
                sizes: "114x114"
            },
            {
                src: "/pwaIcons/ios/120.png",
                sizes: "120x120"
            },
            {
                src: "/pwaIcons/ios/128.png",
                sizes: "128x128"
            },
            {
                src: "/pwaIcons/ios/144.png",
                sizes: "144x144"
            },
            {
                src: "/pwaIcons/ios/152.png",
                sizes: "152x152"
            },
            {
                src: "/pwaIcons/ios/167.png",
                sizes: "167x167"
            },
            {
                src: "/pwaIcons/ios/180.png",
                sizes: "180x180"
            },
            {
                src: "/pwaIcons/ios/192.png",
                sizes: "192x192"
            },
            {
                src: "/pwaIcons/ios/256.png",
                sizes: "256x256"
            },
            {
                src: "/pwaIcons/ios/512.png",
                sizes: "512x512"
            },
            {
                src: "/pwaIcons/ios/1024.png",
                sizes: "1024x1024"
            }
        ]
    }
}