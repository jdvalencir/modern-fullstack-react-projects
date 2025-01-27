import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post'

export function PostList({ posts = [] }) {
    return (
        <div className='grid grid-cols-3 gap-3 py-5'>
            {posts.map((post) => (
                <Fragment key={post._id}>
                    <Post {...post} key={post._id} />

                </Fragment>
            ))}
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
