import { useState } from 'react';

import './App.css';

import ConfigOptionsComponent from './components/ConfigOptionsComponent';
import QRCodeBox from './components/QRCodeBox';
import SharedOptions from './components/SharedOptions';
import QRCodeInputComponent from './components/QRCodeInputComponent';

const App = () => {

  const [QRCodeColor, setQRCodeColor] = useState('#000000')
  const [QRCodeBackgroundColor, setQRCodeBackgroundColor] = useState('#ffffff')
  const [QRCodeText, setQRCodeText] = useState('')

  const updateQRCodeColor = 
    (color: string) => setQRCodeColor(color)

  const updateQRCodeBackgroundColor = 
    (color: string) => setQRCodeBackgroundColor(color)

  const updateQRCodeText = 
    (text: string) => setQRCodeText(text)

  return (
    <div className="App">
      <ConfigOptionsComponent
        QRCodeColor={QRCodeColor}
        QRCodeBackgroundColor={QRCodeBackgroundColor}
        updateQRCodeBackgroundColor={updateQRCodeBackgroundColor}
        updateQRCodeColor={updateQRCodeColor}
      />
      <QRCodeInputComponent updateQRCodeText={updateQRCodeText} />
      <QRCodeBox
        QRCodeColor={QRCodeColor}
        QRCodeBackgroundColor={QRCodeBackgroundColor}
        QRCodeText={QRCodeText}
      />
      <SharedOptions
        QRCodeColor={QRCodeColor}
        QRCodeBackgroundColor={QRCodeBackgroundColor}
        QRCodeText={QRCodeText}
      />
    </div>
  );
}

export default App;
