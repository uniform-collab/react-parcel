const Button = ({ href, children }) => (
  <div style={{ paddingTop: 50, paddingBottom: 50 }}>
    <a href={href?.path}>{children}</a>
  </div>
);

export default Button;
