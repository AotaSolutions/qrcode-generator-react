import './style.css'

interface QRCodeInputComponentProps {
  updateQRCodeText: any
}

const QRCodeInputComponent = ({ updateQRCodeText }: QRCodeInputComponentProps) => {
  return (
    <div className="QRCodeInput">
      <input 
        type="text"
        onChange={event => updateQRCodeText(event.target.value)}
        placeholder="Digite seu QRCode"/>
    </div>
  )
}

export default QRCodeInputComponent