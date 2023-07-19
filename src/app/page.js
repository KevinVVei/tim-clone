import Image from 'next/image'


export default function Home() {
  return (
    <main className="">
      {/* nav */}
      <div className='w-full h-20 mx-0 my-auto p-8 text-white' style={{ backgroundColor: 'rgb(200, 16, 46' }}>
        <div className='flex flex-row justify-between h-full'>
          <section className='flex flex-row items-center overflow-hidden p-1.5 max-h-12' style={{maxWidth: '40%'}}>
            <a href="" className='ml-5'>Menu</a>
            <a href="" className='ml-5'>Tims for Good</a>
            <a href="" className='ml-5'>More</a>
          </section>
          <section className='text-3xl' style={{lineHeight: '7px'}}>Tim Hortons</section>
          <section className='flex flex-row items-center p-1.5 h-full'>
            <button className='rounded-full py-1.5 px-6 mr-4 bg-white' style={{ color: 'rgb(200, 16, 46' }}>
              Sign In
            </button>
            <section className='flex items-center h-full py-1.5 px-6'>
              <a href="">
                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.312 7.94a1.49 1.49 0 0 0-1.062-.44h-3v-.75a5.25 5.25 0 1 0-10.5 0v.75h-3A1.5 1.5 0 0 0 2.25 9v10.125c0 1.828 1.547 3.375 3.375 3.375h12.75c.884 0 1.734-.346 2.366-.963a3.256 3.256 0 0 0 1.009-2.353V9a1.489 1.489 0 0 0-.438-1.06ZM8.25 6.75a3.75 3.75 0 0 1 7.5 0v.75h-7.5v-.75Z"></path>
                </svg>
              </a>
            </section>
          </section>
        </div>
      </div>

      <div className='h-20'></div>

      {/* content body */}
      <main className='block w-2/5 p-10' style={{margin: '0 auto', height: '702px'}}>
      <div className='flex flex-row items-center '>
          <div className='w-3/5 mt-16'>
            <section>
              <p className='text-6xl font-bold'>Get ready for Camp Day: July 19</p>
            </section>
            <section className='mt-8'>
              <span>You can help change young peoples’ lives. Toggle on Round Up now in your Tims app to support Tim Hortons Foundation Camps and order limited-edition merch today.</span>
            </section>

            
          <section className='mt-8'>
            <button className='rounded-full py-3 px-6 mr-4 text-white' style={{ backgroundColor: 'rgb(200, 16, 46' }}>Learn More</button>
          </section>
        </div>
        <div className='w-2/5 h-100'>
          <section></section>
          <section>
            <Image
              src='/tim.jpg'
              width={500}
              height={700}
              alt='tim'
            />
          </section>
        </div>
        </div>
      </main>

      <div className='min-h-screen' style={{backgroundColor: 'rgb(249, 245, 238)'}}>
      <main className='grid gap-4 grid-cols-2 w-fit pt-4' style={{ margin: '0 auto'}}>
        <div className='w-fit  bg-white' >
          <div className=' rounded-md'>
            <Image
              className='rounded-md'
              src='/tim.jpg'
              width={560}
              height={440}
              alt='tim'
            />
          </div>
          <div className='flex flex-row' style={{maxWidth:'560px'}}>
            <section className='w-2/3'>
              <span className='text-base'>Camp Day: Show your support now</span>
              <p className='text-xs'>On July 19, 100% of proceeds from the sale of select items will be donated to Tims Camps.* Don’t wait until Camp Day—Toggle on Round Up in your Tims app to support Tims Camps. *Terms apply.</p>
            </section>
            <section className='w-1/3 mt-9 ml-28' >
              <button className='rounded-full py-3 px-6 text-white' style={{ backgroundColor: 'rgb(200, 16, 46' }}>Learn More</button>
            </section>
          </div>
        </div>

        <div className='w-fit  bg-white' >
          <div className=' rounded-md'>
            <Image
              className='rounded-md'
              src='/tim.jpg'
              width={560}
              height={440}
              alt='tim'
            />
          </div>
          <div className='flex flex-row' style={{maxWidth:'560px'}}>
            <section className='w-2/3'>
              <span className='text-base'>Camp Day: Show your support now</span>
              <p className='text-xs'>On July 19, 100% of proceeds from the sale of select items will be donated to Tims Camps.* Don’t wait until Camp Day—Toggle on Round Up in your Tims app to support Tims Camps. *Terms apply.</p>
            </section>
            <section className='w-1/3 mt-9 ml-28' >
              <button className='rounded-full py-3 px-6 text-white' style={{ backgroundColor: 'rgb(200, 16, 46' }}>Learn More</button>
            </section>
          </div>
        </div>
        <div className='w-fit bg-white' >
          <div className=' rounded-md'>
            <Image
              className='rounded-md'
              src='/tim.jpg'
              width={560}
              height={440}
              alt='tim'
            />
          </div>
          <div className='flex flex-row' style={{maxWidth:'560px'}}>
            <section className='w-2/3'>
              <span className='text-base'>Camp Day: Show your support now</span>
              <p className='text-xs'>On July 19, 100% of proceeds from the sale of select items will be donated to Tims Camps.* Don’t wait until Camp Day—Toggle on Round Up in your Tims app to support Tims Camps. *Terms apply.</p>
            </section>
            <section className='w-1/3 mt-9 ml-28' >
              <button className='rounded-full py-3 px-6 text-white' style={{ backgroundColor: 'rgb(200, 16, 46' }}>Learn More</button>
            </section>
          </div>
        </div>
        <div className='w-fit  bg-white' >
          <div className=' rounded-md'>
            <Image
              className='rounded-md'
              src='/tim.jpg'
              width={560}
              height={440}
              alt='tim'
            />
          </div>
          <div className='flex flex-row' style={{maxWidth:'560px'}}>
            <section className='w-2/3'>
              <span className='text-base'>Camp Day: Show your support now</span>
              <p className='text-xs'>On July 19, 100% of proceeds from the sale of select items will be donated to Tims Camps.* Don’t wait until Camp Day—Toggle on Round Up in your Tims app to support Tims Camps. *Terms apply.</p>
            </section>
            <section className='w-1/3 mt-9 ml-28' >
              <button className='rounded-full py-3 px-6 text-white' style={{ backgroundColor: 'rgb(200, 16, 46' }}>Learn More</button>
            </section>
          </div>
        </div>
        <div className='w-fit  bg-white' >
          <div className=' rounded-md'>
            <Image
              className='rounded-md'
              src='/tim.jpg'
              width={560}
              height={440}
              alt='tim'
            />
          </div>
          <div className='flex flex-row' style={{maxWidth:'560px'}}>
            <section className='w-2/3'>
              <span className='text-base'>Camp Day: Show your support now</span>
              <p className='text-xs'>On July 19, 100% of proceeds from the sale of select items will be donated to Tims Camps.* Don’t wait until Camp Day—Toggle on Round Up in your Tims app to support Tims Camps. *Terms apply.</p>
            </section>
            <section className='w-1/3 mt-9 ml-28' >
              <button className='rounded-full py-3 px-6 text-white' style={{ backgroundColor: 'rgb(200, 16, 46' }}>Learn More</button>
            </section>
          </div>
        </div>
      </main>
      </div>

      <div className='w-3/5 pt-48 pb-24' style={{margin:'0 auto'}}>      
        <main className='flex items-center justify-center bg-amber-900 rounded-lg' style={{height: '600px'}}>
          <div className='w-1/3'>
            <Image
              src='/coffee.jpg'
              width={500}
              height={700}
              alt='coffee'
            />
          </div>
          <div className='w-2/3'>
            <section className='w-1/2 m-auto'>
            <p className='text-white text-6xl font-bold'>
            Order ahead, save time, & earn rewards!
              </p>
              <span className='text-sm'>
                Everything you love about Tim Hortons, now 'byte'-sized!
              </span>
            </section>
            <main className='flex flex-row items-center justify-center gap-8 mt-8 '>
              <section className=''>
                <a href="" className=''>
                  <Image 
                    src='/app-download.svg'
                    width={150}
                    height={200}
                    alt='download'
                  />
                </a>
              </section>
              <section>
                <a href="">
                  <Image
                    src='/google.png'
                    width={150}
                    height={200}
                    alt='google'
                  />
                </a>
              </section>
              
            </main>
            <section className='w-1/2 m-auto text-xs mt-8'>
              <span>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</span> 
            </section>
            </div>
        </main>
      </div>

      <footer className='px-20 w-full' style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
        <div className='flex flex-wrap justify-between py-14 border-b-lime-950'>
          <div className='flex flex-col basis-1/3'>
            <div className='flex flex-col items-start'>
              <b>Careers</b>
              <div>Come join the Team</div>
              <a href="" className='text-red-600'>Browse Opportunities</a>
            </div>
          </div>
          <div className='flex flex-col basis-1/3'>
            <div className='flex flex-col items-start'>
              <b>Tims for Good</b>
              <div>Small changes, big impact</div>
              <a href="" className='text-red-600'>Learn More</a>
            </div>
          </div>
          <div className='flex flex-col basis-1/3'>
            <div className='flex flex-col items-start'>
              <b>Find a Tim Hortons</b>
              <div>We can't wait to serve you</div>
              <a href="" className='text-red-600'>Store Locator</a>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-between py-14 border-b-lime-950'>
          <div className='flex flex-col basis-1/3'>
            <a href="">Franchising</a>
            <a href="">Investors</a>
            <a href="">Contact Us</a>
            <a href="">Frequently Asked Questions</a>
          </div>
          <div className='flex flex-col basis-1/3'>
            <div className='flex flex-col'>
              <a href="">Privacy Policy (FR)</a>
              <a href="">Privacy Policy (EN)</a>
              <a href="">Terms of Service (FR)</a>
              <a href="">Terms of Service (EN)</a>
              <a href="">Trademarks Notice (FR)</a>
              <a href="">Trademarks Notice (EN)</a>
              <a href="">Accessibility (FR)</a>
              <a href="">Accessibility (EN)</a>
              <a href="">Diagnostics</a>
            </div>
          </div>
          <div className='flex flex-col basis-1/3'>
            <div className='flex flex-col items-start'>
              <b>Connect with Us</b>
              <div className='flex flex-row' style={{marginLeft: '-1px'}}>
                <a href="">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.375 3.25a4.388 4.388 0 0 1 4.375 4.375v8.75a4.388 4.388 0 0 1-4.375 4.375h-8.75a4.389 4.389 0 0 1-4.375-4.375v-8.75A4.388 4.388 0 0 1 7.625 3.25h8.75Zm0-1.75h-8.75C4.256 1.5 1.5 4.256 1.5 7.625v8.75c0 3.369 2.756 6.125 6.125 6.125h8.75c3.369 0 6.125-2.756 6.125-6.125v-8.75c0-3.369-2.756-6.125-6.125-6.125Z"></path>
                    <path d="M17.688 7.625a1.313 1.313 0 1 1 0-2.625 1.313 1.313 0 0 1 0 2.625Z"></path>
                    <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"></path>
                  </svg>
                </a>
                <a href="" className='ml-7'>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.24 3.84 9.584 8.86 10.373v-7.337H7.692v-3.037h2.666V9.75c0-2.63 1.568-4.085 3.966-4.085 1.15 0 2.351.205 2.351.205v2.584h-1.324c-1.304 0-1.712.81-1.712 1.64v1.97h2.912l-.465 3.036H13.64v7.337c5.02-.788 8.859-5.131 8.859-10.373Z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="" className='ml-7'>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.843 6.975c0-2.11-1.552-3.807-3.469-3.807A170.465 170.465 0 0 0 12.422 3h-.844c-2.7 0-5.353.047-7.95.169-1.912 0-3.464 1.706-3.464 3.815A69.732 69.732 0 0 0 0 11.99a72.582 72.582 0 0 0 .16 5.011c0 2.11 1.551 3.82 3.464 3.82 2.728.127 5.526.183 8.372.178 2.85.01 5.64-.05 8.371-.178 1.918 0 3.47-1.71 3.47-3.82a72.41 72.41 0 0 0 .159-5.016 68.19 68.19 0 0 0-.153-5.01Zm-14.14 9.614V7.378L16.5 11.98l-6.797 4.608Z"></path>
                  </svg>
                </a>
                <a href="" className='ml-7'>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.25 5.133a9.46 9.46 0 0 1-2.65.717 4.57 4.57 0 0 0 2.03-2.512c-.908.53-1.9.903-2.932 1.101A4.647 4.647 0 0 0 16.327 3c-2.55 0-4.615 2.034-4.615 4.542a4.37 4.37 0 0 0 .119 1.036A13.158 13.158 0 0 1 2.315 3.83a4.485 4.485 0 0 0-.627 2.283c0 1.574.821 2.967 2.062 3.782a4.57 4.57 0 0 1-2.1-.567v.056c0 2.204 1.595 4.036 3.704 4.454a4.752 4.752 0 0 1-1.216.159c-.291 0-.582-.028-.868-.085.587 1.805 2.294 3.118 4.315 3.155a9.356 9.356 0 0 1-6.835 1.88A13.063 13.063 0 0 0 7.816 21c8.501 0 13.146-6.923 13.146-12.928 0-.197-.006-.394-.015-.586a9.304 9.304 0 0 0 2.303-2.353Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>         
        </div>

        <div className='flex flex-row flex-wrap justify-between py-14 border-b-lime-950'>
          <div className='flex flex-col basis-full'>
            <div className='flex flex-row  justify-between items-center mb-32'>
              <p className='basis-1/3 min:basis-1/2'>TM & © Tim Hortons, 2021</p>
              <span className='basis-1/3'></span>
              <button className='flex items-center basis-1/3  min:basis-1/2'>
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Z"></path>
                  <path d="M12 2.25c-2.722 0-5.28 4.365-5.28 9.75 0 5.384 2.56 9.75 5.281 9.75 2.722 0 5.282-4.366 5.282-9.75 0-5.385-2.56-9.75-5.282-9.75Z"></path>
                  <path d="M5.5 5.5C7.293 6.773 9.55 7.532 12 7.532c2.451 0 4.708-.76 6.5-2.032"></path>
                  <path d="M18.5 18.5c-1.792-1.272-4.049-2.031-6.5-2.031-2.45 0-4.707.759-6.5 2.031"></path>
                  <path d="M12 2.25v19.5"></path>
                  <path d="M21.75 12H2.25"></path>
                </svg>
                <span>EN/CA</span>
              </button>
            </div>
          </div>

        </div>
      </footer>
      {/* stick bot navbar */}
      <div></div>

    </main>
  )
}
