import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Loader from "../../components/Loader";
import { useProfileMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setUserName(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="container fixed  py-[13rem]   h-[60rem] w-[200rem] bg-cover bg-no-repeat bg-[url('https://framerusercontent.com/images/NG8f00dHeU3z5pepnvq267J0RQ.jpg')]">
      <div className="flex justify-center pr-[14rem]  align-center mr-[3rem] ml-[7rem]  md:flex md:space-x-4 bg-[rgba(255,255,255,0.52)]">
        <div className="md:w-1/3">
          <h2 className="text-2xl text-white font-semibold mb-4">Update Profile</h2>
          <form onSubmit={submitHandler} id="Profile">
            <div className="mb-4">
              <label className=" text-white font-semibold block  mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-input p-4 w-[30rem] bg-[rgba(204,201,201,0.52)] rounded-[6px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.3px]3 text-white"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className=" text-white font-semibold block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                               className="form-input p-4 w-[30rem] bg-[rgba(204,201,201,0.52)] rounded-[6px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.3px]3 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className=" text-white block font-semibold  mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                                className="form-input p-4 w-[30rem] bg-[rgba(204,201,201,0.52)] rounded-[6px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.3px]3 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className=" text-white block font-semibold  mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                                className="form-input p-4 w-[30rem] bg-[rgba(204,201,201,0.52)] rounded-[6px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[12.3px]3 text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-purple text-white py-2 px-4 rounded hover:bg-green-600-600"
              >
                Update
              </button>

              <Link
                to="/user-orders"
                className="bg-purple text-white py-2 px-4 rounded hover:bg-green-600-700"
              >
                My Orders
              </Link>
            </div>
            {loadingUpdateProfile && <Loader />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;