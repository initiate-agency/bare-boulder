'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import { Disclosure } from '@headlessui/react'

type MenuProps = {
  companyLogoUrl?: string
  navigation: { name: string; href: string }[]
}

export const MainMenu: React.FC<MenuProps> = ({
  companyLogoUrl,
  navigation
}) => {
  const pathName = usePathname()
  const isDetailPage = (path: string) => pathName?.includes(path)

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-auto"
                      src={companyLogoUrl || ''}
                      alt=""
                      unoptimized
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      isDetailPage(item.href)
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={isDetailPage(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  >
                    Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    isDetailPage(item.href)
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={isDetailPage(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

// ;<header className="sticky z-10 w-full border-b bg-white shadow-md">
//   <nav
//     className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 xl:px-0"
//     aria-label="Global"
//   >
//     <div className="flex lg:flex-1">
//       <Link href="/" className="-m-1.5 p-1.5">
//         <span className="sr-only">Your Company</span>
//         <Image
//           width={32}
//           height={32}
//           className="h-10 w-auto"
//           src={companyLogoUrl || ''}
//           alt=""
//           unoptimized
//         />
//       </Link>
//     </div>
//     <div className="flex lg:hidden">
//       <button
//         type="button"
//         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//         onClick={() => setMobileMenuOpen(true)}
//       >
//         <span className="sr-only">Open main menu</span>
//         <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//       </button>
//     </div>
//     <div className="hidden lg:flex lg:gap-x-12">
//       {navigation.map((item) => (
//         <Link
//           key={item.name}
//           href={item.href}
//           className={clsx(
//             'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-sky-300 hover:text-sky-500',
//             isDetailPage(item.href) ? 'text-sky-500' : 'text-gray-900'
//           )}
//         >
//           {item.name}
//         </Link>
//       ))}
//     </div>
//     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//       {/*eslint-disable-next-line @next/next/no-html-link-for-pages*/}
//       <a
//         // href={process.env.NEXT_PUBLIC_CMS_URL + '/admin'}
//         href={'#'}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
//       >
//         Free Consultation
//       </a>
//     </div>
//   </nav>
//   <Dialog
//     as="div"
//     className="lg:hidden"
//     open={mobileMenuOpen}
//     onClose={setMobileMenuOpen}
//   >
//     <div className="fixed inset-0 z-10" />
//     <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//       <div className="flex items-center justify-between">
//         <a href="#" className="-m-1.5 p-1.5">
//           <span className="sr-only">Your Company</span>
//         </a>
//         <button
//           type="button"
//           className="-m-2.5 rounded-md p-2.5 text-gray-700"
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           <span className="sr-only">Close menu</span>
//           <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//         </button>
//       </div>
//       <div className="mt-6 flow-root">
//         <div className="-my-6 divide-y divide-gray-500/10">
//           <div className="space-y-2 py-6">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//           <div className="py-6">
//             <a
//               href={process.env.NEXT_PUBLIC_CMS_URL + '/admin'}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//             >
//               Log in
//             </a>
//           </div>
//         </div>
//       </div>
//     </Dialog.Panel>
//   </Dialog>
// </header>
