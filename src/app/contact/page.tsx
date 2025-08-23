import React from 'react'
import GitHubTooltip from '../../../components/githubTooltip'
import SocialTooltip from '../../../components/tooltip'

const page = () => {
  return (
    <>
    
   <div className="min-h-screen bg-black text-white">
    <section className="pt-22 pb-20 px-6">
      <SocialTooltip/>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          CONTACT
          <br />
          ME
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
      </div>
    <GitHubTooltip/>
    </section>
    </div>
    
    </>
    
  )
}

export default page