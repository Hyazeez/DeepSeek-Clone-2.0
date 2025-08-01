import { assets } from '@/assets/icons/assets.js'
import Image from 'next/image'
import React, { useState } from 'react'

const PromptBox = ({setIsLoading, isLoading}) => {

    const [prompt, setPrompt] = useState('')

  return (
    <>
    <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
        <textarea className='outline-none w-full resize-none overflow-hidden break-words bg-transparent'
        rows={3}
        placeholder='Message DeepSeek' required
        onChange={(e)=> setPrompt(e.target.value)} value={prompt}/>
        <div className='flex items-center justify-between text-sm'>
            <div className='flex items-center gap-2'>
                <p className='flex items-center gap-2 text-xs border border-gray-300/40
                px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
                    <Image className='w-6 h-6' src={assets.deepthink} width={24} height={24} alt='deepthink'/>
                    DeepThink(R1)
                </p>
                <p className='flex items-center gap-2 text-xs border border-gray-300/40
                px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
                    <Image className='w-6 h-6' src={assets.search} width={24} height={24} alt='search'/>
                    Search
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <Image className='w-6 cursor-pointer' src={assets.attach} alt='attach'/>
                <button className={`${prompt ? "bg-primary" : "bg-[#71717a]"} rounded-full p-2 cursor-pointer`}>
                    <Image className='w-4 aspect-square' src={prompt ? assets.send : assets.send2} width={24} height={24} alt='deepthink'/>
                </button>
            </div>
        </div>
    </form>
    </>
  )
}

export default PromptBox;