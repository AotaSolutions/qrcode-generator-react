import { QRCodeSVG } from 'qrcode.react';

import './style.css'

interface QRCodeBoxProps {
  QRCodeColor: string
  QRCodeBackgroundColor: string
  QRCodeText: string
}

const QRCodeBox = ({
  QRCodeColor,
  QRCodeBackgroundColor,
  QRCodeText,
}: QRCodeBoxProps) => {
  return (
    <div className="QRCodeBox">
      <QRCodeSVG
        value={QRCodeText}
        fgColor={QRCodeColor}
        bgColor={QRCodeBackgroundColor}
      />
    </div>
  )
}

export default QRCodeBox