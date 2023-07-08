import styled from "styled-components";
const BodyContent = ({
  content,
  linkRegex,
  link,
  LiNoDash,
  HighlightLineStyle,
}) => {
  const H3 = styled.h3`
    padding-left: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0px;
    padding-bottom: 0px;
    color: #2c8d7d;
  `;
  return (
    <>
      {Object.entries(content).map(([title, details]) => (
        <ul key={title}>
          <H3>{title}</H3>
          {details.map((detail) => {
            const isHighlighted = detail.startsWith("*");
            const content = isHighlighted ? detail.substring(1) : detail;
            return (
              <LiNoDash
                style={isHighlighted ? HighlightLineStyle : null}
                key={content}
              >
                {content}
              </LiNoDash>
            );
          })}
        </ul>
      ))}
    </>
  );
};

export default BodyContent;
