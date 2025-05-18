import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

// Import works data
import { works } from "@/data/works";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = works.find((work) => work.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/#photos" 
          className="inline-block mb-8 text-blue-500 hover:text-blue-600"
        >
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={630}
            className="w-full object-cover h-[400px]"
          />
          
          <div className="p-6">
            {project.markdownContent ? (
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{project.markdownContent}</ReactMarkdown>
              </div>
            ) : (
              <p className="text-gray-700 text-lg mb-6">{project.description}</p>
            )}
            
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Galería de Imágenes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.additionalImages.map((image, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      {image.caption && (
                        <p className="p-4 text-sm text-gray-600 text-center">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Visit Website
              </Link>
              
              {project.playStoreUrl && (
                <Link
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={60}
                  />
                </Link>
              )}
              
              {project.appStoreUrl && (
                <Link
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    width={160}
                    height={60}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 