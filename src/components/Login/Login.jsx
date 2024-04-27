import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
// import PropTypes from "prop-types";

const Login = () => {
  // Destructure user and handleUserState from context
  const { user, handleUserState } = useOutletContext();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        handleUserState(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignInGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        handleUserState(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        handleUserState(user);
      } else {
        // User is logged out
        handleUserState(null);
      }
    });

    // Cleanup function to unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, []);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        handleUserState(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">
        Please login here
      </h2>
      <div className="flex justify-center gap-5">
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        ) : (
          <div className="flex gap-5">
            <button onClick={handleSignInGoogle} className="btn">
              Google login
            </button>
            <button onClick={handleSignInGithub} className="btn">
              Github login
            </button>
          </div>
        )}
      </div>
      {user && (
        <div>
          <h2 className="text-2xl font-bold text-center my-5">
            User: {user.displayName}
          </h2>
          <p className="text-xl font-semibold text-center">
            Email: {user.email}
          </p>
        </div>
      )}
    </div>
  );
};

// Login.propTypes = {
//   context: PropTypes.shape({
//     user: PropTypes.object,
//     handleUserState: PropTypes.func.isRequired,
//   }),
// };

export default Login;
