/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link} from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import {motion} from 'framer-motion';
const navigation = [
  { name: 'Dashboard', to: 'admin', current: true },
  { name: 'Home', to: '/', current: false },
  { name: 'Movies', to: 'movies', current: false },
  { name: 'tv Series', to: 'series', current: false },
  { name: 'Anime', to: 'anime', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const logoVariants = {
  initial:{
    opacity:0,
    y:-200
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      type:'spring',
      stiffness:150,
      delay:1
    }
  }
}
const authVariants={
  initial:{
    opacity:0,
    x:'100vw'
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      stiffness:10,
      delay:1
    }
  }
}
const linksVariants={
  initial:{
    opacity:0,
    x:'50vw'
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      stiffness:20,
      delay:1
    }
  }
}
export default function Navbar() {
  return (
    <Disclosure as="nav" className="dark-color shadow-lg sticky w-full z-50 top-0"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <motion.div className="flex-shrink-0 text-white flex items-center"
                variants={logoVariants}
                initial='initial'
                animate='animate'
                >
                  <Link to={'/'} className='text-3xl'>MOVI<span className='text-color'>FLIX</span></Link>
                </motion.div>
                <div className="hidden sm:block sm:ml-6">
                  <motion.div className="flex space-x-4"
                     variants={linksVariants}
                     initial='initial'
                     animate='animate'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'pink-bg  text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </div>
              <motion.div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              variants={authVariants}
              initial='initial'
              animate='animate'
              >
                {/* heart icon */}
                <button>
                 <AiOutlineHeart className='text-3xl mx-3  cursor-pointer text-color  ' />
                </button>
                {/* bill icon */}
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to='/'
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </motion.div>
            </div>
          </div>
            
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}
