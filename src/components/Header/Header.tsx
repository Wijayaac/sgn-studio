'use client'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

import styles from './Header.module.css'

function Header() {
	const headerNav = useRef<HTMLElement>(null)
	const headerToggle = useRef<HTMLButtonElement>(null)
	const header = useRef<HTMLElement>(null)

	const [isScrolled, setIsScrolled] = useState(false)
	useEffect(() => {

		const handleClick = () => {
			if (!headerNav.current && !headerToggle.current) {
				return
			}

			let isExpanded = headerToggle.current?.getAttribute('aria-expanded')

			if (isExpanded === 'false') {
				headerToggle.current?.setAttribute('aria-expanded', 'true')
				headerNav.current?.setAttribute('data-visible', 'true')

			} else {
				headerToggle.current?.setAttribute('aria-expanded', 'false')
				headerNav.current?.setAttribute('data-visible', 'false')
			}
		}

		headerToggle.current?.addEventListener('click', handleClick)


		return () => {
			headerToggle.current?.removeEventListener('click', handleClick)
		}
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScroll = () => {
		if (!header.current) {
			return
		}

		if (window.scrollY > 0) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	}


	return <header className={`${styles["header"]} ${isScrolled ? styles['scrolled'] : 'test'}`} ref={header}>
		<div className={styles["header__wrapper"]}>
			<div className={styles["header__logo"]}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
					<path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" />
					<path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" />
					<path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" />
					<path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
				</svg>
			</div>
			<button className={styles["header__toggle"]} aria-controls="header__nav" aria-expanded="false" ref={headerToggle}>
				<span className={styles["sr-only"]}>Menu</span>
				<span className={styles["open"]}>
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
						<path fill="black" fillRule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5" clipRule="evenodd" />
					</svg>
				</span>
				<span className={styles["close"]}>
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<g fill="none" fillRule="evenodd">
							<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
							<path fill="black" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z" />
						</g>
					</svg>
				</span>
			</button>
			<nav className={styles["nav"]} data-visible="false" ref={headerNav}>
				<ul className={styles["header__nav"]}>
					<li className={styles["nav__item"]}>
						<a href="index.html" className={styles["nav__link"]}> Tentang Kami </a>
					</li>
					<li className={styles["nav__item"]}>
						<a href="index.html" className={styles["nav__link"]}> Portfolio </a>
					</li>
					<li className={styles["nav__item"]}>
						<a href="index.html" className={styles["nav__link"]}> Contact </a>
					</li>
					<li className={styles["nav__item"]}>
						<a href="index.html" className={styles["nav__link"]}> Gallery </a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
}

export default Header
