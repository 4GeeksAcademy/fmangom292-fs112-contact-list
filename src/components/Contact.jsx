import avatar from "../assets/img/avatar.jpg"

export const Contact = () => (
    <div className="container border border-1 border-dark p-3">
        <div className="row">
            <div className="col-sm-4 col-md-4 col-xs-12">
                <img className="avatar" src={avatar} alt="" />
            </div>
            <div className="d-flex flex-column col-sm-4 col-md-4 col-xs-12 contact-info">
                <h3>Hernesto Gandía</h3>
                <p>📍: 5842 Hillcrest Rd </p>
                <p>📞: 956 666 666 </p>
                <p>📧: hernestog@4geeks.com </p>
            </div>
            <div className="d-flex col-sm-4 col-md-4 col-xs-12">
                <div className="d-flex g-2">
                    <a href="#" className="m-3">🖍️</a>
                    <a href="#"  className="m-3">🗑️</a>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;