import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol69a2NPmyZg7Ol6142Pz3eHVNBkWA8juZxtREa",
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol6XFPVIpVe85w7Yh2xARaISB1EsoMgDLlFzmpV",
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol6z60YSGyjOBPrFdM7hmtlvpTNSZRIUo92XnKw",
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol6xjQvD91QorIGDfq1M0bYwdBkANTgjiFcOW6t",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
