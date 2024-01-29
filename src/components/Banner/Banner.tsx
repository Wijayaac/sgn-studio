import React from 'react'

import styles from './Banner.module.css'
import Image from 'next/image'

function Banner() {
	return <div className={styles.banner}>
		<Image src="/banner.jpg" alt="Banner" width={1920} height={1080} className={styles['banner-image']} />
		<div className={styles['banner-wrapper']}>

			<div className={styles['banner-content']}>
				<h1 className={styles['banner-title']}>
					The inspired design
					<br />of tomorrow</h1>
				<p className={styles['banner-description']}>The innovative designs to enhance the human experience</p>
			</div>
		</div>
	</div>
}

export default Banner
