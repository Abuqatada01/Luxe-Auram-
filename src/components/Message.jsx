const Message = ({ variant, children }) => {
    const getVariantClass = () => {
      switch (variant) {
        case "succcess":
          return "bg-pink-100 text-pink-800";
        case "error":
          return "bg-red-100 text-red-800";
        default:
          return "bg-blue-100 text-blue-800";
      }
    };
  
    return <div className={`p-4 rounded ${getVariantClass()}`}>{children}</div>;
  };
  
  export default Message;