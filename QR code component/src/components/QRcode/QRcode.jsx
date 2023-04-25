import image from '../../../public/image-qr-code.png'
import './QRcode.css'

function QRcode() {
  
    return (
      <>
      <div className="qrcode__box">
        <img src={image} alt="QR code" />
      </div>
      </>
    )
  }
  
  export default QRcode