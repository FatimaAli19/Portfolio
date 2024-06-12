import "../assets/styles.css";
function MyContact() {
  return (
    <div className="bgblack">
      <div>
        <p className="textgreen text-center pt-5"> Get in Touch!!!</p>
      </div>
      <form>
        <div className="row text-white">
          <div className="col-lg-6 col-sm-12 mt-4">
            Name:
            <input
              type="text"
              id="text"
              placeholder="Enter your name"
              className="text-white"
            />
          </div>
          <div className="col-lg-6 col-sm-12 mt-4">
            Email:
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="text-white"
            />
          </div>
        </div>
        <div className="row text-white mt-4">
          <div>Message:</div>
          <textarea
            name="message"
            id="message"
            placeholder="Leave a message here"
            cols="10"
            rows="5"
            className="col-8 mt-2 text-white"
          ></textarea>
        </div>
      </form>
      <div className="btncontainer">
        <button className="btn text-white">Shoot</button>
      </div>
    </div>
  );
}

export default MyContact;
