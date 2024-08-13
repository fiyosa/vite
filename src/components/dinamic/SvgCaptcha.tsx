import { ChangeEvent, useEffect, useState } from 'react'
import svgCaptcha from 'svg-captcha-browser'
import { logInfo } from '../../utils/helper'

export default function SvgCaptcha() {
  const [captchaData, setCaptchaData] = useState<string>('')
  const [captchaText, setCaptchaText] = useState<string>('')
  const [userInput, setUserInput] = useState<string>('')
  const [isVerified, setIsVerified] = useState<boolean>(false)

  const generateCaptcha = () => {
    svgCaptcha
      .loadFont('../../assets/resource/comismsh.ttf')
      .then(() => {
        const captcha = svgCaptcha.create({
          size: 5, // Number of characters in the CAPTCHA
          noise: 2, // Amount of noise/lines in the image
          color: true, // Enable color in the CAPTCHA
          ignoreChars: '0O1Il5S2Z6G8B9Q', // filter out some characters like 0o1i
          background: '#ccffcc', // Background color of the CAPTCHA
        })
        logInfo({ captcha })

        setCaptchaData(captcha.data) // SVG string
        setCaptchaText(captcha.text) // Text for verification
        setUserInput('') // Reset user input
        setIsVerified(false) // Reset verification status
        // {data: '<svg.../svg>', text: 'abcd'}
      })
      .catch((e) => {
        logInfo(e)
      })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const verifyCaptcha = () => {
    if (userInput === captchaText) {
      setIsVerified(true)
      alert('CAPTCHA Verified!')
    } else {
      alert('CAPTCHA Incorrect. Please try again.')
      generateCaptcha()
    }
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  return (
    <div>
      {/* Display CAPTCHA */}
      <div dangerouslySetInnerHTML={{ __html: captchaData }} />
      <br />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* Input for user to enter CAPTCHA text */}
          <input
            type="text"
            style={{ height: '30px' }}
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter CAPTCHA"
          />

          {/* Button to regenerate CAPTCHA */}
          <button onClick={generateCaptcha}>Regenerate CAPTCHA</button>
        </div>

        {/* Button to verify CAPTCHA */}
        <button onClick={verifyCaptcha}>Verify</button>
      </div>

      {/* Display message if CAPTCHA is successfully verified */}
      {isVerified && <div>CAPTCHA is correct!</div>}
    </div>
  )
}
