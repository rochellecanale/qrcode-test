'use client'
import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

const QRCodeReader = () => {

	const [scanResult, setScanResult] = useState<string | null>(null)

	useEffect(() => {

		const scanner = new Html5QrcodeScanner('reader', {
			qrbox: {
				width: 100,
				height: 100
			},
			fps: 5,
		}, false)

		const success = (result: string) => {
			scanner.clear()
			setScanResult(result)
		}

		const error = (err: string) => {
			console.warn(err)
		}

		scanner.render(success, error)
		
	}, [])

	return (
		<div>
			<h1>QR Code Scanner</h1>

			{
				scanResult 
				? <div>Success: { scanResult }</div>
				: <div id="reader"></div>
			}

		</div>
	)
}


export default QRCodeReader