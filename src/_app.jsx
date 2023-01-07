import Link from 'link-react';
console.log("Test App React Successfully");

const App = (() => {
    return(
        <div className="container mx-auto">
            <div className="flex">
                <h1 className="text-primary font-bold">Hallo Gais</h1>
                <h4 className="text-secondary">Saya Ga Tau Siape</h4>
            </div>

            {/* <!-- Header Start --> */}
            <header>

            </header>
            {/* <!-- Header End --> */}

            {/* <!-- Hero Section Start --> */}
            <section id="home" class="pt-36">
                <div class="container">
                    <div class="flex flex-wrap ">
                        <div class="w-full self-center px-4 lg:w-1/2">
                            <h1 class="text-base font-semibold text-primary md:text-xl">Hallo, saya <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Ian Oktafian</span></h1>
                            <h2 class="font-medium text-secondary text-lg mb-5 lg:text-2xl">Musician <span class="text-primary">|</span><span class="text-dark"> Junior Web Developer </span></h2>
                            <p class="font-medium text-secondary mb-10 leading-relaxed">Portfolio Saya Menggunakan <span class="text-dark font-bold"> Tailwind Css </span> </p>
                            <a href="#" class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
                        </div>
                        <div class="w-full self-end px-4 lg:w-1/2">
                            <div class="relative mt-10 lg:mt-9 lg:right-0">
                                <img src="/dist/img/ian2.png" alt="Ian Oktafian" class="max-w-full mx-auto" />
                                <span class="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                                    <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#14b8a6" d="M38.1,-57.4C48.6,-44.8,55.9,-32.7,60.2,-19.6C64.5,-6.4,65.7,7.7,63.1,22C60.6,36.4,54.1,51,43,56.1C31.8,61.3,15.9,56.8,-1.7,59.2C-19.3,61.6,-38.7,70.7,-53.6,66.8C-68.6,62.9,-79.1,46,-78.1,29.9C-77.1,13.8,-64.5,-1.5,-56.6,-16.1C-48.7,-30.7,-45.5,-44.4,-36.9,-57.7C-28.2,-71,-14.1,-83.8,-0.2,-83.6C13.8,-83.4,27.5,-70.1,38.1,-57.4Z" transform="translate(100 100) scale(1.1)" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Section End --> */}

            {/* <!-- About Section Start --> */}
            <section id="about" class="pt-36 pb-32">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="w-full px-4 mb-10 lg:w-1/2">
                            <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
                            <h2 class="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Selamat Datang , Di Website Tailwind Saya</h2>
                            <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus iste blanditiis veritatis perspiciatis, maxime dolorem?</p>
                        </div>
                        <div class="w-full px-4 lg:w-1/2">
                            <h3 class="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Sosial Media</h3>
                            <p class="font-medium text-base text-secondary mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi incidunt aperiam fugit unde quae, deserunt eveniet voluptates.</p>
                            <div class="flex items-center">
                                {/* <!-- Instagram --> */}
                                <a href="https://www.instagram.com/ianokt_/" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                </a>
                                {/* <!-- Github --> */}
                                <a href="https://github.com/ianokt0/" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                </a>

                                {/* <!-- Facebook --> */}
                                <a href="https://www.facebook.com/naifatko" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>

                                {/* <!-- Twitter --> */}
                                <a href="https://twitter.com/IanOkt0" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                </a>

                                {/* <!-- Youtube --> */}
                                <a href="https://www.youtube.com/@oktafianps_" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Section End --> */}
        </div>
    )
})

export default App;