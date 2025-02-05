const Help = () => {
  return (
    <div className="help p-10">
      <h2>Help Me...</h2>
      <div>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Query"
        ></input>
        <button className="border bg-slate-300 p-2 m-2 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Help;
