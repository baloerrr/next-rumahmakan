'use client'

import Image from "next/image";
import logo from "../../public/assets/logo.png"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
export default function NavDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Kelola Galeri", path: "/kelola-galeri" },
        { name: "Kelola Tentang Kami", path: "/kelola-tentangkami" },
        { name: "Kelola Ulasan", path: "/kelola-ulasan" },
        { name: "Kelola Menu", path: "/kelola-menu" },
    ];


    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-[#4F6C51]",
                ],
            }} isBordered onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="xl:-mx-44 ">
                <NavbarBrand>
                    <UserButton />
                </NavbarBrand>

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-[#4F6C51]"
                />
            </NavbarContent>

            <NavbarContent className="hidden xl:-mx-32 sm:flex xl:flex xl:gap-10 gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} isActive={pathname === item.path}>
                        <Link
                            className={pathname === item.path ? "text-[#4F6C51]" : "text-[#C2AD85]"}
                            aria-current={item.path ? "page" : undefined}
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu className="bg-[#4F6C51] pt-10">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className="mt-5" key={`${item.path}-${index}`}>
                        <Link
                            className="w-full text-[#E4E7C4] font-extralight hover:translate-x-4 hover:transition-all transition-all "
                            href={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>


    );
}
