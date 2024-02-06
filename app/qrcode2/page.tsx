'use client'
import React from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner'

const QRCode2 = () => {

	const handleSuccess = (result: any) => {
		console.log('result', result)
	}

	return (
		<div className='flex w-full h-screen justify-center align-middle items-center'>
			<div className='w-[400px] h-[400px] border-2 border-solid p-4'>
				<QrScanner 
					onDecode={(result) => handleSuccess(result)}
					onError={(error) => console.log(error?.message)}
				/>
			</div>
		</div>
	
	)
}

export default QRCode2