import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)

    //     gsap.timeline()
    //     .to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1,
    //     }).from(outlineLogoRef.current, {
    //         drawSVG: 5,
    //         duration: 20,
    //     })

    //     gsap.fromTo(
    //       outlineLogoRef.current, {
    //         opacity: 1,
    //       }, {
    //         opacity: 1,
    //         delay: 5,
    //         duration: 3,
    //       }
    //     )

    //     // gsap.fromTo(
    //     //     solidLogoRef.current, {
    //     //         opacity: 0,
    //     //     }, {
    //     //         opacity: 1,
    //     //         delay: 4,
    //     //         duration: 4,
    //     //     }
    //     // )
    // }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
            <svg
        width="659pt"
        height="997pt"
        version="1.0"
        viewBox="0 0 659 997"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(-200 200) scale(1.5 1.5)"
          fill="none"
        >
          
          <path 
            ref={outlineLogoRef}
            d="M51.765 11.765 C 51.765 15.647,54.712 18.824,58.313 18.824 C 65.240 18.824,72.797 39.082,71.040 52.941 C 70.466 57.471,72.850 61.176,76.337 61.176 C 84.811 61.176,100.343 88.075,96.960 96.892 C 95.380 101.009,97.631 105.101,102.432 106.841 C 106.918 108.467,116.205 116.328,123.070 124.310 C 137.791 141.426,146.683 136.960,135.764 117.935 L 128.176 104.713 168.794 99.448 C 268.915 86.470,267.714 86.035,203.959 112.198 C 126.424 144.018,108.550 155.294,135.650 155.294 C 149.413 155.294,164.865 174.844,161.444 187.929 C 158.905 197.637,159.869 198.779,168.669 196.478 C 174.254 195.017,178.824 195.245,178.824 196.985 C 178.824 202.124,68.537 310.588,63.311 310.588 C 42.097 310.588,-2.351 376.943,10.353 389.647 C 23.159 402.453,89.412 357.968,89.412 336.564 C 89.412 331.554,202.078 216.579,202.895 220.757 C 203.193 222.282,203.013 227.510,202.496 232.375 C 201.731 239.563,203.733 240.674,213.180 238.303 C 220.801 236.390,226.871 237.875,230.804 242.613 C 234.103 246.588,239.567 248.779,242.947 247.482 C 247.532 245.723,248.359 248.793,246.204 259.570 C 243.573 272.724,244.221 273.729,253.444 270.802 C 264.415 267.320,287.222 281.766,292.100 295.286 C 293.578 299.384,299.931 303.123,306.218 303.595 C 312.504 304.068,321.353 306.061,325.882 308.025 C 338.904 313.670,335.923 300.617,321.580 289.180 L 309.042 279.182 314.703 234.885 C 317.816 210.522,321.764 182.118,323.476 171.765 L 326.589 152.941 329.866 176.471 C 331.668 189.412,334.744 229.280,336.702 265.067 C 339.986 325.105,340.933 329.958,348.949 327.862 C 353.727 326.612,365.299 330.790,374.664 337.145 C 398.031 353.002,398.584 350.783,386.978 287.789 C 362.158 153.079,333.999 78.966,302.470 65.371 C 226.909 32.789,51.765 -4.661,51.765 11.765 M170.890 40.645 C 198.879 47.292,221.115 53.238,220.302 53.859 C 209.476 62.124,85.244 44.136,83.311 34.023 C 80.683 20.275,87.176 20.766,170.890 40.645 M222.226 70.262 L 247.059 73.644 223.529 77.077 C 210.588 78.965,181.681 83.156,159.292 86.389 L 118.584 92.269 111.057 79.526 C 106.917 72.517,103.529 65.293,103.529 63.472 C 103.529 60.039,178.766 64.342,222.226 70.262 M256.235 112.278 C 253.776 114.502,235.145 128.680,214.831 143.786 L 177.897 171.249 169.270 159.813 C 158.735 145.846,154.860 149.142,207.607 127.212 C 252.572 108.517,264.416 104.880,256.235 112.278 M276.984 130.588 C 268.606 142.882,251.879 166.074,239.814 182.126 L 217.877 211.311 203.294 196.244 L 188.710 181.176 239.061 144.825 C 266.754 124.831,290.043 108.419,290.814 108.354 C 291.586 108.289,285.362 118.294,276.984 130.588 M272.676 192.474 C 250.704 245.416,252.537 243.279,239.514 231.145 C 230.042 222.321,230.109 222.154,259.425 181.840 C 295.896 131.686,297.402 132.894,272.676 192.474 M303.811 206.352 C 299.774 237.386,296.471 265.127,296.471 268.000 C 296.471 270.873,290.118 268.526,282.353 262.785 C 264.735 249.760,264.414 253.549,288.235 193.215 C 312.168 132.597,313.284 133.539,303.811 206.352 M364.340 250.575 C 379.713 319.121,379.746 321.291,365.316 314.716 C 354.817 309.932,353.970 306.415,350.887 254.817 C 349.085 224.668,346.644 194.706,345.462 188.235 C 339.558 155.917,353.252 201.138,364.340 250.575 M192.941 208.303 C 192.941 208.988,164.882 237.046,130.588 270.656 L 68.235 331.765 129.344 269.412 C 186.109 211.491,192.941 204.926,192.941 208.303 M63.792 339.248 C 67.449 345.166,34.069 381.176,24.927 381.176 C 14.144 381.176,18.369 370.274,36.249 351.963 C 54.812 332.953,58.771 331.125,63.792 339.248 "
          />
        </g>
      </svg>
        </div>
    )
}



export default Logo