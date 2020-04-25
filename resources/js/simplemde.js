Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-simplemde-field', require('./components/IndexField').default)
  Vue.component('detail-nova-simplemde-field', require('./components/DetailField').default)
  Vue.component('form-nova-simplemde-field', require('./components/FormField').default)
})
