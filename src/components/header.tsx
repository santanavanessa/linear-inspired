"use client"

import Link from "next/link"
import { Logo } from "./icons/logo"
import { Container } from "./container"
import { Button } from "./button"
import { HamburgerIcon } from "./icons/hamburger"
import { useEffect, useState } from "react"
import classNames from "classnames"

export const Header = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    useEffect(() => {
        const closetHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
        window.addEventListener("orientationChange", closetHamburgerNavigation);
        window.addEventListener("resize",closetHamburgerNavigation);
        return () => {
            window.removeEventListener("orientationChange", closetHamburgerNavigation)
            window.removeEventListener("resize", closetHamburgerNavigation)
        }
    }, [setHamburgerMenuIsOpen]);

    useEffect(() => {
        const html = document.querySelector("html")
        if (html)  html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
        
    }, [hamburgerMenuIsOpen])

    useEffect(() => {
        window.addEventListener('orientationchange', () => {})
        window.addEventListener('resize', () => {})
    })
    
    return (
        <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
           <Container className="flex h-navigation-height">
                <Link className="flex items-center text-md" href="/">
                        <Logo className="w-[1.8rem] h-[1.8rem] mr-4"/> Linear
                </Link>

                <div className={classNames(
                    "transition-[visibility] md:visible",
                    hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
                )}>
                <nav 
                    className={classNames(
                        "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none", 
                        hamburgerMenuIsOpen 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-[-100vw]"
                        
                        )}>
                    <ul className={classNames(
                       "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                        "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                        hamburgerMenuIsOpen && "[&_a]:translate-y-0"
                    )}
                >
                        <li>
                            <Link href="#">Features</Link>
                        </li>
                        <li>
                            <Link href="#">Method</Link>
                        </li>
                        <li>
                            <Link href="#" className="md:hidden lg:block">Customers</Link>
                        </li>
                        <li>
                            <Link href="#" className="md:hidden lg:block">Changelog</Link>
                        </li>
                        <li>
                            <Link href="#" className="md:hidden lg:block">Integrations</Link>
                        </li>
                        <li>
                            <Link href="#">Pricing</Link>
                        </li>
                        <li>
                            <Link href="#">Company</Link>
                        </li>
                        
                    </ul>
                </nav>

                </div>
               

                <div className="ml-auto h-full flex items-center">
                    <Link className="text-sm mr-6" href="#">Log in</Link>
                    <Button href="#" variant="primary">Sign up</Button>
                </div>
                <button 
                    className="ml-6 md:hidden" 
                    onClick={() => setHamburgerMenuIsOpen(open => !open)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <HamburgerIcon/>
                </button>
           </Container>
        </header>
    )
    
}