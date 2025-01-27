import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createPost } from "@/api/posts";

export function CreatePost() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [contents, setContents] = useState('')

    const queryClient = useQueryClient()
    const createPostMutation = useMutation({
        mutationFn: () => createPost({ title, author, contents }),
        onSuccess: () => queryClient.invalidateQueries(['posts'])
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        createPostMutation.mutate()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor='create-title'>Title: </Label>
                <Input
                    type='text'
                    name='create-title'
                    id='create-title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <br />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor='create-title'>Title: </Label>
                <Input
                    type='text'
                    name='create-author'
                    id='create-author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <br />
            <div className="grid w-full gap-1.5">
                <Label htmlFor="message-2">Write your content: </Label>
                <Textarea
                    id="content"
                    placeholder="Type your content here"
                    value={contents}
                    onChange={(e) => setContents(e.target.value)}
                />
            </div>
            <br />
            <br />
            <Button type='submit' disabled={!title || createPostMutation.isPending}>
                {createPostMutation.isPending ? 'Creating' : 'Create'}
            </Button>
            {createPostMutation.isSuccess ? (
                <p>
                    Post created succesfully!
                </p>
            ) : null}
        </form>
    )
}
