"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const states = [
  { name: "Florida", slug: "florida", code: "FL" },
  { name: "Texas", slug: "texas", code: "TX" },
  { name: "California", slug: "california", code: "CA" },
  { name: "New York", slug: "new-york", code: "NY" },
  { name: "Tennessee", slug: "tennessee", code: "TN" },
  { name: "Illinois", slug: "illinois", code: "IL" },
  { name: "Pennsylvania", slug: "pennsylvania", code: "PA" },
  { name: "New Jersey", slug: "new-jersey", code: "NJ" },
  { name: "Arizona", slug: "arizona", code: "AZ" },
  { name: "Missouri", slug: "missouri", code: "MO" },
  { name: "North Carolina", slug: "north-carolina", code: "NC" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block">
              Padel Courts Finder
            </span>
            <span className="font-bold text-lg sm:hidden">
              Padel Finder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Browse States</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {states.map((state) => (
                        <li key={state.code}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/${state.slug}`}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">
                                {state.name}
                              </div>
                              <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                                Padel courts in {state.code}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/list-your-court" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      List Your Court
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild variant="default" size="sm">
              <Link href="/search">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-muted-foreground">
                      Browse by State
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {states.map((state) => (
                        <Link
                          key={state.code}
                          href={`/${state.slug}`}
                          className="text-sm hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {state.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>

                  <Link
                    href="/list-your-court"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    List Your Court
                  </Link>

                  <Button asChild className="w-full">
                    <Link href="/search" onClick={() => setIsOpen(false)}>
                      <Search className="w-4 h-4 mr-2" />
                      Search Courts
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
