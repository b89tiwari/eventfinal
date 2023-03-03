import "./write.css"

export default function Write() {
  return (
    <div className="write">
         <img
                    src="https://khqa.com/resources/media/e0db4d6c-cfb7-41eb-9591-f1b82cffcd91-jumbo16x9_worldtravelguy.jpg?1641239930038"
                    alt=""
                    className='writeImg'
                />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Explain the event details"
            className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
