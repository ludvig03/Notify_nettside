/* This example requires Tailwind CSS v2.0+ */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Klode from "./Klode.jsx"
import notifyicon from "./images/Notify-3.png"



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

// const userAction = async () => {
//     const response = await fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=4b6185ec98614f62a2a0dd56a1850ed1");
//     const myIp = await response.json(); //extract JSON from the http response
//     console.log(myIp)
// }

// userAction()




// async function download(url) {
//     const a = document.createElement("a");
//     a.href = await toDataURL(url);
//     a.download = "myImage.png";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   }

//   function toDataURL(url) {
//     return fetch(url)
//       .then((response) => {
//         return response.blob();
//       })
//       .then((blob) => {
//         return URL.createObjectURL(blob);
//       });
//   }

// function getImage() {
//     download("https://api.mapbox.com/styles/v1/toastedbread48/cl839iz82007c14n55lu6gp4y/static/10.7359247,59.943123,20/1280x1280?access_token=pk.eyJ1IjoidG9hc3RlZGJyZWFkNDgiLCJhIjoiY2w4Mzh2aXE3MDNqODN3cDZ0b2NvN2FtZiJ9.ECoocvTOOyxsaOV-BSBYUg");
// }





export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-gray-800 pt-6">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto sm:h-10 fill-slate-50"
                    src={notifyicon}
                    alt=""
                    
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:ml-10 md:flex">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                Log in
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
              >
                Start free trial
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden">
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={notifyicon}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-notify-green">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="block w-full rounded-md bg-notify-green py-3 px-4 text-center font-medium text-white shadow hover:bg-indigo-700"
                  >
                    Start free trial
                  </a>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-gray-900 hover:underline">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="bg-gray-800 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-12">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:pb-12 lg:pt-0">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">En enklere måte å</span>
                    <span className="inline-block text-notify-green">kommunisere</span><span className="inline-block pl-3">med</span>
                    <span className="block text-notify-green">dine naboer</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <button
                        type="button"
                        className=" cursor-pointer w-48 mr-12 inline-flex items-center rounded border border-transparent font-medium text-white shadow-sm"
                        >
                        <img src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo-700x207.png"></img>
                    </button>
                    <button
                        type="button"
                        onClick={console.log("yo")}
                        className="w-48 inline-flex items-center rounded border border-transparent font-medium text-white shadow-sm"
                        >
                        <img src="https://anydesk.com/_static/img/badges/Available_GooglePlay-55dc42.svg"></img>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="max-w-lg px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 ">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <Klode/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
