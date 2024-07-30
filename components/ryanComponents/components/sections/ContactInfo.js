const ContactInfo = ({about ,email}) => {
  return (
    <div dir="" className="content contacts">
      {/* title */}
      {/* <div className="title">Get in Touch</div> */}
      {/* content */}


      <div className="row">
        <div dir='' className="col col-d-12 col-t-12 col-m-12 border-line-v">
          {/* <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div> */}




          <div dir='' className="info-list font-serif ">
            <ul>
              <li dir="" className="">
              <strong className="">Address :</strong> 
              {about?.location}
        
              </li>
              <li className=" ">
                <strong>Email : </strong> {email}
              </li>
              <li className="">
                <strong>Phone :</strong> {about?.phone}
              </li>
              {/* <li>
                <strong>Freelance : </strong> Available
              </li> */}
            </ul>
          </div>


        </div>
        <div className="clear" />
      </div>

    </div>
  );
};
export default ContactInfo;
