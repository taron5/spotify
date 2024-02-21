export const spotifyFetcher = (data: any[]) =>
  fetch(`${process.env.NEXT_PUBLIC_SPOTIFY_API_BASE_URL}/${data[0]}`, {
    headers: {
      Authorization: `Bearer ${data[1]}`,
    },
  })
    .then((r) => r.json())
    .catch((err) => err.json);

export const localFetcher = (url: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API}/api/${url}`).then((r) => r.json());
