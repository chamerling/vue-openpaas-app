export default () => ({
  // check webpack config
  baseUrl: process.env.OPENPAAS || 'https://openpaas.linagora.com',
  session: {
    jwtToken: localStorage.getItem('default_auth_token'),
    user: null
  },
  notifications: {
    unread: 0
  },
  ui: {
    nightMode: JSON.parse(localStorage.getItem('night_mode'))
  }
});
