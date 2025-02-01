export async function getPosts(queryParams) {
  console.warn(import.meta.env.VITE_BACKEND_URL)
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/posts?` +
      new URLSearchParams(queryParams),
  )
  return res.json()
}

export async function createPost(post) {
  console.warn(import.meta.env.VITE_BACKEND_URL)
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  return await res.json()
}
