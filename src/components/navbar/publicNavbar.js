import { useState } from 'react'
import {
  Dialog,
  Popover
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white text-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Middle Icons */}
        <Popover.Group className="hidden lg:flex lg:gap-x-14 font-semibold leading-6 text-lg">
          <Link href={"/investments"}>
            Investments
          </Link>
          <Link href={"/"}>
            How it Works
          </Link>
          <Link href={"/faq"}>
            FAQ
          </Link>
          <Link href={"/"}>
            Blog
          </Link>
        </Popover.Group>

        {/* Right Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="px-3 py-1 pb-1.5 mr-3 rounded hover:bg-gray-200 transition ease-in duration-200">
            <Link href={"/login"}>
              Log In
            </Link>
          </button>
          <button className="px-3 py-1 pb-1.5 border-solid border-2 border-midnight-black rounded-full
            bg-midnight-black hover:bg-white hover:text-midnight-black text-white transition ease-in duration-200">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="my-6 divide-y divide-gray-500/10 text-base font-semibold leading-9">
              <div className="space-y-2 py-6">
                <Link
                  href="/investments"
                  className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                >
                  Investments
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                >
                  How it Works
                </Link>
                <Link
                  href="/faq"
                  className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block px-3 py-2.5 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block px-3 py-2.5 hover:bg-gray-50"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}