import styled from "styled-components";
import Experiences from "./Experience.json";
import WorkExperience from "./WorkExperience";
import BodyContent from "./BodyContent";

const Body = () => {
  const linkRegex = /\((https.*?)\)/;
  const Heading = styled.h2`
    color: #66fcf1;
    text-align: left;
  `;

  const Text = styled.p`
    flex: 1;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    min-height: 100px;
    text-align: left;
    padding: 10px;
    font-size: 20px;
    margin: 0px 20px;
  `;

  const LiNoDash = styled.li`
    font-size: 20px;
    margin: 0px 20px;
    list-style-type: none;
  `;

  const Link = styled.a`
    padding-left: 5px;
    padding-right: 5px;
    color: #58b3a2;
    text-decoration: none;
    transition: color 0.3s;
    font-weight: normal;

    &:hover {
      color: #66fcf1;
      font-weight: bold;
    }
  `;

  const HighlightLineStyle = {
    fontWeight: "bold",
    color: "#2c8d7d",
  };

  const summary = Experiences.Summary;
  const Education = Experiences.Education;
  const Experience = Experiences.WorkExperiences;
  const CompletedCourses = Experiences.CompletedCourses;
  const Leadership = Experiences.Leadership;
  const Projects = Experiences.Projects;
  const Skills = Experiences.Skills;
  return (
    <div>
      <Heading>Summary</Heading>
      <Text>{summary}</Text>
      <Heading>Education</Heading>
      <BodyContent
        content={Education}
        LiNoDash={LiNoDash}
        HighlightLineStyle={HighlightLineStyle}
        linkRegex={linkRegex}
        Link={Link}
      />

      <Heading>Work Experiences</Heading>
      <WorkExperience
        experiences={Experience}
        HighlightLineStyle={HighlightLineStyle}
        LiNoDash={LiNoDash}
        linkRegex={linkRegex}
        Link={Link}
      />

      <Heading>Completed Courses</Heading>
      <BodyContent
        content={CompletedCourses}
        LiNoDash={LiNoDash}
        HighlightLineStyle={HighlightLineStyle}
        linkRegex={linkRegex}
        Link={Link}
      />

      <Heading>Leadership</Heading>
      <BodyContent
        content={Leadership}
        LiNoDash={LiNoDash}
        HighlightLineStyle={HighlightLineStyle}
        linkRegex={linkRegex}
        Link={Link}
      />

      <Heading>Projects</Heading>
      <BodyContent
        content={Projects}
        LiNoDash={LiNoDash}
        HighlightLineStyle={HighlightLineStyle}
        linkRegex={linkRegex}
        Link={Link}
      />

      <Heading>Skills</Heading>
      <BodyContent
        content={Skills}
        LiNoDash={LiNoDash}
        HighlightLineStyle={HighlightLineStyle}
        linkRegex={linkRegex}
        Link={Link}
      />
    </div>
  );
};

export default Body;
