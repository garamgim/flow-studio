import { FiShare } from '@react-icons/all-files/fi/FiShare';

interface PopularChatbotCardProps {
  title: string;
  description: string;
  category: string[];
  onButtonClick?: () => void;
}

export default function PopularChatbotCard({
  title,
  description,
  category,
  onButtonClick,
}: PopularChatbotCardProps) {
  return (
    <div onClick={onButtonClick} className="w-full h-[180px] px-6 py-4 rounded-xl border-2 border-[#EAECF0] cursor-pointer group hover:border-[#9A75BF] hover:bg-[#9A75BF] hover:border-opacity-70 hover:bg-opacity-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="mr-2 w-[36px] h-[36px] rounded-md bg-gray-200"></div>
        <p className="text-[16px] text-[#1D2939]">{title}</p>
      </div>

      <div className="flex flex-col h-[100px] justify-between">
        <p className="text-[14px] text-[#667085]">{description}</p>

        <div className="flex justify-between items-center px-2">
         <div className="mb-2 flex gap-1 flex-wrap">
          {category.map((cat) => (
            <span key={cat} className="text-[13px] pr-2 py-1 text-[#667085]">
              # {cat}
            </span>
            ))}
          </div>
  
          {onButtonClick && (
            <button
            >
              <FiShare size={18} className="text-[#667085] group-hover:scale-110 group-hover:text-[#9A75BF]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
