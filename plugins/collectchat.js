/* eslint-disable */

export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV !== 'production') return
  /*
   ** Include Google Analytics Script
   */
  ;(function(w, d) {
    w.CollectId = '5dce661ccd80573657e878ad'
    var h = d.head || d.getElementsByTagName('head')[0]
    var s = d.createElement('script')
    s.setAttribute('type', 'text/javascript')
    s.setAttribute('src', 'https://collectcdn.com/launcher.js')
    h.appendChild(s)
  })(window, document)
}
