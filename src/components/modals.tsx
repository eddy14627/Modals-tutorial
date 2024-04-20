const modals = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-lg bg-opacity-25 flex justify-center items-center text-xl">
      <div className="flex flex-col w-1/2 h-1/2 items-center gap-4 bg-slate-400 p-10 rounded-md border-2 relative">
        <p className="text-xl font-bold underline-offset-1 bg-slate-300 px-6 py-3 border-red-400 border-2 border-r-2">
          Modals
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          corporis earum tempora tenetur blanditiis quibusdam delectus eaque
          quod, nobis cum. Eaque sed iure quae. Maxime dolores cupiditate
          assumenda porro magni!
        </p>
        <button
          className="absolute top-3 right-3 bg-slate-300 p-2 rounded-full"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default modals;
