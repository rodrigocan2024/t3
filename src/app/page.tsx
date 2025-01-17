import Link from "next/link";

const mockUrls = [
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol69a2NPmyZg7Ol6142Pz3eHVNBkWA8juZxtREa",
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol6XFPVIpVe85w7Yh2xARaISB1EsoMgDLlFzmpV",
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol6z60YSGyjOBPrFdM7hmtlvpTNSZRIUo92XnKw",
  "https://a5nxfyji83.ufs.sh/f/9M4OJ9Zg7Ol6xjQvD91QorIGDfq1M0bYwdBkANTgjiFcOW6t",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  )
}
