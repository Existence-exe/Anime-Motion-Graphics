const waves_2 = "M0 243L45.7 238.2C91.3 233.3 182.7 223.7 274.2 223.8C365.7 224 457.3 234 548.8 233.7C640.3 233.3 731.7 222.7 823 219.3C914.3 216 1005.7 220 1097 218.8C1188.3 217.7 1279.7 211.3 1371.2 217C1462.7 222.7 1554.3 240.3 1645.8 240C1737.3 239.7 1828.7 221.3 1874.3 212.2L1920 203L1920 301L1874.3 301C1828.7 301 1737.3 301 1645.8 301C1554.3 301 1462.7 301 1371.2 301C1279.7 301 1188.3 301 1097 301C1005.7 301 914.3 301 823 301C731.7 301 640.3 301 548.8 301C457.3 301 365.7 301 274.2 301C182.7 301 91.3 301 45.7 301L0 301Z"

const waves_3 = "M0 210L45.7 211C91.3 212 182.7 214 274.2 221.3C365.7 228.7 457.3 241.3 548.8 236.5C640.3 231.7 731.7 209.3 823 204.3C914.3 199.3 1005.7 211.7 1097 214C1188.3 216.3 1279.7 208.7 1371.2 208.7C1462.7 208.7 1554.3 216.3 1645.8 214C1737.3 211.7 1828.7 199.3 1874.3 193.2L1920 187L1920 301L1874.3 301C1828.7 301 1737.3 301 1645.8 301C1554.3 301 1462.7 301 1371.2 301C1279.7 301 1188.3 301 1097 301C1005.7 301 914.3 301 823 301C731.7 301 640.3 301 548.8 301C457.3 301 365.7 301 274.2 301C182.7 301 91.3 301 45.7 301L0 301Z"

const waves_4 = "M0 121L64 119.7C128 118.3 256 115.7 384 102.5C512 89.3 640 65.7 768 64.8C896 64 1024 86 1152 113.3C1280 140.7 1408 173.3 1536 164.2C1664 155 1792 104 1856 78.5L1920 53L1920 0L1856 0C1792 0 1664 0 1536 0C1408 0 1280 0 1152 0C1024 0 896 0 768 0C640 0 512 0 384 0C256 0 128 0 64 0L0 0Z"

const waves_5 = "M0 80L64 86.3C128 92.7 256 105.3 384 112.3C512 119.3 640 120.7 768 111.8C896 103 1024 84 1152 67C1280 50 1408 35 1536 54.7C1664 74.3 1792 128.7 1856 155.8L1920 183L1920 0L1856 0C1792 0 1664 0 1536 0C1408 0 1280 0 1152 0C1024 0 896 0 768 0C640 0 512 0 384 0C256 0 128 0 64 0L0 0Z"

const blobs = [
    "M78.7 -66.2C103.7 -53.7 126.9 -26.9 128.3 1.4C129.7 29.7 109.4 59.4 84.4 82.9C59.4 106.4 29.7 123.7 4.1 119.6C-21.4 115.4 -42.9 89.9 -63.1 66.4C-83.2 42.9 -102.1 21.4 -100.2 1.9C-98.3 -17.7 -75.7 -35.4 -55.5 -47.9C-35.4 -60.4 -17.7 -67.7 4.6 -72.3C26.9 -76.9 53.7 -78.7 78.7 -66.2",
    "M66.3 -72.7C83.2 -49.5 92.1 -24.7 92.2 0.1C92.3 25 83.6 50 66.8 62.5C50 75 25 75 -1.3 76.3C-27.6 77.6 -55.2 80.2 -74.3 67.7C-93.5 55.2 -104.2 27.6 -108.1 -3.9C-112 -35.4 -109 -70.7 -89.9 -93.9C-70.7 -117 -35.4 -128 -5.3 -122.7C24.7 -117.4 49.5 -95.8 66.3 -72.7",
    "M51.6 -58.1C64.1 -39.1 69.6 -19.6 77.5 7.9C85.4 35.4 95.7 70.7 83.2 84C70.7 97.4 35.4 88.7 7.8 80.9C-19.8 73.1 -39.6 66.3 -56.3 52.9C-72.9 39.6 -86.5 19.8 -92.4 -5.9C-98.3 -31.6 -96.5 -63.2 -79.8 -82.2C-63.2 -101.2 -31.6 -107.6 -6 -101.6C19.6 -95.6 39.1 -77.1 51.6 -58.1"
]

/*
Animated the wave lower down the page
*/

anime({
    targets: '.wave',
    d: [
        { value: waves_2 },
        { value: waves_3 },
        { value: "M0 223L45.7 225.5C91.3 228 182.7 233 274.2 238C365.7 243 457.3 248 548.8 249.2C640.3 250.3 731.7 247.7 823 242.5C914.3 237.3 1005.7 229.7 1097 227.2C1188.3 224.7 1279.7 227.3 1371.2 229.7C1462.7 232 1554.3 234 1645.8 230.3C1737.3 226.7 1828.7 217.3 1874.3 212.7L1920 208L1920 301L1874.3 301C1828.7 301 1737.3 301 1645.8 301C1554.3 301 1462.7 301 1371.2 301C1279.7 301 1188.3 301 1097 301C1005.7 301 914.3 301 823 301C731.7 301 640.3 301 548.8 301C457.3 301 365.7 301 274.2 301C182.7 301 91.3 301 45.7 301L0 301Z" }
    ],
    easing: 'linear',
    duration: 3000,
    autoplay: true,
    loop: true
})


anime({
    targets: '.wave2',
    d: [
        { value: waves_4 },
        { value: waves_5 },
        { value: "M0 40L64 64.5C128 89 256 138 384 146.7C512 155.3 640 123.7 768 130C896 136.3 1024 180.7 1152 204.5C1280 228.3 1408 231.7 1536 209.5C1664 187.3 1792 139.7 1856 115.8L1920 92L1920 0L1856 0C1792 0 1664 0 1536 0C1408 0 1280 0 1152 0C1024 0 896 0 768 0C640 0 512 0 384 0C256 0 128 0 64 0L0 0Z" }
    ],
    easing: 'linear',
    duration: 3000,
    autoplay: true,
    loop: true
})

anime({
    targets: '.blob',
    d: [
        {value: blobs[1]},
        {value: blobs[2]},
        {value: blobs[0]}
    ],
    easing: 'linear',
    duration: 3000,
    autoplay: true,
    loop: true
})