import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'
import Image from 'next/image'
import Community from '../assets/Community.jpg';
import ProgressBar from '../components/ProgressBar';
import Head from 'next/head';

const guidelines = () => {
    return (
        <div>
            <Head>
                <title>Community Guidelines</title>
            </Head>
            <ProgressBar />
            <Navbar />

            <div class='text-black my-6 flex flex-col mx-5 md:mx-36 h-full'>
                <div class='flex mx-auto items-center content-center justify-center text-5xl mt-24 mb-6 font-bold'>
                    Community Guidelines 
                    


                    <Image src={Community} alt='Community Guidelines' className='justify-evenly' width={600} height={600} />
                </div>

                <div class='space-y-10 mt-6'>  <div class='text-3xl font-semibold'>
                    Google Community Guidelines and Anti-Harassment Policy for In-Person and Virtual Events
                </div>

                    <div>
                        Google is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. We do not tolerate harassment of event participants in any form. Google takes violations of our policy seriously and will respond appropriately.
                    </div>

                    <div>
                        All participants of Google events, including in-person and online attendees, event staff, speakers, and Googlers, must abide by the following policy:
                    </div>

                    <div>
                        <span class='font-semibold text-3xl'>Be respectful to each other. Treat everyone with respect</span> 
                        <p>Participate while acknowledging that everyone deserves to be here — and each of us has the right to enjoy our experience without fear of harassment, discrimination, or condescension, whether blatant or via micro-aggressions. All forms of communication should not demean others. Consider what you are saying and how it would feel if it were said to you or about you</p>
                    </div>

                    <div>
                        <span class='font-semibold text-3xl'> Speak up if you see or hear something. </span> <p>Harassment is not tolerated, and you are empowered to politely engage when you or others are disrespected. The person making you feel uncomfortable may not be aware of what they are doing, and politely bringing their behavior to their attention is encouraged.</p>
                    </div>

                    <div>
                        Participants asked to stop any harassing behavior are expected to comply immediately. Our zero tolerance policy means that we will look into and review every allegation of violation of our Event Community Guidelines and Anti-Harassment Policy and respond appropriately. To report any behavior that makes you or others feel uncomfortable, visit your event&apos;s website to file a report to your event&apos;s organizers.
                    </div>

                    <div>
                        This policy extends to talks, forums, workshops, codelabs, social media, all attendees, partners, sponsors, volunteers, staff, etc. You catch our drift. Google reserves the right to refuse admittance to, or remove any person from, any Google hosted event (including future Google events) at any time in its sole discretion. This includes, but is not limited to, attendees behaving in a disorderly manner or failing to comply with this policy, and the terms and conditions herein. If a participant engages in harassing or uncomfortable behavior, the conference organizers may take any action they deem appropriate, including warning or expelling the offender from the conference with no refund or blocking the offender’s account from participating online.
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default guidelines