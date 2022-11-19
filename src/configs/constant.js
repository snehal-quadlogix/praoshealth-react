// You can default set config and constant in this file

//App config options
const constantConfig = {
    app: {
      appName: process.env.REACT_APP_BASENAME || 'Praos Health Inc',
      appLogoImage: require('@assets/images/logo/logo.png')
    },
    api: {
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3010'
    }
  }
  
  export default constantConfig
  