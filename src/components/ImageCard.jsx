export default function ImageCard({ imgSrc, title, description }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-indigo-700 text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  }