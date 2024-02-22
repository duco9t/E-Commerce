import React, { useEffect, useState } from "react";

const TodayOrderSold = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const endValue = 53467; // Giá trị cuối cùng
        const duration = 2000; // Thời gian hiệu ứng (2.5 giây)

        let startTimestamp;

        const startAnimation = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;

            const easing = (progress) =>
                1 - Math.pow(1 - progress / duration, endValue/2); // Hàm easing đã thay đổi

            if (progress < duration) {
                const nextValue = Math.floor(
                    easing(progress / duration) * endValue
                );
                setValue(nextValue);
                requestAnimationFrame(startAnimation);
            } else {
                setValue(endValue);
            }
        };

        requestAnimationFrame(startAnimation);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Chỉ chạy một lần khi component được render

    return (
        <div className="flex flex-col items-center justify-evenly w-full p-2 py-6 rounded-xl shadow-md shadow-black-200/50 h-96 bg-gradient-to-r from-cyan-600  to-blue-900">
            <p className="text-xl lg:text-3xl font-bold mb-4 text-white">
                Today&apos;s order has been sold
            </p>
            <p className=" text-4xl md:text-8xl font-bold text-white">
                $ {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
        </div>
    );
};

export default TodayOrderSold;
