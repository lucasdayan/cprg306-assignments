"use client";
import React from "react";
import useUserAuth from "./utils/auth-context";
import Layout from "./layout";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Firebase sign-out error:", error);
    }
  };

  return (
    <Layout>
      <div>
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleLogout}>Logout</button>
            <Link href="/week-8/shopping-list">Go to Shopping List</Link>
          </div>
        ) : (
          <div>
            <p>Please login to continue.</p>
            <button onClick={handleLogin}>Login with GitHub</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Page;
