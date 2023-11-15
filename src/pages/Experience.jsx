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
      describe:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      company: "Epam Anywhere, India",
      designation: "Senior software Engineer",
      describe:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      company: "Epam Anywhere, India",
      designation: "Senior software Engineer",
      describe:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      company: "Epam Anywhere, India",
      designation: "Senior software Engineer",
      describe:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
  ];
  return (
    <div className="experience Experience-main">
      <h2 className="skill-text exp">My Experience</h2>

      <VerticalTimeline>
        {workExp.map((item)=>{
            return (
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#9970f9", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                date="Aug 2023 - present"
                iconStyle={{ background: "#9970f9", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h2 className="vertical-timeline-element-title">
                  Senior Software Engineer
                </h2>
                <h2 className="vertical-timeline-element-subtitle">
                  Epam Systems, India
                </h2>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
            )
        })}
      </VerticalTimeline>
    </div>
  );
}
