"use client"

import { Suspense, useEffect } from "react"
import MainLayout from "./layouts/MainLayout"
import { usePostStore } from "@/app/stores/post"
import ClientOnly from "./components/ClientOnly"
import PostMain from "./components/PostMain"

export default function Home() {
  let { allPosts, setAllPosts } = usePostStore();
  useEffect(() => { setAllPosts()}, [])
  return (
    <>
      <MainLayout>
        <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <Suspense fallback={<p>Loading feed...</p>}>
            <ClientOnly>
              {allPosts.map((post, index) => (
                <PostMain post={post} key={index} />
                ))}
            </ClientOnly>
          </Suspense>
        </div>
      </MainLayout>
    </>
  )
}

