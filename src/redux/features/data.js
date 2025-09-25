export const DATASET_VERSION = 2; // tăng mỗi khi đổi dữ liệu
export const chapters = [
  {
    id: 1,
    title: "Nhận thức khoa học",
    description: "Cơ sở lý thuyết nhận thức",
    icon: "📘",
    questions: [
      {
        id: 1,
        term: "Nhận thức",
        definition:
          "Quá trình phản ánh hiện thực khách quan vào trong tư duy con người trên cơ sở thực tiễn.",
        quiz: {
          question: "Nhận thức là gì?",
          options: [
            "Sự phản ánh chủ quan của con người",
            "Quá trình phản ánh hiện thực khách quan vào tư duy",
            "Hoạt động tinh thần thuần túy",
            "Kinh nghiệm cá nhân trong cuộc sống",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ là quá trình phản ánh hiện thực khách quan vào trong tư duy con người",
        answer: "Nhận thức",
        fullFillAnswer:
          "Nhận thức là quá trình phản ánh hiện thực khách quan vào trong tư duy con người",
      },
      {
        id: 2,
        term: "Thực tiễn",
        definition:
          "Toàn bộ hoạt động vật chất có mục đích mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội.",
        quiz: {
          question: "Thực tiễn trong triết học Mác – Lênin là gì?",
          options: [
            "Hoạt động tinh thần",
            "Kinh nghiệm chủ quan",
            "Hoạt động vật chất có mục đích mang tính xã hội",
            "Suy nghĩ cá nhân",
          ],
          correct: 2,
        },
        fillAnswer:
          "___ là toàn bộ hoạt động vật chất có mục đích mang tính xã hội",
        answer: "Thực tiễn",
        fullFillAnswer:
          "Thực tiễn là toàn bộ hoạt động vật chất có mục đích mang tính xã hội",
      },
      {
        id: 3,
        term: "Nguồn gốc nhận thức",
        definition:
          "Thực tiễn là cơ sở, động lực, mục đích và tiêu chuẩn của chân lý.",
        quiz: {
          question: "Nguồn gốc của nhận thức là gì?",
          options: ["Ý thức", "Thực tiễn", "Kinh nghiệm cá nhân", "Ngôn ngữ"],
          correct: 1,
        },
        fillAnswer: "___ là nguồn gốc, động lực và mục đích của nhận thức",
        answer: "Thực tiễn",
        fullFillAnswer:
          "Thực tiễn là nguồn gốc, động lực và mục đích của nhận thức",
      },
      {
        id: 4,
        term: "Nhận thức cảm tính",
        definition:
          "Giai đoạn đầu tiên của nhận thức, phản ánh trực tiếp sự vật hiện tượng thông qua giác quan.",
        quiz: {
          question: "Nhận thức cảm tính phản ánh sự vật qua đâu?",
          options: [
            "Hoạt động lý luận",
            "Giác quan",
            "Thực nghiệm khoa học",
            "Trực giác siêu hình",
          ],
          correct: 1,
        },
        fillAnswer: "Nhận thức cảm tính phản ánh sự vật qua ___",
        answer: "Giác quan",
        fullFillAnswer: "Nhận thức cảm tính phản ánh sự vật qua giác quan",
      },
      {
        id: 5,
        term: "Nhận thức lý tính",
        definition:
          "Giai đoạn cao hơn của nhận thức, phản ánh gián tiếp và khái quát sự vật bằng tư duy trừu tượng.",
        quiz: {
          question: "Nhận thức lý tính phản ánh sự vật bằng cách nào?",
          options: [
            "Thông qua giác quan trực tiếp",
            "Thông qua tư duy trừu tượng",
            "Thông qua hành vi thực tiễn",
            "Thông qua cảm xúc",
          ],
          correct: 1,
        },
        fillAnswer: "Nhận thức lý tính phản ánh sự vật bằng ___",
        answer: "Tư duy trừu tượng",
        fullFillAnswer:
          "Nhận thức lý tính phản ánh sự vật bằng tư duy trừu tượng",
      },
      {
        id: 6,
        term: "Kinh nghiệm",
        definition:
          "Tri thức được hình thành từ sự quan sát, thử nghiệm và tích lũy trong đời sống thực tiễn.",
        quiz: {
          question: "Kinh nghiệm được hình thành từ đâu?",
          options: [
            "Hoạt động tư duy trừu tượng",
            "Sự quan sát và tích lũy trong thực tiễn",
            "Sự suy đoán chủ quan",
            "Niềm tin tôn giáo",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ được hình thành từ sự quan sát và tích lũy trong thực tiễn",
        answer: "Kinh nghiệm",
        fullFillAnswer:
          "Kinh nghiệm được hình thành từ sự quan sát và tích lũy trong thực tiễn",
      },
      {
        id: 7,
        term: "Lý luận",
        definition:
          "Hệ thống tri thức được khái quát từ kinh nghiệm, phản ánh bản chất và quy luật của sự vật, hiện tượng.",
        quiz: {
          question: "Lý luận có nguồn gốc từ đâu?",
          options: [
            "Niềm tin chủ quan",
            "Khái quát kinh nghiệm",
            "Ngẫu nhiên trong tư duy",
            "Cảm xúc cá nhân",
          ],
          correct: 1,
        },
        fillAnswer: "Lý luận được hình thành từ sự ___ kinh nghiệm",
        answer: "Khái quát",
        fullFillAnswer: "Lý luận được hình thành từ sự khái quát kinh nghiệm",
      },
      {
        id: 8,
        term: "Chân lý",
        definition:
          "Tri thức phù hợp với hiện thực khách quan và được kiểm nghiệm qua thực tiễn.",
        quiz: {
          question: "Chân lý được xác định bằng gì?",
          options: [
            "Ý thức chủ quan",
            "Sự đồng thuận xã hội",
            "Kiểm nghiệm qua thực tiễn",
            "Sự phỏng đoán logic",
          ],
          correct: 2,
        },
        fillAnswer: "___ là tri thức được kiểm nghiệm qua thực tiễn",
        answer: "Chân lý",
        fullFillAnswer: "Chân lý là tri thức được kiểm nghiệm qua thực tiễn",
      },
      {
        id: 9,
        term: "Sai lầm",
        definition:
          "Tri thức không phù hợp với hiện thực khách quan nhưng lại được con người cho là đúng.",
        quiz: {
          question: "Sai lầm trong nhận thức là gì?",
          options: [
            "Tri thức không phù hợp hiện thực nhưng được coi là đúng",
            "Tri thức luôn đúng với hiện thực",
            "Sự phản ánh khách quan",
            "Kinh nghiệm khoa học",
          ],
          correct: 0,
        },
        fillAnswer:
          "Sai lầm là tri thức không phù hợp với ___ nhưng lại được coi là đúng",
        answer: "Hiện thực khách quan",
        fullFillAnswer:
          "Sai lầm là tri thức không phù hợp với hiện thực khách quan nhưng lại được coi là đúng",
      },
      {
        id: 10,
        term: "Thực nghiệm khoa học",
        definition:
          "Hoạt động thực tiễn đặc biệt nhằm kiểm chứng giả thuyết, khám phá quy luật tự nhiên và xã hội.",
        quiz: {
          question: "Thực nghiệm khoa học có vai trò gì trong nhận thức?",
          options: [
            "Khẳng định niềm tin",
            "Kiểm chứng giả thuyết và khám phá quy luật",
            "Thay thế tư duy lý luận",
            "Xác nhận kinh nghiệm cá nhân",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ là hoạt động kiểm chứng giả thuyết và khám phá quy luật",
        answer: "Thực nghiệm khoa học",
        fullFillAnswer:
          "Thực nghiệm khoa học là hoạt động kiểm chứng giả thuyết và khám phá quy luật",
      },
    ],
  },
  {
    id: 2,
    title: "Vật chất và ý thức",
    description: "Quan hệ biện chứng cơ bản",
    icon: "⚖️",
    questions: [
      {
        id: 2,
        term: "Vật chất",
        definition:
          "Phạm trù triết học dùng để chỉ thực tại khách quan, tồn tại không phụ thuộc vào ý thức và được ý thức con người phản ánh.",
        quiz: {
          question: "Vật chất theo quan điểm Mác - Lênin là gì?",
          options: [
            "Bất kỳ cái gì tồn tại",
            "Những gì con người cảm nhận được",
            "Thực tại khách quan được phản ánh vào ý thức",
            "Sản phẩm của ý thức con người",
          ],
          correct: 2,
        },
        fillAnswer: "___ tồn tại độc lập với ý thức con người",
        answer: "Vật chất",
        fullFillAnswer: "Vật chất tồn tại độc lập với ý thức con người",
      },
    ],
  },
  {
    id: 3,
    title: "Quy luật biện chứng",
    description: "Phương pháp tư duy khoa học",
    icon: "🔄",
    questions: [
      {
        id: 4,
        term: "Quy luật lượng - chất",
        definition:
          "Những thay đổi về lượng dẫn đến thay đổi về chất khi đạt tới một điểm nút nhất định.",
        quiz: {
          question: "Quy luật lượng - chất khẳng định điều gì?",
          options: [
            "Chất thay đổi không phụ thuộc lượng",
            "Lượng và chất tồn tại tách rời",
            "Lượng thay đổi dần dần có thể dẫn đến sự thay đổi về chất",
            "Chỉ chất mới quyết định sự vật",
          ],
          correct: 2,
        },
        fillAnswer: "Theo ___, sự thay đổi về lượng dẫn đến thay đổi về chất",
        answer: "Quy luật lượng - chất",
        fullFillAnswer:
          "Theo Quy luật lượng - chất, sự thay đổi về lượng dẫn đến thay đổi về chất",
      },
    ],
  },
  {
    id: 4,
    title: "Lịch sử xã hội",
    description: "Động lực phát triển",
    icon: "🏛️",
    questions: [
      {
        id: 6,
        term: "Phương thức sản xuất",
        definition:
          "Sự thống nhất giữa lực lượng sản xuất và quan hệ sản xuất, là cơ sở kinh tế của xã hội.",
        quiz: {
          question:
            "Phương thức sản xuất là sự thống nhất giữa hai yếu tố nào?",
          options: [
            "Lao động và tư liệu sản xuất",
            "Lực lượng sản xuất và quan hệ sản xuất",
            "Kinh tế và chính trị",
            "Cơ sở hạ tầng và kiến trúc thượng tầng",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ là sự thống nhất giữa lực lượng sản xuất và quan hệ sản xuất",
        answer: "Phương thức sản xuất",
        fullFillAnswer:
          "Phương thức sản xuất là sự thống nhất giữa lực lượng sản xuất và quan hệ sản xuất",
      },
    ],
  },
  {
    id: 5,
    title: "Cách mạng và tiến bộ",
    description: "Con đường giải phóng",
    icon: "🚩",
    questions: [
      {
        id: 8,
        term: "Cách mạng xã hội chủ nghĩa",
        definition:
          "Quá trình chuyển biến căn bản từ chế độ tư bản chủ nghĩa sang xã hội chủ nghĩa.",
        quiz: {
          question: "Cách mạng xã hội chủ nghĩa do giai cấp nào lãnh đạo?",
          options: [
            "Giai cấp tư sản",
            "Giai cấp vô sản",
            "Giai cấp tiểu tư sản",
            "Giai cấp phong kiến",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ là quá trình chuyển biến từ chế độ tư bản sang xã hội chủ nghĩa",
        answer: "Cách mạng xã hội chủ nghĩa",
        fullFillAnswer:
          "Cách mạng xã hội chủ nghĩa là quá trình chuyển biến từ chế độ tư bản sang xã hội chủ nghĩa",
      },
      {
        id: 9,
        term: "Tiến bộ xã hội",
        definition:
          "Sự vận động đi lên của lịch sử loài người, hướng tới giải phóng con người và phát triển toàn diện.",
        quiz: {
          question: "Tiến bộ xã hội hướng tới mục tiêu gì?",
          options: [
            "Tích lũy của cải vật chất",
            "Phát triển cá nhân đơn lẻ",
            "Giải phóng con người và phát triển toàn diện",
            "Mở rộng lãnh thổ",
          ],
          correct: 2,
        },
        fillAnswer:
          "___ hướng tới giải phóng con người và phát triển toàn diện",
        answer: "Tiến bộ xã hội",
        fullFillAnswer:
          "Tiến bộ xã hội hướng tới giải phóng con người và phát triển toàn diện",
      },
    ],
  },
];
