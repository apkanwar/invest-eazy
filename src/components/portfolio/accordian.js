import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/miniComponents/accordian.module.css'
import pStyles from '@/styles//investments.module.css'
import { Disclosure } from "@headlessui/react";

export default function Accordian({ item }) {
    return (
        <Disclosure key={item.pID}>
            {({ open }) => (
                <>
                    <Disclosure.Button className={`${styles.activity} ${open ? 'rounded-t-xl' : 'rounded-xl'}`}>
                        <div className="rounded-lg overflow-hidden">
                            <Image src={`/properties/${item.image}`} height={80} width={80} alt="portfolioPropertyImage" />
                        </div>
                        <div className="flex flex-col ml-6 text-start">
                            <div className="text-xl font-semibold mb-2 hover:text-eazy-main-100">
                                <Link href={`/investments/propertyInfo/${encodeURIComponent(item.pID)}`}>
                                    {item.name}
                                </Link>
                            </div>
                            <div className="font-dText text-lg">
                                {item.address}
                            </div>
                        </div>
                    </Disclosure.Button>

                    <Disclosure.Panel className={styles.accordianBlock}>
                        <div className={pStyles.detail}>
                            <span className="font-bold">Total Investment</span>
                            <span className="">${item.invested}</span>
                        </div>

                        <hr className="text-black" />

                        <div className={pStyles.detail}>
                            <span className="font-bold">Estimated IRR</span>
                            <span className="">{item.irr}%</span>
                        </div>

                        <hr className="text-black" />

                        <div className={pStyles.detail}>
                            <span className="font-bold">Estimated ROI</span>
                            <span className="">{item.estimatedROI}%</span>
                        </div>

                        <hr className="text-black" />

                        <div className={pStyles.detail}>
                            <span className="font-bold">Project Term</span>
                            <span className="">{item.projectTerm} years</span>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
