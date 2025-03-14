import { useQuery } from '@tanstack/react-query'
import { PostList } from '../components/PostList'
import { CreatePost } from '../components/CreatePost'
import { PostFilter } from '../components/PostFilter'
import { PostSorting } from '../components/PostSorting'
import { getPosts } from '@/api/posts'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { Helmet } from 'react-helmet-async';

export function Home() {
    const [author, setAuthor] = useState('')
    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState('descending')

    const postsQuery = useQuery({
        queryKey: ['posts', { author, sortBy, sortOrder }],
        queryFn: () => getPosts({ author, sortBy, sortOrder }),
    })
    const posts = postsQuery.data ?? []

    return (
        <div className='p-8'>
            <Helmet>
                <title>Full-Stack React Blog</title>
                <meta
                    name='description'
                    content='A blog full of articles about full-stack React development.'
                />
            </Helmet>
            <Header />
            <CreatePost />
            <br />
            <hr />
            Filter by:
            <PostFilter
                field='author'
                value={author}
                onChange={(value) => setAuthor(value)}
            />
            <br />
            <PostSorting
                fields={['createdAt', 'updatedAt']}
                value={sortBy}
                onChange={(value) => setSortBy(value)}
                orderValue={sortOrder}
                onOrderValueChange={(orderValue) => setSortOrder(orderValue)}
            />
            <hr />
            <PostList posts={posts} />
        </div>
    )
}
