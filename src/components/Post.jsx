import PropTypes from 'prop-types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

export function Post({ title, contents, author }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                    {contents}
                </p>
            </CardContent>
            <CardFooter>
                {author && (
                    <em>
                        <br />
                        Written by <strong>{author}</strong>
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
}
