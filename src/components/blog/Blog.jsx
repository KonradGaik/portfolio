import React from 'react'

const Blog = () => {
  return (
    <section class="pt-5 pb-5 bg-[#edf6f9]">
    <div class="container w-full mx-auto">
       <div class="flex flex-wrap justify-center ">
          <div class="w-full px-4">
             <div class="text-center w-100 mx-auto mb-[60px] lg:mb-10">
                <h2
                   class="
                   font-bold
                   text-3xl
                   sm:text-4xl
                   md:text-[40px]
                   text-dark
                   mb-4">
                   Blog
                </h2>
                <p class="text-xl mx-auto w-[80%]">
                Sekcja blogowa to miejsce, w którym dziele się swoimi doświadczeniami z brazy IT i nie tylko.
                </p>
             </div>
          </div>
       </div>
       <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
             <div class="max-w-[370px] mx-auto mb-10">
                <div class="overflow-hidden mb-8">
                   <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                      alt="my alt text 1 "
                      class="w-full"
                      />
                </div>
                <div>
                   <h3>
                      <a
                         class="
                         font-semibold
                         text-xl
                         sm:text-2xl
                         lg:text-xl
                         xl:text-2xl
                         mb-4
                         inline-block
                         text-dark
                         hover:text-primary">
                      Meet AutoManage, the best AI management tools
                      </a>
                   </h3>
                   <p class="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                   </p>
                </div>
             </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
             <div class="max-w-[370px] mx-auto mb-10">
                <div class="overflow-hidden mb-8">
                   <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                      alt="my alt text 2"
                      class="w-full"
                      />
                </div>
                <div>
                   <h3>
                      <a
                         class="
                         font-semibold
                         text-xl
                         sm:text-2xl
                         lg:text-xl
                         xl:text-2xl
                         mb-4
                         inline-block
                         text-dark
                         hover:text-primary">
                      How to earn more money as a wellness coach
                      </a>
                   </h3>
                   <p class="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                   </p>
                </div>
             </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
             <div class="max-w-[370px] mx-auto mb-10">
                <div class="overflow-hidden mb-8">
                   <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                      alt="alt text 3"
                      class="w-full"/>
                </div>
                <div>

                   <h3>
                      <a
                         class="
                         text-xl
                         font-semibold
                         sm:text-2xl
                         lg:text-xl
                         xl:text-2xl
                         mb-4
                         inline-block
                         text-dark
                         hover:text-primary">
                      The no-fuss guide to upselling and cross selling
                      </a>
                   </h3>
                   <p class="text-base text-body-color">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                   </p>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Blog
