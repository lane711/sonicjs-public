export function SmartLook(props) {
  const code = `
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '${process.env.SMART_LOOK}', { region: 'eu' });
  `
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
