'use client';

import Spinner from "@/components/Spinner";
import { errorToast, successToast } from "@/utils/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

const ContactMe = () => {

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [extraDetails, setExtraDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const makeRequest = async () => {

            if (!name || !contact || !email) {
                alert("Please fill out all required fields.");
                return;
            }

            const postData = {
                name,
                contact,
                email,
                details: extraDetails,
            };


            try {
                setLoading(true);
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                });

                if (response.ok) {
                    setName('');
                    setContact('');
                    setEmail('');
                    setExtraDetails('');
                    successToast('I\'ll contact you soon. 🎉');
                    router.push('/');
                } else {
                    errorToast('Something went wrong. 😔')
                }


            } catch (error) {
                errorToast('Something went wrong. 😔')
            } finally {
                setLoading(false);
            }

        }

        makeRequest();

    };


    return (
        <div className="px-10 py-4">
            <div className="px-10 py-4 mb-4 text-right">
                <Link
                    href="/"
                    className="text-purple-600 border-2 rounded-full border-purple-500 px-4 py-2 hover:bg-purple-500 hover:text-white transition-all duration-500 ">
                    Profile
                </Link>
            </div>
            <h1 className="text-3xl mb-8">Contact Me</h1>
            <form onSubmit={handleSubmit}>

                <div className="p-4 mb-4 flex flex-col sm:flex-row items-center">
                    <label htmlFor="name" className="mb-2 sm:mr-4">Name</label>
                    <input
                        className="border border-black flex-grow px-2 py-1"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="p-4 mb-4 flex flex-col sm:flex-row items-center">
                    <label htmlFor="contact" className="mb-2 sm:mr-4">Contact</label>
                    <input
                        className="border border-black flex-grow px-2 py-1"
                        type="text"
                        id="contact"
                        value={contact}
                        onChange={(event) => setContact(event.target.value)}
                    />
                </div>


                <div className="p-4 mb-4 flex flex-col sm:flex-row items-center">
                    <label htmlFor="email" className="mb-2 sm:mr-4">Email</label>
                    <input
                        className="border border-black flex-grow px-2 py-1"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>


                <div className="p-4 mb-4 flex flex-col sm:flex-row items-center">
                    <label htmlFor="extraDetails" className="mb-2 sm:mr-4">Extra Details</label>
                    <textarea
                        className="border border-black flex-grow px-2 py-1"
                        id="extraDetails"
                        cols={30}
                        rows={10}
                        value={extraDetails}
                        onChange={(event) => setExtraDetails(event.target.value)}
                    ></textarea>
                </div>


                <div className="p-4 mb-4 flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-700 disabled:bg-slate-200 min-h-6 min-w-12 text-white font-bold py-2 px-4 rounded">
                        {loading ? <Spinner /> : "Submit"}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ContactMe