"use client";

import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "../ReviewCard"






const ReviewCarousel = () => {



    const schools =
        [
            { id: 0, country: "gb", color: "#EDFFFF", heading: "Akala Moyo", url: "/client1.jpg ", title: "Syed is really great to work with. He understood the project and delivered fantastically", color: "yellow" },
            { id: 3, country: "jp", color: "#A58FCB", heading: "Mark Rawlins", url: "/student-couple.png", title: "A really nice guy and incredibly fast with response time and also delivery! The delivery was exactly as I requested and mehdiraza2000 also helped explain the changes and left some commented code for my use if I wanted to change later on. A really great experience working with this seller and I highly recommend!! Thank you!!", color: "yellow" },
            { id: 0, country: "gb", color: "#EDFFFF", heading: "Akala Moyo", url: "/student-couple.png", title: "Syed helped in delivering a top notch dashboard built with javascript for our company. He had a good understanding of the project and was in constant communication through the development. He made severly intelligent suggestions to help with the delivery. I would recommend him for other projects. ", color: "yellow" },
            { id: 1, country: "gb", color: "#F7D5F2", heading: "Dom Base", url: "/student-yellow.png", title: "Thanks for your help bro. Mehdi is one of the best.", color: "skyblue" },
            { id: 2, country: "jp", color: "#C6F7C7", heading: "Mark Rawlins", url: "/student-couple.png", title: "Once again super friendly and easy to communicate with. The delivery of the product was fast and very well executed - exactly as I had asked! The seller went well above and beyond by fixing something for me and making sure that I had everything I needed. They even pointed out a bug elsewhere in my code which was really helpful! Highly recommended and I will definitely work with this seller again!", color: "yellow" },
            { id: 3, country: "jp", color: "#A58FCB", heading: "Mark Rawlins", url: "/student-couple.png", title: "A really nice guy and incredibly fast with response time and also delivery! The delivery was exactly as I requested and mehdiraza2000 also helped explain the changes and left some commented code for my use if I wanted to change later on. A really great experience working with this seller and I highly recommend!! Thank you!!", color: "yellow" },
        ]



    return (


        <Carousel

            // slidesPerView={3}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30
                },
                1000: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30
                }
            }}

        >
            {schools.map(school => (
                <SwiperSlide key={school.key}>

                    <ReviewCard image={school.url} country={school.country} title={school.title} color={school.color} heading={school.heading} />

                </SwiperSlide>



            ))}
        </Carousel>

    )
}

export default ReviewCarousel