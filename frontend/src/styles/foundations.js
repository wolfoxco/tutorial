export default function foundations() {
  const foundations = document.createElement('style')
  foundations.innerHTML = `
    body {
      min-height: 100vh;
      background-color: #fafafa;
      font-family: 'Open Sans';
    }
    * {
      box-sizing: border-box;
    }
  `
  return foundations
}
