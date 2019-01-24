if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://310venom.github.io/venom/sw.js').then((registration) => {
    // 登録成功
    registration.onupdatefound = () => {
      console.log('アップデートがあります！')
      registration.update()
    }
    console.log('ServiceWorker registration successful.')
  }).catch((err) => {
    console.log('ServiceWorker registration failed.')
  })
}
