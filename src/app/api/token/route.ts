export async function GET() {
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  const response = await fetch(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_BASE_URL}/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(client_id + ':' + client_secret).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });

  const token = await response.json();

  return Response.json({ access_token: token.access_token, expires_in: token.expires_in });
}
