import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const ContactPage = () => {
  const workInfoData = [
    {
      image: <BsGithub style={{ fontSize: "7em" }} />,
      title: "GitHub",
      link: "https://github.com/ethxn2021",
    },
    {
      image: <FaLinkedin style={{ fontSize: "7em" }} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ethan-williams-584959195/",
    },
    {
      image: <MdOutgoingMail style={{ fontSize: "7em" }} />,
      title: "Gmail",
      link: "https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Aethxnwilliams439%40gmail.com",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1>Personal Information...|</h1>
        <p>
          Below are my personal information. Send me a message or email if you
          have any questions.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div>
            <a
              className="work-section-info"
              href={data.link}
              target="_blank"
              rel="noreferrer"
              key={data.title}
            >
              <div className="info-boxes-img-container">{data.image}</div>
              <h2>{data.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
