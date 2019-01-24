if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then((registration) => {
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
