import ReactDOM from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';
import { saveAs } from 'file-saver';

import './style.css'

interface SharedOptionsProps {
  QRCodeColor: string
  QRCodeBackgroundColor: string
  QRCodeText: string
}

const SharedOptions = ({
  QRCodeColor,
  QRCodeBackgroundColor,
  QRCodeText
}: SharedOptionsProps) => {

  const downloadQRCode = () => {
    const QRCodeSvg = <QRCodeSVG
      value={QRCodeText}
      fgColor={QRCodeColor}
      bgColor={QRCodeBackgroundColor}
    />

    const container = document.createElement('div')
    ReactDOM.render(QRCodeSvg, container)
    const svgElement = container.firstChild as unknown as HTMLElement
    const svgData = new XMLSerializer().serializeToString(svgElement)
    const blob = new Blob([svgData], {type: 'image/svg+xml'})
    saveAs(blob, 'qrcode.svg')
  }

  return (
    <div className="sharedOptions">
      <button onClick={downloadQRCode} >Download</button>
      <button>Compartilhar</button>
    </div>
  )
}

export default SharedOptions