import "./main-frame.css";

const MainFrame = () => {
  return (
    <div className="main-frame">
      <section className="screenshot-2-1-parent">
        <img
          className="screenshot-2-1"
          loading="eager"
          alt=""
          src="/screenshot-2-1@2x.png"
        />
        <h1 className="edugeek">EDUGEEK</h1>
        <img
          className="download-2-icon"
          loading="eager"
          alt=""
          src="/download-2@2x.png"
        />
      </section>
      <nav className="parent-frame" navbar>
        <div className="inner-frame">
          <div className="login">LOGIN</div>
          <div className="home-about-us">HOME ABOUT US CONTACT</div>
        </div>
      </nav>
      <div className="dividing-line">
        <img className="empty-frame-icon" loading="eager" alt="" />
      </div>
      <section className="vertical-frame-wrapper">
        <textarea className="vertical-frame" rows={19} cols={62} />
      </section>
    </div>
  );
};

export default MainFrame;
