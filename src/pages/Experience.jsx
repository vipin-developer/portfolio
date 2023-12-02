import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export default function Experience() {
  const workExp = [
    {
      company: "Epam Anywhere, India",
      designation: "Senior software Engineer",
      date: "Aug 2023 – Present",
      desc: "working on a react project for a travel agency which has various user types like client, coordinator and admin each of them has different logins and based on the login different UI designs",
    },
    {
      company: "Synapsica healthcare pvt ltd",
      designation: "Software Engineer",
      date: "Dec 2021 – Aug 2023",
      desc: "Became proficient in react.js, node.js and mongodb. As the company is product base, implementing new in- teresting functionality rapidly. Learned new ways to solve problems.",
    },
    {
      company: "ICT Group",
      designation: "Tech Lead",
      date: "Feb 2020 – November 2021",
      desc: "Became proficient in angular, vue.js, node.js and mongodb. Learned and worked on microservice architec- ture,Dockers and team work. Worked on two major projects with different tech stack.",
    },
    {
      company: "AdinavLabs pvt ltd",
      designation: "Software Developer",
      date: "July 2018 – Jan 2020",
      desc: "Became proficient in React-native, React, Angular, node.js and mongodb. Learned and worked on agile methodology and team work. Worked on complex projects with different tech stack.",
    },
  ];
  return (
    <div className="experience Experience-main">
      <h2 className="skill-text exp">My Experience</h2>

      <VerticalTimeline>
        {workExp.map((item) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#9970f9", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.date}
              iconStyle={{ background: "#9970f9", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h2 className="vertical-timeline-element-title">
                {item.designation}
              </h2>
              <h2 className="vertical-timeline-element-subtitle">
                {item.company}
              </h2>
              <p>{item.desc}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
