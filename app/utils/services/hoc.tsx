import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function ProtectedRoute(props: P): JSX.Element {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (!token) {
        router.push("/"); // Redirect to login page if no token
      } else {
        setIsAuthenticated(true); // Set authenticated to true if token exists
      }
      setIsLoading(false); // Mark loading as complete
    }, [router]);

    // Don't render anything until loading is complete
    if (isLoading) {
      return <div>Loading...</div>; // Show a loading spinner or message
    }

    // Don't render the wrapped component if not authenticated
    if (!isAuthenticated) {
      router.push("/"); // Return nothing or a fallback UI
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };
}
