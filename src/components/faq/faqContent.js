// pages/faq.js
import React from 'react';
import { Disclosure } from '@headlessui/react';

const questions = [
    {
        id: 1,
        question: 'What is Next.js?',
        answer: 'Next.js is a React framework for building server-rendered React applications.',
    },
    {
        id: 2,
        question: 'How do I install Tailwind CSS?',
        answer: 'You can install Tailwind CSS using npm or yarn.',
    },
    {
        id: 3,
        question: 'Can I use Next.js without React?',
        answer: 'No, Next.js is built specifically for React applications.',
    },
];

export default function FAQContent() {
    return (
        <div className="mx-auto my-24 max-w-5xl p-6 lg:px-8 bg-transparent text-gray-900">
            <h1 className="mb-6 font-headings">Frequently Asked Questions</h1>
            <div className="space-y-4 mt-10">
                {questions.map((q) => (
                    <Disclosure key={q.id}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between my-auto w-full py-3 text-lg font-headings font-semibold bg-transparent transition-all">
                                    <span>{q.question}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 ${open ? 'transform rotate-180' : ''}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-lg font-dText bg-transparent">
                                    {open ? (
                                        <p className="whitespace-pre-line">{q.answer}</p>
                                    ) : null}
                                </Disclosure.Panel>
                                <hr className="border-gray-900 dark:border-white" />
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};