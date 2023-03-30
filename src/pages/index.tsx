import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import {
  MdExplore,
  MdGroup,
  MdOndemandVideo,
  MdBusinessCenter,
  MdArrowForwardIos,
} from 'react-icons/md'
import { GiCompass } from 'react-icons/gi'

import HeaderLink from '$components/HeaderLink'
import social_logo from '$public/social_logo.png'
import hero_svg from '$public/hero.svg'
import Sidebar from '$components/Sidebar'
import Feed from '$components/Feed'
import Modal from '$components/Modal'
import AddPostForm from '$components/AddPostForm'
import Footer from '$components/Footer'
import Widgets from '$components/Widgets'
import Post from '$components/Post'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn: Log In or Sign Up | Next</title>
      </Head>

      <header>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="block h-[21px] w-[84px] lg:h-[34px] lg:w-[135px]"
          >
            <Image src={social_logo} alt="makutano logo" />
          </Link>

          <div className="align-center flex items-center divide-amber-800/80 sm:divide-x">
            <div className="hidden space-x-8 pr-4 sm:flex">
              {/* Header links */}
              <HeaderLink Icon={GiCompass}>Discover</HeaderLink>
              <HeaderLink Icon={MdGroup}>People</HeaderLink>
              <HeaderLink Icon={MdOndemandVideo}>Learning</HeaderLink>
              <HeaderLink Icon={MdBusinessCenter}>Opportunities</HeaderLink>
            </div>
            <div className="pl-4">
              <button
                onClick={() => signIn()}
                className="rounded-[10px] border border-amber-800/80 px-5 py-1.5 font-semibold text-amber-800/80 transition-all hover:border-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center overflow-hidden">
        <section className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col flex-nowrap items-center px-4 pt-10 md:flex-row">
          <div className="w-full flex-shrink-0 space-y-6 self-start pr-0 md:w-[55%] md:pr-12 lg:space-y-10">
            <h1 className="max-w-xl text-3xl font-extralight !leading-snug text-amber-800/80 md:text-5xl">
              Welcome to the ELP community
            </h1>
            <Sidebar />
            <Feed />
            {/* <Modal />
            <AddPostForm />
            <Widgets /> */}
            <Post />
            <Footer />
            {/* <div className="space-y-4">
              <div className="intent">
                <h2 className="text-xl">Search for a job</h2>
                <MdArrowForwardIos className="mui-icon t-secondary" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Find a person you know</h2>
                <MdArrowForwardIos className="mui-icon t-secondary" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Learn a new skill</h2>
                <MdArrowForwardIos className="mui-icon t-secondary" />
              </div>
            </div> */}
          </div>

          <div className="static -z-[1] mt-8 block h-[214px] w-[374px] flex-shrink md:relative md:mt-0 md:min-h-[540px] md:min-w-[700px]">
            <Image
              src={hero_svg}
              alt="Welcome to your professional community"
              priority
            />
          </div>
        </section>

        <p className="mb-6 mt-14 text-sm font-semibold">
          Please note this site is a CLONE built for learning purpose only.
        </p>
      </main>
    </div>
  )
}
