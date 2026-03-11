
const CatchAllRoutesPage = async({params}: {params: Promise<{slug: string[]}>}) => {
  console.log(await params)
  return (
    <div>
      <h1 className="2xl">Catch All Routes Page</h1>
    </div>
  );
};

export default CatchAllRoutesPage;