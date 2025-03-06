const Button = ({ href, children, component }) => (
  <a href={href}>
    children go here: {children}
    {/* <UniformSlot name="formattedmessage" /> */}
  </a>
);

export default Button;
