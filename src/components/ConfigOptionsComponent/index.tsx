import './style.css'

interface ConfigOptionsComponentProps {
  QRCodeColor: string
  QRCodeBackgroundColor: string
  updateQRCodeBackgroundColor: any
  updateQRCodeColor: any
}

const ConfigOptionsComponent = ({
  QRCodeColor,
  QRCodeBackgroundColor,
  updateQRCodeBackgroundColor,
  updateQRCodeColor
}: ConfigOptionsComponentProps) => {
  return (
    <div className="config-options">
      <input 
        type="color"
        onChange={event => updateQRCodeColor(event.target.value)}
        value={`${QRCodeColor}`}
      />
      <input 
        type="color"
        onChange={event => updateQRCodeBackgroundColor(event.target.value)}
        value={`${QRCodeBackgroundColor}`}
      />
    </div>
  )
}

export default ConfigOptionsComponent