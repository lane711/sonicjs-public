export function GoogleTag(props) {
  const code = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${process.env.GOOGLE_ANALYTICS}');
    `
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}"
      ></script>
      <script dangerouslySetInnerHTML={{ __html: code }} />
    </>
  )
}
