
import { CheckCircle } from 'lucide-react';

interface NewsCardProps {
  title: string;
  description: string;
  source: string;
  publishedAt: string;
  url: string;
  urlToImage?: string;
  isVerified?: boolean;
}

export const NewsCard = ({ title, description, url, urlToImage, isVerified = true }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {urlToImage && (
        <img 
          src={urlToImage} 
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-end mb-2">
          {isVerified && (
            <div className="flex items-center space-x-1 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {description}
        </p>
        
        <div className="flex justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
