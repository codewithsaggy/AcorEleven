import React from "react";

const GoogleMap = () => {
  return (
    <div style={{ width: "100%", maxHeight: "400", margin: "0 auto" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.194733885626!2d114.18540303620948!3d22.309789156016684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400dee4f8584d%3A0xd77e8cf9a34bf91a!2sHung%20Hom%20Commercial%20Centre%20Block%20B%2C%2037-39%20Ma%20Tau%20Wai%20Rd%2C%20Hok%20Yuen%2C%20Hong%20Kong!5e0!3m2!1sen!2sin!4v1737731164287!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
