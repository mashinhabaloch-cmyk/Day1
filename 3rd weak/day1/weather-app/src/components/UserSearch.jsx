import React, { useEffect, useState } from "react";

const UserSearch = () => {
  // User ID input state
  const [userId, setUserId] = useState(1);

  // User data state
  const [user, setUser] = useState(null);

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true; // cleanup flag

    const fetchUser = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();

        // Update state only if component is still mounted
        if (isMounted) {
          setUser(data);
        }
      } catch (error) {
        console.error("User fetch failed");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchUser();

    // Cleanup function (race condition handling)
    return () => {
      isMounted = false;
    };
  }, [userId]); // runs every time userId changes

  return (
    <div className="card">
      <h2>👤 User Database Search</h2>

      <input
        type="number"
        min="1"
        max="10"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {isLoading && <p>Loading user...</p>}

      {!isLoading && user && (
        <p>
          ID: {user.id} - {user.name}
        </p>
      )}
    </div>
  );
};

export default UserSearch;
