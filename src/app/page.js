// Home.js
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import CourseCard from "../component/Data/CardCourseData";
import CarouselContent from '@/component/Slide/SlideContent';
import WelcomeComponent from '@/component/Slide/WelcomeSlide';

export default function Home() {
    return (
        <main>
            <WelcomeComponent />
            <div className='mx-40'>
                <h2 className='font-bold mt-10'>COURSES</h2>
                <div className="my-4 grid grid-cols-2 gap-6">
                    <CourseCard />
                </div>
                <h2 className='font-bold mt-10'>USEFUL CONTENTS</h2>
                <CarouselContent/>
            </div>
        </main>
    );
}
