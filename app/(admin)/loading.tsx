const Loading = () => {
  return (
    <main className="h-[100vh] flex justify-center items-center">
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
    </main>
  );
};

export default Loading;
