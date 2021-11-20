import { css } from "styled-components"
const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  laptop: 768,
  tablet: 480,
  phone: 320,
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})