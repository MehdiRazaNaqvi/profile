"use client";

import React from "react";
import Carousel from "../Carousel";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "../ReviewCard"






const ReviewCarousel = () => {



    const reviews =
        [
            { id: 0, code: "us", designation:"Founder Ancestrypass", service: "Web and CMS Development", href: "https://www.upwork.com/freelancers/~01072941cd9e1b8638", country: "USA", color: "#EDFFFF", heading: "Joe Contini", title: "Syed has been instrumental in helping us develop applications on both the frontend and the backend. He's been very easy to work with and a great communicator. Thank you for all the great work Syed and I hope to work with you again!", color: "yellow" },
            { id: 1, code: "us", designation:"Founder Ancestrypass", service: "Web Development", href: "https://www.upwork.com/freelancers/~01072941cd9e1b8638", country: "USA", color: "#EDFFFF", heading: "Mac McGee", title: "Phenomenal job with the time frame given and the back and forth instructions i was giving him. He handled each request without a problem with patience and kindness, he also walked me through some steps to further understand the work. Highly recommend!!", color: "yellow" },
            { id: 2, code: "gb", service: "Business Dashboard", href: "https://www.upwork.com/freelancers/~01072941cd9e1b8638", country: "Uniked Kindom", color: "#EDFFFF", heading: "Akala Moyo", title: "Syed helped in delivering a top notch dashboard built with javascript for our company. He had a good understanding of the project and was in constant communication through the development. He made severly intelligent suggestions to help with the delivery. I would recommend him for other projects. ", color: "yellow" },
            { id: 3, code: "jp", service: "Bugs Fixing", href: "https://www.fiverr.com/mehdiraza2000", country: "Japan", color: "#A58FCB", heading: "Mark Rawlins", title: "A really nice guy and incredibly fast with response time and also delivery! The delivery was exactly as I requested and mehdiraza2000 also helped explain the changes and left some commented code for my use if I wanted to change later on. A really great experience working with this seller and I highly recommend!! Thank you!!", color: "yellow" },
            { id: 4, code: "gb", service: "Bugs Fixing", href: "https://www.fiverr.com/mehdiraza2000", country: "Uniked Kindom", color: "#EDFFFF", heading: "Akala Moyo", title: "Syed is really great to work with. He understood the project and delivered fantastically", color: "yellow" },
            { id: 5, code: "gb", service: "Bugs Fixing", href: "https://www.fiverr.com/mehdiraza2000", country: "Uniked Kindom", color: "#F7D5F2", heading: "Dom Base", title: "Thanks for your help bro. Mehdi is one of the best.", color: "skyblue" },
            { id: 6, code: "jp", service: "Bugs Fixing", href: "https://www.fiverr.com/mehdiraza2000", country: "Japan", color: "#C6F7C7", heading: "Mark Rawlins", title: "Once again super friendly and easy to communicate with. The delivery of the product was fast and very well executed - exactly as I had asked! The seller went well above and beyond by fixing something for me and making sure that I had everything I needed. They even pointed out a bug elsewhere in my code which was really helpful! Highly recommended and I will definitely work with this seller again!", color: "yellow" },
        ]



    return (


        <Carousel

            slidesPerView={1}
            spaceBetween={60}
            type='dots'

        >
            {reviews.map(review => (
                <SwiperSlide style={{ width: "100%", marginRight: "20px" }} key={review.key}>

                    <ReviewCard image={review.url} country={review.country} service={review.service} href={review.href} code={review.code} title={review.title} color={review.color} heading={review.heading} />

                </SwiperSlide>



            ))}
        </Carousel>

    )
}

export default ReviewCarousel