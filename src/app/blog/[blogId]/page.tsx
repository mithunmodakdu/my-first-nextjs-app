
const BlogDetailsPage = async({params}: {params: Promise<{blogId: string}>}) => {
  console.log(await params)
  const {blogId} = await params;
  return (
    <div>
      Blog Details Page Component: blogId-{blogId}
    </div>
  );
}

export default BlogDetailsPage;