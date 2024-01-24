import { useEffect, useState } from "react";
import UserProfile from "./Pages/UserProfile";
import Cookies from "js-cookie";
import { verifyUser } from "./redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(verifyUser(navigate));
  }, []);

  return (
    <>
      <div className="w-full h-100 p-3 mb-2 text-black">
        <div className="d-flex flex-row">
          <div className="p-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              style={{ width: "65px", height: "65px" }}
              alt="profile_photo"
            />
          </div>
          <div className="p-2">
            <h3 className="mt-2">Username</h3>
            <p className="me-auto" onClick={handleModal}>
              Profile
            </p>
          </div>
        </div>
      </div>
      {showModal && <UserProfile handleClose={handleModal} />}
    </>
  );
}

export default App;
