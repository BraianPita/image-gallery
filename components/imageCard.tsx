import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import React from "react";

export default function ImageCard({ image }: {image: {[key: string]: any}}) {



    return (
        <div className='max-w-xs rounded overflow-hidden shadow-lg'>
        <img src={image.webformatURL} alt="" className="w-full h-[40vmin] object-cover" />
        <div>
            <ul className='px-2'>
            <li>
                <strong>Views: </strong>
                {image.views}
            </li>
            <li>
                <strong>Likes: </strong>
                {image.likes}
            </li>
            <li>
                <strong>Downloads: </strong>
                {image.downloads}
            </li>
            <hr className='my-2' />
            <li className='flex flex-wrap mr-auto'>

                {image.tags.split(", ").map((tag: string, index: any) =>(
                    <span key={index} className='inline-block rounded-full bg-slate-500 text-sm text-white px-2 mb-2 mr-1'>
                        {tag}
                    </span>
                ))}

            </li>
            </ul>
        </div>
        </div>
    );
}