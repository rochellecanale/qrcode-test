'use client'
import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

const QRCodeReader = () => {

	const [scanResult, setScanResult] = useState<string | null>(null)

	useEffect(() => {

		const scanner = new Html5QrcodeScanner('reader', {
			qrbox: {
				width: 250,
				height: 250
			},
			fps: 5,
		}, false)
	

		const onScanSuccess = (decodedText: any, decodedResult: any) => {
			scanner.clear()
			setScanResult(decodedResult)
			console.log(`Scan result: ${decodedText}`, decodedResult);
		}

		const onScanError = (errorMessage: string) => {
			console.warn(errorMessage)
		}

		scanner.render(onScanSuccess, onScanError)

		console.log('init...')
		console.log(scanner)

	}, [])

	return (
		<div>
			<h1>QR Code Scanner</h1>

			{
				scanResult 
				? <div>Success: { scanResult }</div>
				: <div id="reader" className='w-[200px] h-[200px]'></div>
			}

		</div>
	)
}


export default QRCodeReader