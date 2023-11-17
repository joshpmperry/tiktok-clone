"use client"


import Link from "next/link"
import { Suspense, useEffect } from "react"
import PostMainLikes from "./PostMainLikes"
import useCreateBucketUrl from "../hooks/useCreateBucketUrl"
import { PostMainCompTypes } from "../types"

export default function PostMain({ post }: PostMainCompTypes) {

    useEffect(() => {
        const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement
        const postMainElement = document.getElementById(`PostMain-${post.id}`);

        if (postMainElement) {
            let observer = new IntersectionObserver((entries) => {
                entries[0].isIntersecting ? video.play() : video.pause()
            }, { threshold: [0.6] });
        
            observer.observe(postMainElement);
        }
    }, [])
    
    return (
        <>
            <div id={`PostMain-${post.id}`} className="flex border-b py-6">

                <div className="cursor-pointer">
                <Suspense fallback={<p>Loading...</p>}>
                    <img className="rounded-full max-h-[60px]" width="60" src={useCreateBucketUrl(post?.profile?.image)} />
                </Suspense>
                </div>

                <div className="pl-3 w-full px-4">
                    <div className="flex items-center justify-between pb-0.5 text-[#BF3427]">
                        <Link href={`/profile/${post.profile.user_id}`}>
                            <span className="font-bold hover:underline cursor-pointer">
                                {post.profile.name}
                            </span>
                        </Link>
                    </div>
                    <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px] text-black">{post.text}</p>

                    <div className="mt-2.5 flex">
                        <div
                            className="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer"
                        >
                            <Suspense fallback={<p>Loading feed...</p>}>
                                <video 
                                    id={`video-${post.id}`}
                                    autoPlay={false}
                                    controls
                                    muted
                                    className="rounded-xl object-cover mx-auto h-full" 
                                    src={useCreateBucketUrl(post?.video_url)}
                                    />
                            </Suspense>
                        </div>
                        
                        <PostMainLikes post={post} />
                    </div>
                </div>
            </div>
        </>
    )
}
