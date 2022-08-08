import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

  :root, ::after, ::before {
    --font-family: 'Lato';

    --c-white: #fff;
    --c-purple-30: #15141F;
    --c-purple-50: #211F30;

    --c-gray-30: #E2E2E2;
    --c-gray-45: #BCBCBC;
    --c-gray-50: #BBBBBB;
    --c-gray-55: rgba(218, 218, 218, 0.3);

    --c-orange-70: #EF2D1A;

    --c-primary: var(--c-purple-30);
    --c-primary-light: var(--c-purple-50);

    --c-status-error: var(--c-orange-70);

    --bf-blur-50: blur(4.81px);

    --br-15: var(--f15);
    --br-20: var(--f20);
    --br-30: var(--f30);

    --ls-40: 0.02rem;

    --gr-gray-white-20: linear-gradient(61.05deg, #C2C2C2 -4.72%, #E2E2E2 98.65%);
    --gr-gray-white-40: linear-gradient(268.13deg, #FFFFFF 7.44%, rgba(255, 255, 255, 0.2) 115.42%);
    --gr-gray-white-60: linear-gradient(90.32deg, rgba(255, 255, 255, 0.5) 10.9%, rgba(255, 255, 255, 0) 95.35%);
    --gr-gray-white-80: linear-gradient(141.08deg, rgba(255, 255, 255, 0.25) 13.56%, rgba(255, 255, 255, 0) 85.76%);

    --gr-yellow-50: linear-gradient(61.05deg, #F3BE00 -4.72%, #FBEC65 98.65%);

    --gr-orange-40: linear-gradient(180deg, #FFB37F 0%, #FF7B0D 100%);
    --gr-orange-60: linear-gradient(244.07deg, #FF8F71 47.24%, #EF2D1A 120.34%);

    --gr-blue-50: linear-gradient(230.92deg, #39AFFD -0.23%, #477FFF 100.3%);

    ${() => {
			let spacing = ''

			for (let i = 0; i < 50; i++) {
				spacing += `
          --f${i}: ${Number((i / 16).toFixed(2))}rem;
        `
			}

			return spacing
		}}

    ${() => {
			let spacing = ''

			for (let i = 50; i < 250; i += 5) {
				spacing += `
          --f${i}: ${Number((i / 16).toFixed(2))}rem;
        `
			}

			return spacing
		}}


    --fz-xl: var(--f24);
    --fz-base: var(--f16);
    --fz-sm: var(--f14);
    --fz-xsm: var(--f12);
    --fz-2xsm: var(--f8);

    --lh-xl: var(--f29);
    --lh-base: var(--f19);
    --lh-sm: var(--f18);
    --lh-xsm: var(--f14);
    --lh-2xsm: var(--f10);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input,
  button,
  body {
    font-family: 'Lato', sans-serif;
    color: var(--c-white);
  }

  ul, ol {
    list-style: none;
  }
`

export default GlobalStyle
