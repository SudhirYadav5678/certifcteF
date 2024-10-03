import React, { useCallback, useRef } from 'react'
import { useSelector } from "react-redux"
import * as htmlToImage from 'html-to-image';

function Get() {
    const { images } = useSelector(store => store.images)

    const downloadImage = async () => {
        const getDiv = document.getElementById('main_design')
        const dataUrl = await htmlToImage.toPng(getDiv, {
            style: {
                transform: 'scale(1)'
            }
        })

        var link = document.createElement("a");
        link.download = 'image';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <div id='main_design' className='pt-20 text-black'>
                <div className=' border-2 w-[700px] h-[500px] bg-gray-100 relative mx-auto'>
                    <img className='w-full h-full absolute' src={images.templates} alt="images" />
                    <div className='flex justify-center'>
                        <p className='absolute text-3xl mt-32'>{images?.certificate}</p>
                        <p className='absolute  mt-[480px]'>{images?.institute}</p>
                        <p className='absolute text-5xl mt-60'>{images?.achiver}</p>
                        <p className='absolute '>{images?.issued}</p>
                        <p className='absolute'>{images?.date}</p>
                    </div>
                </div>
            </div>
            <button onClick={downloadImage}>Click me</button>
        </>
    )
}

export default Get