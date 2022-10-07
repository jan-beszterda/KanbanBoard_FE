const Card = ({title /*, username */ }) => {
  return (
    <div className="border border-slate-500 border-collapse rounded shadow-md m-2.5 bg-white flex-1 break-words">
        <p className="text-2xl p-2">title={title}</p>
        {/*<p className="text-xs text-slate-500 border-t border-slate-500 p-1 text-right">{username}</p>*/}
    </div>
  );
};

export default Card;