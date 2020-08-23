export default function swDev(){
    let swUrl=`${process.env.PUBLIC_URL}/sw.js`
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(swUrl)
        .then(function(registration) {
          console.log('Registration successful, scope is:', registration);
        })
        .catch(function(error) {
          console.log('Service worker registration failed, error:', error);
        });
      }
}
