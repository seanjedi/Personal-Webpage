import styled from "styled-components";
import Experiences from "./Experience.json";

const Body = () => {
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

  const summary = Experiences.Summary;
  const Education = Experiences.Education;
  const WorkExperiences = Experiences.WorkExperience;
  const CompletedCourses = Experiences.CompletedCourse;
  const Leadership = Experiences.Leadership;
  const Projects = Experiences.Projects;
  const Skills = Experiences.Skills;
  return (
    <div>
      <Heading>Summary</Heading>
      <Text>{summary}</Text>
      <Heading>Education</Heading>

      <Heading>Work Experiences</Heading>
      <Heading>Completed Courses</Heading>
      <Heading>Leadership</Heading>
      <Heading>Projects</Heading>
      <Heading>Skills</Heading>
    </div>
  );
};

export default Body;
