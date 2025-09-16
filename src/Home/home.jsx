import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../assets/header.png';
import Button from '../component/Button';

function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-[80vh] max-w-none mx-auto py-0 px-0 gap-0 pt-20">
                {/* Left side: Text and Button */}
                <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:pl-32 md:pr-8 px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Make Your Letter Writing Simple
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-700 mb-5 max-w-lg">
                        With Type It, you can quickly craft clear and thoughtful letters. Focus on your message and let your words make an impact.
                    </p>
                    <Button to="/create" as={Link}>
                        Create
                    </Button>
                </div>
                {/* Right side: Image */}
                <div className="md:w-1/2 w-full flex justify-center items-center md:pr-32 px-6">
                    <img
                        src={Header}
                        alt="Header"
                        className="w-[400px] md:w-[650px] h-auto object-contain"
                    />
                </div>
            </div>
            {/* Verse Section */}
            <div className="bg-[#3B82F6] py-8 px-4 text-center text-white">
                <h2 className="text-2xl font-bold mb-2">Mateo 28:19, 20</h2>
                <p className="max-w-2xl mx-auto text-base">
                    Go, therefore, and make disciples of people of all the nations, baptizing them in the name of the Father and of the Son and of the holy spirit, teaching them to observe all the things I have commanded you. And look! I am with you all the days until the conclusion of the system of things.
                </p>
            </div>
            {/* How to use Section */}
            <div className="py-10 px-4 text-center">
                <h2 className="text-2xl font-bold mb-8">How to use?</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="bg-[#FDE68A] w-64 h-64 rounded-xl shadow" />
                    <div className="bg-[#3B82F6] w-64 h-64 rounded-xl shadow" />
                    <div className="bg-[#FDE68A] w-64 h-64 rounded-xl shadow" />
                </div>
            </div>
            {/* Footer Section */}
            <div className="bg-gray-700 w-11/12 mx-auto rounded-xl h-16 mt-8" />
        </div>
    );
}

export default Home;