import React from 'react'
import QRCodeReader from '@/components/QRCodeReader'

const QRCode = () => {
	return (
		<div className='w-screen flex justify-center items-center'>
			<QRCodeReader />
		</div>
	)
}

export default QRCode