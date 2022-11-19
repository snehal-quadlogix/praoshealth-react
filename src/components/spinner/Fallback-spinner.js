// ** for import config
import constantConfig from "@configs/constant"

const SpinnerComponent = () => {
  return (
    <div className="text-center">
      <img className="fallback-logo" src={constantConfig.app.appLogoImage} alt="logo" />
      <div className="loading text-center">
        Loading...
      </div>
    </div>
  )
}

export default SpinnerComponent
