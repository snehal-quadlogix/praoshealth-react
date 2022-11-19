// ** for import config
import constantConfig from "@configs/constant"

const Footer = () => {
    return (
      <div className='footer'>
        <p>
          COPYRIGHT © {new Date().getFullYear()}{' '}{constantConfig.app.appName}
        </p>
      </div>
    )
  }
  
  export default Footer
  