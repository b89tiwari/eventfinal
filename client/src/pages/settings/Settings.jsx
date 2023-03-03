import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingsWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle"> Update your account</span>
          <span className="settingDeleteTitle"> Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Pictures</label>
          <div className="settingProfilePics">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Briejsh" />
          <label>Email</label>
          <input type="text" placeholder="brijesh@mailinator.como" />
          <label>Password</label>
          <input type="password" placeholder="Briejsh" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
