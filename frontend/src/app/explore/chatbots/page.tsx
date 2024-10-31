"use client";

import PopularChatbotCard from "@/components/chatbot/PopularChatbotCard";
import ChatbotCard from "@/components/chatbot/ChatbotCard";
import Search from "@/components/common/Search";
import { useState } from "react";

interface Chatbot {
  id: number;
  title: string;
  description: string;
  category: string[];
  iconId: number;
  shareNum: number;
}

const chatbots: Chatbot[] = [
  {
    id: 1,
    title: "Workflow Planning Assistant",
    description: "An assistant that helps you plan and select the right node for a workflow (v0.6.0).",
    category: ["교육"],
    iconId: 1,
    shareNum: 120,
  },
  {
    id: 2,
    title: "Financial Advisor Bot",
    description: "Provides insights and suggestions for better financial planning (v1.2.3).",
    category: ["금융"],
    iconId: 1,
    shareNum: 200,
  },
  {
    id: 3,
    title: "Health Tracker Assistant",
    description: "Tracks your daily health metrics and offers tips to improve your well-being (v2.0.1).",
    category: ["헬스케어"],
    iconId: 2,
    shareNum: 180,
  },
  {
    id: 4,
    title: "E-Commerce Helper",
    description: "Assists in finding the best deals and manages your online shopping lists (v1.0.5).",
    category: ["전자 상거래"],
    iconId: 3,
    shareNum: 150,
  },
  {
    id: 5,
    title: "Travel Itinerary Planner",
    description: "Helps you create and organize your travel plans with ease (v0.8.7).",
    category: ["여행"],
    iconId: 6,
    shareNum: 90,
  },
];


export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("모든 챗봇");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = [
    "모든 챗봇",
    "금융",
    "헬스케어",
    "전자 상거래",
    "여행",
    "교육",
    "엔터테이먼트",
    "기타",
  ];

  const popularChatbots = [...chatbots]
    .sort((a, b) => b.shareNum - a.shareNum)
    .slice(0, 4);

    const filteredChatbots = chatbots.filter((bot) => {
      const matchesCategory = selectedCategory === "모든 챗봇" || bot.category.includes(selectedCategory);
      const matchesSearch = bot.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  const handleCategoryClick = (label: string) => {
    setSelectedCategory(label);
  };

  return (
    <div className="px-12 py-10">
      <div>
        <p className="mb-4 text-[22px]">가장 인기있는 챗봇</p>
        <div className="flex flex-row justify-between w-full gap-4">
          {popularChatbots.map((chatbot) => (
            <PopularChatbotCard
              key={chatbot.id}
              title={chatbot.title}
              description={chatbot.description}
              iconId={chatbot.iconId}
              type="all"
              category={chatbot.category}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className="mb-2 text-[22px]">챗봇 라운지</p>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            {categories.map((label) => (
              <button
                key={label}
                onClick={() => handleCategoryClick(label)}
                className={`mr-6 ${selectedCategory === label ? "font-semibold" : "text-gray-600"}`}
              >
                {label}
              </button>
            ))}
          </div>
          <Search onSearchChange={setSearchTerm} />
        </div>


        <div className="flex flex-col gap-1">
          {filteredChatbots.map((bot) => (
            <ChatbotCard
              key={bot.id}
              title={bot.title}
              description={bot.description}
              iconId={bot.iconId}
              category={bot.category}
              onButtonClick={() => console.log(`Selected ${bot.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
