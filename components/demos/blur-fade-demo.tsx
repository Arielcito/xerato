import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link, slug, hasDetails }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <div className="flex flex-col h-full">
              <Image
                height={10000}
                width={10000}
                className="h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`${title} project screenshot`}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <div className="flex gap-3">
                  <Link 
                    href={link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Visit Website
                  </Link>
                  {hasDetails && (
                    <Link 
                      href={`/projects/${slug}`}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
