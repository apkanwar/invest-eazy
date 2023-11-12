import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import styles from "@/styles/investments.module.css"

export default function Carousel(props) {
    const carouselRef = useRef(null);

    return (
        <div className="flex flex-col lg:gap-11">
            <div className="flex justify-between items-center my-8 lg:my-0">
                <h2 className="font-headings text-2xl font-medium lg:text-4xl">{props.title}</h2>

                {/* Small Screens */}
                <div className="flex text-center gap-5 lg:hidden">
                    {/* Left Arrow */}
                    <span
                        className={styles.arrow}
                        onClick={() => {
                            carouselRef.current.scroll({
                                top: 0,
                                left: carouselRef.current.scrollLeft
                                    ? carouselRef.current.scrollLeft - 330
                                    : 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                            fill="#000"
                            width="24"
                            height="24"
                        >
                            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                        </svg>
                    </span>
                    {/* Right Arrow */}
                    <span
                        className={styles.arrow}
                        onClick={() => {
                            carouselRef.current.scroll({
                                top: 0,
                                left: carouselRef.current.scrollLeft + 330,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                            fill="#000"
                            width="24"
                            height="24"
                        >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
                    </span>
                </div>
                
                {/* Normal Screens */}
                <div className="hidden text-center gap-5 lg:flex">
                    {/* Left Arrow */}
                    <span
                        className={styles.arrow}
                        onClick={() => {
                            carouselRef.current.scroll({
                                top: 0,
                                left: carouselRef.current.scrollLeft
                                    ? carouselRef.current.scrollLeft - 990
                                    : 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                            fill="#000"
                            width="24"
                            height="24"
                        >
                            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                        </svg>
                    </span>
                    {/* Right Arrow */}
                    <span
                        className={styles.arrow}
                        onClick={() => {
                            carouselRef.current.scroll({
                                top: 0,
                                left: carouselRef.current.scrollLeft + 990,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                            fill="#000"
                            width="24"
                            height="24"
                        >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div ref={carouselRef} className={styles.carouselSection}>
                {props.content.map(property => (
                    <Link key={property.id} href={`/investments/propertyInfo/${property.id}`}>
                        <div className="flex flex-col relative overflow-hidden rounded-2xl w-max">
                            <Image src={`${property.allias}`} width={270} height={154} alt="Property" priority={true} className={styles.propertyImage} />

                            <span className={styles.propertyStatus}>
                                {property.phase}
                            </span>

                            <div className={styles.propertyDetails}>
                                <div>
                                    <h3 className={styles.propertyName}>
                                        {property.name}
                                    </h3>
                                    <p className={styles.propertyLocation}>{property.address}</p>
                                </div>

                                <div className={styles.detail}>
                                    <span className="font-bold">Purchase Price</span>
                                    <span className="">${property.purchasePrice}</span>
                                </div>

                                <hr className="text-black" />

                                <div className={styles.detail}>
                                    <span className="font-bold">Project Term</span>
                                    <span className="">{property.projectTerm} years</span>
                                </div>

                                <hr className="text-black" />

                                <div className={styles.detail}>
                                    <span className="font-bold">Project Annual ROI</span>
                                    <span className="">{property.estimatedROI}%</span>
                                </div>

                                <hr className={styles.line} />
                            </div>

                            <span className={styles.propertyType}>
                                {property.type}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}