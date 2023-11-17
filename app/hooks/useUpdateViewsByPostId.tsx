import { database } from "@/libs/AppWriteClient"

const useUpdateViewsByPostId = async (postId: string, views: string) => {
    try {
        await database.updateDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE), 
            postId, 
        { 
            views: views
        })
    } catch (error) {
        throw error
    }
}

export default useUpdateViewsByPostId