new Vue({
  el: '#app',
  data: {
    message: 'こんにちは、Vue.js！',
    url: 'http://www.wings.msn.to/',
    current: new Date().toLocaleString()
  },
  computed: {
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    randomm: function() {
      return Math.random();
    }
  }
});

