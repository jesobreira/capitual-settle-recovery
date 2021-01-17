import BinanceLogo from '~/images/logo/binance.png';
import SandboxLogo from '~/images/logo/sandbox.png';

let PartnerLogo

if (window.location.host.includes("binance"))
	PartnerLogo = BinanceLogo
else
	PartnerLogo = SandboxLogo

export default BinanceLogo