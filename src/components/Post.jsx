import PropTypes from 'prop-types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { User } from './User'
import { Link } from 'react-router'
import slug from 'slug'

export function Post({
    title,
    contents,
    author,
    _id,
    fullPost = false,
}) {
    return (
        <Card>
            <CardHeader>
                {fullPost ? (
                    <CardTitle>{title}</CardTitle>

                ) : (
                    <Link to={`/posts/${_id}/${slug(title)}`}>
                        <CardTitle>{title}</CardTitle>
                    </Link>
                )}
            </CardHeader>
            <CardContent>
                <p>
                    {contents}
                </p>
            </CardContent>
            <CardFooter>
                {fullPost && <div>{contents}</div>}
                {author && (
                    <em>
                        {fullPost && <br />}
                        Written by <User id={author} />
                    </em>
                )}
            </CardFooter>
        </Card>
    )
}

Post.PropTypes = {
    title: PropTypes.string.isRequired,
    contents: PropTypes.string,
    author: PropTypes.string,
    _id: PropTypes.string.isRequired,
    fullPost: PropTypes.bool,
}
