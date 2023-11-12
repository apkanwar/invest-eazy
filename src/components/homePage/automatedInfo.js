import { useState, useEffect } from "react";

export default function AutomatedInfo() {
    const info = [
        { id: '0', name: 'Total Asset Value', value: '$100,000,000' },
        { id: '1', name: 'Total Distributions', value: '$150,000,000' },
        { id: '2', name: 'Total Properties', value: '50' },
        { id: '3', name: 'Total Investors', value: '200' },
    ]

    const [infoIndex, setInfoIndex] = useState(0);

    useEffect(() => {
        let i = 0;
        const stop = 4;
        var interval = setInterval(increment, 3000);

        function increment() {
            i = i + 1;
            if (i === stop)
                i = 0;
            setInfoIndex(i);
        }

    }, []);

    return (
        <section className="lg:py-4">
            {info.filter(data => data.id == infoIndex).map(filteredInfo => (
                <div key={filteredInfo.id} className="mx-auto flex flex-col max-w-7xl items-center justify-center p-8 lg:px-20">
                    <div className="text-2xl font-normal text-eazy-main pb-1 font-headings lg:text-4xl">
                        {filteredInfo.name}
                    </div>
                    <div className="text-4xl font-semibold text-gray-900 dark:text-white py-10 font-numbers lg:text-6xl">
                        {filteredInfo.value}
                    </div>
                </div>
            ))}
        </section>
    )
}