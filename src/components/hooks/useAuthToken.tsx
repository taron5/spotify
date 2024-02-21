'use client';
import { useState, useEffect } from 'react';

interface TokenResponse {
  access_token: string;
  expires_in: number;
}

const useAuthToken = (): {
  token: string | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<Readonly<boolean>>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchSpotifyToken();
  }, []);

  const fetchSpotifyToken = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/token`, {
        next: { revalidate: 3600 },
      });
      const newToken: TokenResponse = await response.json();

      setToken(newToken.access_token);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { token, isLoading, error };
};

export default useAuthToken;
