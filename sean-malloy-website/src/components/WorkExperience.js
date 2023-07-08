const WorkExperiences = ({
  experiences,
  linkRegex,
  HighlightLineStyle,
  LiNoDash,
  Link,
}) => {
  return (
    <>
      {Object.entries(experiences).map(([company, details]) => (
        <ul key={company}>
          <h3>{company}</h3>
          {details.map((detail, index) => {
            const isHighlighted = detail.startsWith("*");
            const content = isHighlighted ? detail.substring(1) : detail;

            const match = linkRegex.exec(content);
            const text = match ? content.replace(match[0], "") : content;
            const link = match ? match[1] : null;

            let renderedContent;
            if (link) {
              renderedContent = <Link href={link}>{text}</Link>;
            } else {
              renderedContent = <span>{text}</span>;
            }
            if (content === " ") {
              renderedContent = <br />;
            }
            return (
              <LiNoDash
                style={index === 0 || isHighlighted ? HighlightLineStyle : null}
                key={detail}
              >
                {renderedContent}
              </LiNoDash>
            );
          })}
        </ul>
      ))}
    </>
  );
};

export default WorkExperiences;
