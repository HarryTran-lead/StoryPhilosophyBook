import { Brain, Users, Globe } from "lucide-react";

export const corePhilosophies = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Chủ nghĩa duy vật biện chứng",
    subtitle: "Thế giới quan khoa học",
    description:
      "Nghiên cứu các quy luật phổ biến của sự vận động, phát triển của tự nhiên, xã hội và tư duy.",
    principles: [
      "Quy luật thống nhất và đấu tranh các mặt đối lập",
      "Quy luật chuyển hóa từ lượng sang chất",
      "Quy luật phủ định của phủ định",
    ],
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Chủ nghĩa duy vật lịch sử",
    subtitle: "Khoa học về xã hội",
    description:
      "Áp dụng thế giới quan duy vật biện chứng để nghiên cứu xã hội và lịch sử nhân loại.",
    principles: [
      "Tồn tại xã hội quyết định ý thức xã hội",
      "Lực lượng sản xuất quyết định quan hệ sản xuất",
      "Hạ tầng kinh tế quyết định thượng tầng kiến trúc",
    ],
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Lý thuyết giá trị thặng dư",
    subtitle: "Khám phá bí mật bóc lột",
    description:
      "Phân tích khoa học về cách thức tư bản gia tích lũy tài sản thông qua việc bóc lột sức lao động.",
    principles: [
      "Sức lao động trở thành hàng hóa đặc biệt",
      "Giá trị thặng dư là nguồn gốc lợi nhuận",
      "Bóc lột là bản chất của chủ nghĩa tư bản",
    ],
  },
];