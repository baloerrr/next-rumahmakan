'use client'
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import { animatePageIn } from "./utils/animation";

export default function Provider({ children }) {
    useEffect(()=>{
        animatePageIn()
    },[])
    return (
        <NextUIProvider>
            <div id="banner-1" className="min-h-screen bg-neutral-900 z-50 fixed top-0 left-0  w-1/4">
            </div>
            <div id="banner-2" className="min-h-screen bg-neutral-900 z-50 fixed top-0 left-1/4  w-1/4">
            </div>
            <div id="banner-3" className="min-h-screen bg-neutral-900 z-50 fixed top-0 left-2/4  w-1/4">
            </div>
            <div id="banner-4" className="min-h-screen bg-neutral-900 z-50 fixed top-0 left-3/4  w-1/4">
            </div>
            {children}
        </NextUIProvider>
    );
}