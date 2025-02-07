import React, { useContext } from 'react'
import { UserContext } from '../Portfolio'
import {PhoneCall , Home , Mail , ArrowUp} from 'react-feather'

function Contact() {

    const {about} = useContext(UserContext)

    return (
        <section id='contact'>
            <div className='mb-28'>

            
             <div className='text-center'>
            <h1 id='Skills' className='text-5xl font-semibold pt-4'>CONTACT ME</h1>
             <p className='text-md pt-2 mb-20'>LET’S <b className='text-hover-color font-some text-3xl'>Talk About Ideas</b></p>
             </div>

            <div className='lg:flex justify-evenly w-full'>
            <div className='lg:w-1/2 px-10'>
            <form action='/' className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>Your Full Name <span className='text-red-500'>*</span></label>
                <input type='text' id='name' name='name' className='w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-hover-color' required />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Your Email Address <span className='text-red-500'>*</span></label>
                <input type='email' id='email' name='email' className='w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-hover-color' required />
              </div>
              <div className='mb-4'>
                <label htmlFor='subject' className='block text-gray-700 text-sm font-bold mb-2'>Your Subject <span className='text-red-500'>*</span></label>
                <input type='text' id='subject' name='subject' className='w-full px-3 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-hover-color' required />
              </div>
              <div className='mb-6'>
                <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2'>Your Message <span className='text-red-500'>*</span></label>
                <textarea id='message' name='message' rows='6' className='w-full px-3 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-hover-color resize-none' required></textarea>
              </div>
              <div className='flex justify-center'>
                <button type='submit' className='bg-hover-color hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
              </div>
            </form>
            </div>
            <div className='flex flex-col gap-5 tracking-wider pl-10 mt-32 lg:mt-2 '>
                <h1 className='font-serif text-4xl font-semibold pb-10'>GET IN TOUCH</h1>
               <div className='flex items-center mb-3'>
                <PhoneCall size={45} className='text-hover-color mr-3'/>
                <div>
                <h1 className='text-xl font-semibold'>Phone Number</h1>
                <p className='text-md pt-2 font-serif'>{about.phoneNumber}</p>
                    </div> 
               </div> 
               <div className='border-gray-600 w-4/5 border-[1px]'>

               </div>
               <div className='flex my-2 items-center' >
                <Home size={45} className='text-hover-color mr-3'/>
                <div>
                <p className='font-serif'>{about.address}</p>
                    </div> 
               </div> 
               <div className='border-gray-600 w-4/5 border-[1px]'>
                </div>
               <div className='flex items-center mt-3' >
                <Mail size={45} className='text-hover-color mr-3'/>
                <div>
                <h1 className='text-xl font-semibold '>Email</h1>
                <p className='font-serif pt-2'>portfolio3@gmail.com</p>
                    </div> 
               </div> 
         
              
            </div>

            </div>

             </div>
             <div className='flex lg:justify-evenly justify-between border-t-[1px] border-gray-700'>
                <div>
                <h1 className='lg:text-md text-xs font-semibold opacity-75 pt-5 pb-2 pl-12 '>Copyright & Design By John doe</h1>

                </div>
                <div className='lg:text-md text-xs border-l-[1px] border-r-[1px] border-gray-700 font-semibold opacity-75 pt-5 pb-2 px-2'> <a href="#home" className='flex '>BACK TO TOP <ArrowUp className='pb-1 mb-1'/></a> </div>
             </div>

             


        </section>
        
    )
}

export default Contact
