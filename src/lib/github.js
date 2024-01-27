export async function getStarredRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/dandipeng`)
    return await response.json()
  } catch (error) {
    console.info(error)
    return null
  }
}
