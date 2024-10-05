import Navbar from "@/components/Navbar";
import TeamSection from "@/components/Team";
import Footer from "@/components/Footer";
import Head from "next/head";
import ProgressBar from "@/components/ProgressBar";

const Team = () => {
    return (
        <>
            <Head>
                <title>GDSC ABESIT | Team</title>
            </Head>
            <ProgressBar />
            <main className="flex flex-col bg-white items-center justify-between">
                <Navbar />
                <div className="pt-12">
                    <TeamSection />
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Team;