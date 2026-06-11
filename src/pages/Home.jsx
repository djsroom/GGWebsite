import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQiMex6WL2AwhQK2hQmrFJIsksEw22yIxmOS-Ow9F07uAG_AskpVYEQgzBJLBiGwQWDrDVQTb5kWctKXZ9HCTaPRZH0-G20jqUer3MOgkDGvHymg-IshBLQkdyxFI7qJmHHT7NNEr0kozeXAlmdYrfVty0BFSQUmQzpNC7c9yVeFwzqSZW6dQcxl6X7OnN3oHiOTGx2yVU2lsDncH5N49HiH9ErJypViwH-noyUY3yOPcXGJMstxuQzu_LQKgToUhDJP99qongz-U",
      title: "Green Glass",
      subtitle: "Constructed to fit your needs!"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnFSvih6Kj2Ig2ma3NanzgExlbf1l25RC4rcSgnpPQnW2G-OW649Oifxzp-XIQqP7pv9eMNsAPRSPheP34EKVow7Agtc-ixePUjA2vuZ3YF0yqENqXsaKGZwsM6Vaf2fD6YpGkd1822aslueySCo2_uoXEXzy6YzlJshanDdJB3Du95w-j4V37-CM1EFXhCySR7kWtXeCyDl1ik5aR0jqAG6lo4X5hMqNbEmTTqWZfPgAm5ioN0H7CDpgPNvii_uUa9F3YfxRXttY",
      title: "Commercial to Residential",
      subtitle: "Sizes from buildings to homes!"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK8dEyPv-FiV5j-DTvj66ruKaca_vAr7vp3WlIJF8MvGVAQj0JQjvw6SZe8J7MUUBXNMDvpChqgWy8bZpujlrEJh2n56-sdmJ0zF3f9obh9z-M-1iVCPITbM5DN_mtQbcok2ID_V0k3k8EXjZzLSIXvjmdKuqfQoAOIOj8EUF3Bi_2Ts5_iPtWqqc1kYHsLzaS5islx_FPp8eEdhlmvQ8SVsH47G-FewUuXpNSIJEKoo-pIT86q-jXaNZVPkEX6oWzIlCg8fiMU2s",
      title: "Home Goods",
      subtitle: "Shapes to fit your room!"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQCOM9e1CTra6y7fm731IgQsaOdQZwYlPZyN1KwhKTG6sjzUNTEiTUU9xS_sA6VEC-KWfFtsSz1aeNE3lQYtXt3XjzRGfdFMN2K-7O6axnNqHF-_wLwqrBCs-_4fIq9QrAFjb0VRm619CGtDFdQ8-ryHdkLPEdKjnD5b83nlUTsLSDdEk0-9kn2GOdeb2iou4_DtknRLSqaWhD-YRaNOA7i2IPqjTNbOQ9fbCpBsI1NXlj9LIlBgtUHbzlRU-wkMxFUNoT6H18hHY",
      title: "Installation Made Easy",
      subtitle: "Working with your vision!"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMYkjBB6VEGr9T6h5tL0Mo4ktdaJ-3F_sXJI0n1goVNX4TRW-mR5_A3OJF7jaUe5jE1RLU0UTlpJxlPM343tdPuH8TZF6N8qlGCTYG9cmnIkGdRYglu6-pUBR9EvcbUZYUxd-zOo6BHv6BITK502-FaAx57ZPAryJH8hlRUoMqQHIhR03H7_OWH9sG2HeEuwjDmmTao9EcuZCgDUDyjyIo3Hv8ES7y89n9f-jt-jvEHskaJEFOs0HtbRnk9I-qMMTERiHtIikQZoU",
      title: "Perfection to Detail",
      subtitle: "We want exactly what you envision"
    }
  ];

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="heroSwiper w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="relative z-20 text-center px-gutter max-w-3xl mx-auto py-8 rounded-xl">
                <h1 className="text-on-primary font-headline-xl text-headline-xl mb-4 tracking-tight drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-on-primary font-headline-sm text-headline-sm mb-8 opacity-90 drop-shadow">
                  {slide.subtitle}
                </p>
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="px-8 py-3 bg-transparent border-2 border-on-primary text-on-primary font-label-md text-label-md uppercase tracking-widest rounded hover:bg-secondary hover:border-secondary transition-all duration-300 shadow-[0_3px_5px_rgba(136,136,136,0.5)]"
                >
                  Let's Start!
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* What We Do Section */}
      <section className="py-section-padding-top pb-section-padding-bottom px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4 tracking-wide uppercase">What We Do</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body-lg text-body-lg text-text-primary leading-relaxed">
            <strong className="text-primary font-semibold">Green Glass</strong> conducts glass made for commercial windows to residential homes. From the moment a blueprint is completed for construction, we use our cutting-edge technology to formulate glass, whether it be a window or walk-way, to fit the measurements needed.
          </p>
        </div>
      </section>

      {/* Features / Bento Grid Section */}
      <section className="bg-surface-container-low py-section-padding-top pb-section-padding-bottom px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-surface rounded shadow-[3px_3px_5px_#888888] p-[10px_20px_20px_10px] transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 w-full mb-6 rounded overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMqokJqy5Ia61BrBM9C5m4yYZr6EQaH5-t76RW_Pek9SmsLjnhUd_W761DcxzdGMYkobztxmTMXzTH0xzhdYOLDUjE8IJdXUFrUtDEJXJmt9jugNkH5mGB0zw98J_k3TKXuL2mGOnYdBKV13gxj4FqPGuE5co3XF4KnnAOOoaldSjTHG8oOf9NMZBaBNvQ57zOk4diV9FtabwA2UFjDQW75kyLbksRc1Ycat8p9Y-VtFEU9Ezv9ezrub9jHBYzWd13BYYUPk7dal4')` }}
                ></div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 pl-2 border-l-4 border-secondary">Dedicated to Perfection</h3>
              <p className="font-body-md text-body-md text-text-primary pl-2 mb-2">
                Green Glass is committed to provide exceptional customer service and always striving for quality work. Our expertise to manufacture with detail and provide a smooth installment is our end-goal is for each client. Our quality reinforced glass is promised to look great and stay durable.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-surface rounded shadow-[3px_3px_5px_#888888] p-[10px_20px_20px_10px] transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 w-full mb-6 rounded overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCY0DgcKYe0zWvA0kikcq23bxoighTv4pUqLnDMCuCI7oLtC7lcK6DAisNxQnYpQaSFt98RwhrXWZraCLoKzd4BLjeeP3PwU7xgiVxhA_4Q3n4nO2tg8zNs7w9PCUvf3Dx5fEmTKD0bs5j4iKgo6MA2_pNd0UouScQiFLNzzc4xc5d6Vm9rNNBohRLnXTklitZwD1isZvfvMpTK6daZD_4OGrZvRSYW2zb_jjw5DUXjMXXwtzUl3jxp05FMkLGvAtJpNfX4TpGaIaw')` }}
                ></div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 pl-2 border-l-4 border-secondary">Installation</h3>
              <p className="font-body-md text-body-md text-text-primary pl-2 mb-2">
                With the measurements given from your blueprints, we will begin to carve out quality glass to fit the necessary applications. An installation team will be deployed to assist in making sure everything is a perfect fit!
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-surface rounded shadow-[3px_3px_5px_#888888] p-[10px_20px_20px_10px] transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 w-full mb-6 rounded overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1-jLTVssPSUAFbueB_4YtB-UsFa9oVe5Mifyd5CFmoYv1trihuH4S0YqtXUytNC8m0L7E2FLyc8re-ZZOuPWCFFaSHkSOrF7fUmt2JVM6NX9ANErWArS-HSMrr7qO6V27I5Bz7-zjEcdT77i5tJAJB-Xmq95rlwDL_VREgptvaMiShs8d2fnmNigd-hnw1Rjza-qn5zdaGWhmYdLcrcmAAs8MdiwbBI5CqnJjVxWZocC45FbC2fsZI88139AK0NYvc3zKjW1jvKw')` }}
                ></div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 pl-2 border-l-4 border-secondary">Eco-Friendly Construction</h3>
              <p className="font-body-md text-body-md text-text-primary pl-2 mb-2">
                Glass can be one of the hardest thing to reuse, especially after it has been broken. We re-flame the glass to be refined and reused in our construction. Allowing waste to be minimal and provide a more green and eco-friendly process!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
