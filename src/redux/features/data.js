// src/data/chapter3.dataset.js
// Gộp 3 mức độ + Bộ 50 câu theo 3 chủ đề
// MỖI CÂU ĐỀU ĐẦY ĐỦ: term, definition, quiz{question, options, correct}, fillAnswer, answer, fullFillAnswer

export const DATASET_VERSION = 8;

/**
 * Lưu ý:
 * - quiz.correct dùng chỉ số 0-based (A=0, B=1, C=2, D=3)
 * - Mỗi chương có id riêng; mỗi câu trong chương đánh số từ 1
 */

export const chapters = [
  /* =========================================================
   * (1) GỘP 3 MỨC ĐỘ: Nhận biết (1–7) → Thông hiểu (8–13) → Vận dụng (14–18)
   * ========================================================= */
  {
    id: 30300,
    title: "Chương 3: Tồn tại xã hội và Ý thức xã hội",
    description:
      "Các câu hỏi ôn tập theo ba mức độ: Nhận biết, Thông hiểu, Vận dụng.",
    icon: "🧠",

    questions: [
      // ===== NHẬN BIẾT (1–7)
      {
        id: 1,
        term: "Tồn tại xã hội (TTXH)",
        definition:
          "Toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
        quiz: {
          question:
            "Theo quan điểm của chủ nghĩa duy vật lịch sử, tồn tại xã hội (TTXH) là gì?",
          options: [
            "Toàn bộ đời sống tinh thần và vật chất của xã hội.",
            "Toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
            "Toàn bộ những quan điểm, tư tưởng, lý luận của một cộng đồng người.",
            "Toàn bộ những thành tựu về văn hóa, khoa học và nghệ thuật của xã hội.",
          ],
          correct: 1,
        },
        fillAnswer:
          "___ là toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
        answer: "Tồn tại xã hội (TTXH)",
        fullFillAnswer:
          "Tồn tại xã hội là toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
      },
      {
        id: 2,
        term: "Các yếu tố cơ bản của TTXH",
        definition:
          "Hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất.",
        quiz: {
          question:
            "Tồn tại xã hội bao gồm ba yếu tố cơ bản. Đâu là phương án đúng nhất?",
          options: [
            "Phương thức sản xuất, nhà nước và giai cấp.",
            "Lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng.",
            "Hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất.",
            "Môi trường tự nhiên, dân số và hệ thống chính trị.",
          ],
          correct: 2,
        },
        fillAnswer: "Ba yếu tố cơ bản của TTXH: ___.",
        answer:
          "Hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất",
        fullFillAnswer:
          "TTXH bao gồm: hoàn cảnh địa lý, dân cư và phương thức sản xuất của cải vật chất.",
      },
      {
        id: 3,
        term: "Yếu tố quyết định nhất của TTXH",
        definition:
          "Phương thức sản xuất của cải vật chất giữ vai trò quyết định nhất.",
        quiz: {
          question:
            "Trong các yếu tố cấu thành tồn tại xã hội, yếu tố nào giữ vai trò quyết định nhất?",
          options: [
            "Hoàn cảnh địa lý và điều kiện tự nhiên.",
            "Yếu tố dân cư và mật độ dân số.",
            "Phương thức sản xuất của cải vật chất.",
            "Cả ba yếu tố đều có vai trò quan trọng như nhau.",
          ],
          correct: 2,
        },
        fillAnswer: "Yếu tố quyết định nhất của TTXH là ___.",
        answer: "Phương thức sản xuất của cải vật chất",
        fullFillAnswer:
          "Trong TTXH, phương thức sản xuất của cải vật chất giữ vai trò quyết định nhất.",
      },
      {
        id: 4,
        term: "Ý thức xã hội (YTXH)",
        definition:
          "Toàn bộ đời sống tinh thần của xã hội, nảy sinh từ và phản ánh tồn tại xã hội.",
        quiz: {
          question: "Ý thức xã hội (YTXH) được hiểu là:",
          options: [
            "Toàn bộ đời sống tinh thần của xã hội, nảy sinh từ tồn tại xã hội và phản ánh tồn tại xã hội.",
            "Toàn bộ đời sống vật chất của xã hội và quyết định tồn tại xã hội.",
            "Những ý thức, tình cảm riêng lẻ của từng cá nhân trong xã hội.",
            "Hệ thống các cơ quan quyền lực của nhà nước và các đảng phái chính trị.",
          ],
          correct: 0,
        },
        fillAnswer:
          "___ là phương diện tinh thần của đời sống xã hội, nảy sinh từ và phản ánh TTXH.",
        answer: "Ý thức xã hội (YTXH)",
        fullFillAnswer:
          "Ý thức xã hội là phương diện tinh thần của đời sống xã hội, nảy sinh từ và phản ánh TTXH.",
      },
      {
        id: 5,
        term: "Kết cấu của YTXH",
        definition: "Gồm hai cấp độ: tâm lý xã hội và hệ tư tưởng xã hội.",
        quiz: {
          question: "Kết cấu của ý thức xã hội gồm những cấp độ nào?",
          options: [
            "Ý thức cá nhân và ý thức tập thể.",
            "Tâm lý xã hội và hệ tư tưởng xã hội.",
            "Ý thức thông thường và ý thức lý luận.",
            "Ý thức khoa học và ý thức phi khoa học.",
          ],
          correct: 1,
        },
        fillAnswer: "Hai cấp độ trong kết cấu YTXH: ___ và ___.",
        answer: "Tâm lý xã hội và hệ tư tưởng xã hội",
        fullFillAnswer:
          "Kết cấu YTXH gồm hai cấp độ: tâm lý xã hội và hệ tư tưởng xã hội.",
      },
      {
        id: 6,
        term: "Hình thái YTXH (loại trừ)",
        definition:
          "“Ý thức sản xuất” không phải là hình thái của ý thức xã hội.",
        quiz: {
          question: "Đâu KHÔNG phải là một hình thái của ý thức xã hội?",
          options: [
            "Ý thức chính trị.",
            "Ý thức đạo đức.",
            "Ý thức sản xuất.",
            "Ý thức nghệ thuật.",
          ],
          correct: 2,
        },
        fillAnswer: "___ không phải là một hình thái của ý thức xã hội.",
        answer: "Ý thức sản xuất",
        fullFillAnswer:
          "Trong các hình thái YTXH, “ý thức sản xuất” không phải là một hình thái.",
      },
      {
        id: 7,
        term: "Quan hệ TTXH – YTXH",
        definition:
          "TTXH quyết định YTXH; YTXH có tính độc lập tương đối và tác động trở lại TTXH.",
        quiz: {
          question:
            "Luận điểm nào thể hiện đúng nhất mối quan hệ giữa TTXH và YTXH?",
          options: [
            "YTXH quyết định TTXH.",
            "TTXH và YTXH tồn tại độc lập, không liên quan.",
            "TTXH quyết định YTXH, đồng thời YTXH có tính độc lập tương đối và tác động trở lại TTXH.",
            "TTXH và YTXH quyết định lẫn nhau ngang bằng.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Mối quan hệ: ___ quyết định ___; ___ có tính độc lập tương đối và tác động trở lại ___.",
        answer: "TTXH quyết định YTXH; YTXH tác động trở lại TTXH",
        fullFillAnswer:
          "TTXH quyết định YTXH; YTXH có tính độc lập tương đối và tác động trở lại TTXH.",
      },

      // ===== THÔNG HIỂU (8–13)
      {
        id: 8,
        term: "Tính giai cấp của YTXH",
        definition:
          "Trong xã hội có giai cấp, do TTXH và lợi ích khác nhau (thậm chí đối lập), YTXH mang tính giai cấp.",
        quiz: {
          question:
            "Vì sao trong xã hội có giai cấp, ý thức xã hội lại mang tính giai cấp?",
          options: [
            "Vì mỗi giai cấp có trình độ nhận thức khác nhau.",
            "Vì tồn tại xã hội của các giai cấp là khác nhau, lợi ích giai cấp đối lập nhau.",
            "Vì giai cấp thống trị áp đặt tư tưởng bằng bạo lực.",
            "Vì truyền thống và thói quen của mỗi giai cấp khác nhau.",
          ],
          correct: 1,
        },
        fillAnswer: "YTXH mang tính giai cấp vì ___.",
        answer: "tồn tại xã hội khác nhau và lợi ích giai cấp đối lập nhau",
        fullFillAnswer:
          "YTXH mang tính giai cấp vì TTXH khác nhau và lợi ích giai cấp đối lập nhau.",
      },
      {
        id: 9,
        term: "Biểu hiện lạc hậu của YTXH",
        definition:
          "Một số phong tục, tập quán cũ không còn phù hợp vẫn tồn tại trong đời sống hiện đại.",
        quiz: {
          question:
            "Biểu hiện nào thể hiện rõ tính lạc hậu của YTXH so với TTXH?",
          options: [
            "Một phát minh khoa học đi trước thời đại.",
            "Phong tục, tập quán cũ lạc hậu vẫn tồn tại trong đời sống hiện đại.",
            "Tác phẩm nghệ thuật phản ánh chân thực đời sống.",
            "Lý luận chính trị mới đáp ứng thực tiễn.",
          ],
          correct: 1,
        },
        fillAnswer: "Tính lạc hậu của YTXH: ___.",
        answer: "Phong tục, tập quán lạc hậu vẫn tồn tại trong hiện đại",
        fullFillAnswer:
          "Tính lạc hậu của YTXH thể hiện khi phong tục, tập quán cũ vẫn tồn tại trong đời sống hiện đại.",
      },
      {
        id: 10,
        term: "Tính vượt trước của YTXH",
        definition:
          "Khi phản ánh đúng bản chất và có cơ sở khoa học, YTXH có thể dự báo, đi trước TTXH.",
        quiz: {
          question: "YTXH có thể vượt trước TTXH khi nào?",
          options: [
            "Khi phản ánh đúng đắn các mối liên hệ bản chất, có cơ sở khoa học.",
            "Khi là ý chí chủ quan của một vĩ nhân.",
            "Khi phản ánh hư ảo, hoang đường.",
            "Khi lặp lại nguyên xi tư tưởng quá khứ.",
          ],
          correct: 0,
        },
        fillAnswer: "YTXH vượt trước TTXH khi nó có cơ sở khoa học và ___.",
        answer: "phản ánh đúng đắn các mối liên hệ bản chất, tất yếu",
        fullFillAnswer:
          "YTXH vượt trước TTXH nếu phản ánh đúng bản chất và có cơ sở khoa học.",
      },
      {
        id: 11,
        term: "Tính kế thừa của YTXH",
        definition:
          "YTXH giai đoạn sau kế thừa có chọn lọc các giá trị của giai đoạn trước để phát triển.",
        quiz: {
          question:
            '"Tính kế thừa" trong sự phát triển của YTXH có nghĩa là gì?',
          options: [
            "Sao chép hoàn toàn tư tưởng trước.",
            "Phủ định sạch trơn tư tưởng trước.",
            "Kế thừa có chọn lọc các giá trị trước để phát triển.",
            "Các hình thái YTXH phát triển độc lập.",
          ],
          correct: 2,
        },
        fillAnswer:
          "Tính kế thừa: giai đoạn sau ___ các giá trị giai đoạn trước.",
        answer: "kế thừa có chọn lọc",
        fullFillAnswer:
          "Tính kế thừa nghĩa là kế thừa có chọn lọc các giá trị của giai đoạn trước.",
      },
      {
        id: 12,
        term: "Tác động trở lại của YTXH",
        definition:
          "YTXH có thể thúc đẩy hoặc kìm hãm TTXH tùy tính chất tiến bộ hay lạc hậu.",
        quiz: {
          question:
            "Sự tác động trở lại của YTXH đối với TTXH được thể hiện thế nào?",
          options: [
            "Luôn luôn thúc đẩy TTXH.",
            "Luôn luôn kìm hãm TTXH.",
            "Không có khả năng tác động.",
            "Có thể thúc đẩy hoặc kìm hãm tùy tính chất tiến bộ hay lạc hậu.",
          ],
          correct: 3,
        },
        fillAnswer: "YTXH có thể ___ hoặc ___ TTXH tùy tính chất của nó.",
        answer: "thúc đẩy hoặc kìm hãm",
        fullFillAnswer:
          "YTXH có thể thúc đẩy hoặc kìm hãm TTXH tùy tính chất tiến bộ hay lạc hậu.",
      },
      {
        id: 13,
        term: "Phân biệt tâm lý xã hội & hệ tư tưởng",
        definition:
          "Tâm lý xã hội: phản ánh trực tiếp, tự phát; Hệ tư tưởng: phản ánh gián tiếp, có hệ thống.",
        quiz: {
          question:
            "Sự khác biệt cơ bản giữa tâm lý xã hội và hệ tư tưởng là gì?",
          options: [
            "Tâm lý xã hội mang tính lý luận, hệ tư tưởng tự phát.",
            "Tâm lý xã hội phản ánh trực tiếp, tự phát; hệ tư tưởng phản ánh gián tiếp, có hệ thống.",
            "Tâm lý xã hội chỉ ở giai cấp bị trị, hệ tư tưởng chỉ ở giai cấp thống trị.",
            "Tâm lý xã hội không thay đổi, hệ tư tưởng luôn thay đổi.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Tâm lý XH: phản ánh ___, ___; Hệ tư tưởng: phản ánh ___, ___.",
        answer: "trực tiếp, tự phát; gián tiếp, có hệ thống",
        fullFillAnswer:
          "Khác biệt: tâm lý XH phản ánh trực tiếp, tự phát; hệ tư tưởng phản ánh gián tiếp, có hệ thống.",
      },

      // ===== VẬN DỤNG (14–18)
      {
        id: 14,
        term: "Kinh tế quyết định chính trị",
        definition: "Biểu hiện vai trò quyết định của TTXH đối với YTXH.",
        quiz: {
          question:
            'Quan điểm "Kinh tế quyết định chính trị" thể hiện nội dung nào cốt lõi?',
          options: [
            "Vai trò của đấu tranh giai cấp trong lịch sử.",
            "Vai trò quyết định của TTXH đối với YTXH.",
            "Quan hệ biện chứng giữa LLSX và QHSX.",
            "Tính độc lập tương đối của YTXH.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Kinh tế quyết định chính trị → vai trò quyết định của ___ đối với ___.",
        answer: "TTXH đối với YTXH",
        fullFillAnswer:
          "Quan điểm này nhấn mạnh vai trò quyết định của TTXH đối với YTXH.",
      },
      {
        id: 15,
        term: "Không giản lược đạo đức vào kinh tế",
        definition:
          "Sai nếu cho rằng kinh tế phát triển là tự khắc đạo đức được giải quyết (vì YTXH có độc lập tương đối).",
        quiz: {
          question:
            'Luận điểm: "Chỉ cần kinh tế phát triển thì tự khắc vấn đề đạo đức sẽ được giải quyết" đúng hay sai?',
          options: [
            "Đúng, vì TTXH quyết định hoàn toàn YTXH.",
            "Sai, vì bỏ qua tính độc lập tương đối và khả năng tác động tiêu cực của YTXH lạc hậu.",
            "Đúng, vì đạo đức là một bộ phận của kinh tế.",
            "Sai, vì đạo đức không liên quan gì đến kinh tế.",
          ],
          correct: 1,
        },
        fillAnswer: "Đáp án đúng: ___.",
        answer:
          "Sai, vì bỏ qua tính độc lập tương đối và khả năng tác động tiêu cực của YTXH lạc hậu",
        fullFillAnswer:
          "Sai: vì bỏ qua tính độc lập tương đối và khả năng tác động tiêu cực của YTXH lạc hậu.",
      },
      {
        id: 16,
        term: "Cách mạng 4.0 → TTXH → YTXH",
        definition:
          "Thay đổi phương thức sản xuất (TTXH) kéo theo biến đổi đời sống tinh thần (YTXH).",
        quiz: {
          question:
            "Cách mạng 4.0 là sự thay đổi của yếu tố nào và sẽ tác động đến yếu tố nào?",
          options: [
            "Thay đổi YTXH, tác động đến TTXH.",
            "Thay đổi trong phương thức sản xuất (TTXH) → biến đổi trong YTXH.",
            "Thay đổi điều kiện tự nhiên → tác động đến dân số.",
            "Thay đổi KTTT → tác động đến CSHT.",
          ],
          correct: 1,
        },
        fillAnswer:
          "Cách mạng 4.0 → thay đổi trong ___, kéo theo biến đổi trong ___.",
        answer: "phương thức sản xuất (TTXH); ý thức xã hội (YTXH)",
        fullFillAnswer:
          "Cách mạng 4.0 làm thay đổi phương thức sản xuất, kéo theo biến đổi trong YTXH.",
      },
      {
        id: 17,
        term: "Xây dựng văn hoá Việt Nam",
        definition:
          "Phát triển kinh tế đồng thời kế thừa có chọn lọc truyền thống & tiếp thu tinh hoa nhân loại.",
        quiz: {
          question:
            "Để xây dựng nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc, cần làm gì?",
          options: [
            "Kế thừa có chọn lọc các giá trị truyền thống & tiếp thu tinh hoa nhân loại.",
            "Chỉ tập trung phát triển kinh tế, văn hoá tự phát triển.",
            "Xoá bỏ hoàn toàn các giá trị cũ.",
            "Du nhập toàn bộ văn hoá nước ngoài.",
          ],
          correct: 0,
        },
        fillAnswer: "Cần ___ giá trị truyền thống và ___ tinh hoa nhân loại.",
        answer: "kế thừa có chọn lọc; tiếp thu",
        fullFillAnswer:
          "Phải kế thừa có chọn lọc truyền thống và tiếp thu tinh hoa nhân loại.",
      },
      {
        id: 18,
        term: "Vai trò của tư tưởng tiến bộ",
        definition:
          "TTXH quyết định YTXH, nhưng tư tưởng tiến bộ có thể đi trước thời đại, chỉ đạo thực tiễn.",
        quiz: {
          question:
            "Chọn phương án đúng nhất về quan hệ TTXH–YTXH và vai trò tư tưởng tiến bộ.",
          options: [
            "TTXH có sau, phản ánh YTXH.",
            "Mọi thay đổi TTXH làm YTXH đổi ngay lập tức.",
            "Lịch sử xét đến cùng do tư tưởng vĩ nhân quyết định.",
            "TTXH quyết định YTXH, nhưng tư tưởng tiến bộ có thể đi trước thời đại, chỉ đạo thực tiễn.",
          ],
          correct: 3,
        },
        fillAnswer: "TTXH quyết định YTXH, nhưng ___ có thể đi trước thời đại.",
        answer: "các tư tưởng tiến bộ",
        fullFillAnswer:
          "TTXH quyết định YTXH; tuy nhiên tư tưởng tiến bộ có thể đi trước thời đại và chỉ đạo thực tiễn.",
      },
    ],
  },

  /* =========================================================
   * (2) BỘ 50 CÂU – 3 CHỦ ĐỀ (mỗi câu viết tay đầy đủ, không auto-build)
   * ========================================================= */
  /* ===========================
   * C3.1 – Học thuyết hình thái kinh tế–xã hội (1–20)
   * =========================== */
  {
    id: 30311,
    title: "Chương 3.1: Học thuyết hình thái kinh tế – xã hội",
    description:
      "Phương thức sản xuất, LLSX – QHSX, CSHT – KTTT, và quy luật phù hợp trong phát triển xã hội.",
    icon: "🏛️",
    questions: [
      {
        id: 1,
        term: "Nền tảng phát triển xã hội",
        definition: "Sản xuất vật chất.",
        quiz: {
          question:
            "Yếu tố nào là nền tảng của mọi hoạt động xã hội và quyết định sự phát triển của xã hội?",
          options: [
            "Sản xuất tinh thần",
            "Sản xuất vật chất",
            "Hoạt động chính trị",
            "Giao lưu văn hoá",
          ],
          correct: 1,
        },
        fillAnswer: "Nền tảng của mọi hoạt động xã hội là ___.",
        answer: "Sản xuất vật chất",
        fullFillAnswer: "Nền tảng phát triển xã hội là sản xuất vật chất.",
      },
      {
        id: 2,
        term: "Khái niệm phương thức sản xuất",
        definition:
          "Cách con người tác động vào tự nhiên để tạo ra của cải vật chất.",
        quiz: {
          question: "Phương thức sản xuất là gì?",
          options: [
            "Cách sản xuất tinh thần",
            "Cách tác động vào tự nhiên tạo của cải vật chất",
            "Cách tổ chức đời sống xã hội",
            "Cách giao tiếp và trao đổi kinh nghiệm",
          ],
          correct: 1,
        },
        fillAnswer: "Phương thức sản xuất là ___.",
        answer: "Cách tác động vào tự nhiên tạo của cải vật chất",
        fullFillAnswer:
          "Phương thức sản xuất là cách con người tác động vào tự nhiên tạo ra của cải vật chất.",
      },
      {
        id: 3,
        term: "Cấu thành phương thức sản xuất",
        definition: "Lực lượng sản xuất và quan hệ sản xuất.",
        quiz: {
          question:
            "Phương thức sản xuất được cấu thành từ hai yếu tố cơ bản nào?",
          options: [
            "Người lao động & công cụ",
            "LLSX & QHSX",
            "CSHT & KTTT",
            "TTXH & YTXH",
          ],
          correct: 1,
        },
        fillAnswer: "Phương thức sản xuất được cấu thành bởi ___ và ___.",
        answer: "Lực lượng sản xuất và quan hệ sản xuất",
        fullFillAnswer:
          "Phương thức sản xuất = Lực lượng sản xuất và quan hệ sản xuất.",
      },
      {
        id: 4,
        term: "Bản chất LLSX",
        definition:
          "Quan hệ giữa con người với tự nhiên trong quá trình sản xuất.",
        quiz: {
          question: "Lực lượng sản xuất (LLSX) biểu hiện mối quan hệ nào?",
          options: [
            "Quan hệ giữa người với người trong sản xuất",
            "Quan hệ giữa người với tự nhiên trong sản xuất",
            "Quan hệ giai cấp",
            "Quan hệ nhà nước – công dân",
          ],
          correct: 1,
        },
        fillAnswer:
          "LLSX biểu hiện quan hệ giữa con người với ___ trong quá trình sản xuất.",
        answer: "Quan hệ giữa người với tự nhiên trong sản xuất",
        fullFillAnswer:
          "LLSX biểu hiện quan hệ giữa con người với tự nhiên trong quá trình sản xuất.",
      },
      {
        id: 5,
        term: "Tư liệu sản xuất",
        definition: "Công cụ lao động và đối tượng lao động.",
        quiz: {
          question: "Yếu tố nào sau đây thuộc về tư liệu sản xuất?",
          options: [
            "Kinh nghiệm, kỹ năng",
            "Sức khoẻ, thể lực",
            "Công cụ lao động & đối tượng lao động",
            "Tri thức khoa học",
          ],
          correct: 2,
        },
        fillAnswer: "Tư liệu sản xuất gồm ___ và ___.",
        answer: "Công cụ lao động & đối tượng lao động",
        fullFillAnswer:
          "Tư liệu sản xuất gồm công cụ lao động và đối tượng lao động.",
      },
      {
        id: 6,
        term: "Yếu tố quyết định của LLSX",
        definition: "Người lao động.",
        quiz: {
          question:
            "Trong các yếu tố của lực lượng sản xuất, yếu tố nào được xem là cơ bản và quyết định nhất?",
          options: [
            "Tư liệu sản xuất",
            "Công cụ lao động",
            "Người lao động",
            "Đối tượng lao động",
          ],
          correct: 2,
        },
        fillAnswer: "Yếu tố cơ bản và quyết định nhất của LLSX là ___.",
        answer: "Người lao động",
        fullFillAnswer:
          "Yếu tố cơ bản và quyết định nhất của LLSX là người lao động.",
      },
      {
        id: 7,
        term: "Yếu tố cách mạng nhất trong LLSX",
        definition:
          "Công cụ lao động (bao gồm cả công nghệ) là yếu tố động và cách mạng nhất, thước đo trình độ chinh phục tự nhiên.",
        quiz: {
          question:
            "Trong LLSX, yếu tố nào động nhất và cách mạng nhất, là thước đo trình độ chinh phục tự nhiên?",
          options: [
            "Người lao động",
            "Đối tượng lao động",
            "Công cụ lao động",
            "Tri thức khoa học",
          ],
          correct: 2,
        },
        fillAnswer: "Yếu tố động và cách mạng nhất trong LLSX là ___.",
        answer: "Công cụ lao động",
        fullFillAnswer:
          "Công cụ lao động là yếu tố động nhất và cách mạng nhất trong LLSX.",
      },
      {
        id: 8,
        term: "Bản chất QHSX",
        definition:
          "Mối quan hệ giữa người với người trong quá trình sản xuất (sản xuất, phân phối, trao đổi, tiêu dùng).",
        quiz: {
          question:
            "Quan hệ sản xuất (QHSX) là mối quan hệ giữa người với người trong quá trình nào?",
          options: [
            "Giao lưu văn hoá",
            "Đấu tranh chính trị",
            "Sản xuất (sản xuất, phân phối, trao đổi, tiêu dùng)",
            "Hoạt động nghệ thuật",
          ],
          correct: 2,
        },
        fillAnswer:
          "QHSX là quan hệ giữa người với người trong toàn bộ quá trình ___.",
        answer: "Sản xuất (sản xuất, phân phối, trao đổi, tiêu dùng)",
        fullFillAnswer:
          "QHSX là quan hệ giữa người với người trong toàn bộ quá trình sản xuất xã hội.",
      },
      {
        id: 9,
        term: "Mặt quyết định trong QHSX",
        definition: "Quan hệ sở hữu đối với tư liệu sản xuất.",
        quiz: {
          question:
            "Trong ba mặt của quan hệ sản xuất, mặt nào giữ vai trò quyết định các mặt còn lại?",
          options: [
            "Quan hệ tổ chức & quản lý sản xuất",
            "Quan hệ phân phối sản phẩm",
            "Quan hệ sở hữu đối với tư liệu sản xuất",
            "Quan hệ trao đổi sản phẩm",
          ],
          correct: 2,
        },
        fillAnswer:
          "Trong QHSX, mặt quyết định là quan hệ ___ đối với tư liệu sản xuất.",
        answer: "Quan hệ sở hữu đối với tư liệu sản xuất",
        fullFillAnswer:
          "Trong QHSX, quan hệ sở hữu đối với tư liệu sản xuất giữ vai trò quyết định.",
      },
      {
        id: 10,
        term: "Quy luật phù hợp LLSX–QHSX",
        definition:
          "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất.",
        quiz: {
          question:
            "Quy luật cơ bản, phổ biến của sự vận động và phát triển xã hội là quy luật nào?",
          options: [
            "Quy luật đấu tranh giai cấp",
            "Quy luật TTXH quyết định YTXH",
            "Quy luật về sự phù hợp của QHSX với trình độ phát triển của LLSX",
            "Quy luật kế thừa",
          ],
          correct: 2,
        },
        fillAnswer: "Quy luật cơ bản: sự phù hợp của ___ với trình độ ___ .",
        answer: "sự phù hợp của QHSX với trình độ phát triển của LLSX",
        fullFillAnswer:
          "Quy luật phát triển xã hội cơ bản là sự phù hợp của QHSX với trình độ LLSX.",
      },
      {
        id: 11,
        term: "Vai trò của QHSX phù hợp",
        definition: "Khi QHSX phù hợp với LLSX, nó thúc đẩy LLSX phát triển.",
        quiz: {
          question:
            "Khi quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất, nó sẽ có vai trò gì?",
          options: [
            "Kìm hãm LLSX",
            "Thúc đẩy LLSX phát triển",
            "Không ảnh hưởng đến LLSX",
            "Phá vỡ LLSX hiện có",
          ],
          correct: 1,
        },
        fillAnswer: "Khi QHSX phù hợp với LLSX, nó ___ lực lượng sản xuất.",
        answer: "Thúc đẩy LLSX phát triển",
        fullFillAnswer:
          "QHSX phù hợp sẽ thúc đẩy lực lượng sản xuất phát triển.",
      },
      {
        id: 12,
        term: "Nguyên nhân sâu xa của cách mạng xã hội",
        definition:
          "Mâu thuẫn giữa quan hệ sản xuất đã lỗi thời và lực lượng sản xuất đã phát triển.",
        quiz: {
          question: "Nguyên nhân sâu xa của các cuộc cách mạng xã hội là gì?",
          options: [
            "Mâu thuẫn đảng phái",
            "Mâu thuẫn giữa QHSX lỗi thời và LLSX đã phát triển",
            "Mâu thuẫn giữa các quốc gia, dân tộc",
            "Mâu thuẫn về ý thức hệ",
          ],
          correct: 1,
        },
        fillAnswer:
          "CMXH bắt nguồn từ mâu thuẫn giữa ___ lỗi thời và ___ đã phát triển.",
        answer: "Mâu thuẫn giữa QHSX lỗi thời và LLSX đã phát triển",
        fullFillAnswer:
          "Nguyên nhân sâu xa của cách mạng xã hội: mâu thuẫn giữa QHSX lỗi thời và LLSX đã phát triển.",
      },
      {
        id: 13,
        term: "Cơ sở hạ tầng xã hội",
        definition:
          "Toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội.",
        quiz: {
          question: "Cơ sở hạ tầng (CSHT) của một xã hội là gì?",
          options: [
            "Toàn bộ các quan điểm, tư tưởng xã hội",
            "Toàn bộ các thiết chế chính trị – xã hội",
            "Toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
            "Toàn bộ các công trình vật chất kỹ thuật",
          ],
          correct: 2,
        },
        fillAnswer:
          "CSHT là toàn bộ các ___ hợp thành cơ cấu kinh tế của xã hội.",
        answer:
          "Toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
        fullFillAnswer:
          "CSHT là toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế xã hội.",
      },
      {
        id: 14,
        term: "Kiến trúc thượng tầng",
        definition:
          "Toàn bộ các quan điểm và các thiết chế chính trị – xã hội tương ứng, hình thành trên một CSHT nhất định.",
        quiz: {
          question: "Kiến trúc thượng tầng (KTTT) là gì?",
          options: [
            "Toàn bộ các quan hệ sản xuất của xã hội",
            "Toàn bộ sinh hoạt vật chất của xã hội",
            "Toàn bộ các quan điểm & thiết chế chính trị – xã hội tương ứng, được hình thành trên một cơ sở hạ tầng nhất định",
            "Trình độ phát triển của lực lượng sản xuất",
          ],
          correct: 2,
        },
        fillAnswer:
          "KTTT là toàn bộ các quan điểm và các thiết chế ___ – ___ hình thành trên CSHT nhất định.",
        answer:
          "Toàn bộ các quan điểm & thiết chế chính trị – xã hội tương ứng, hình thành trên CSHT nhất định",
        fullFillAnswer:
          "KTTT là các quan điểm & thiết chế chính trị – xã hội hình thành trên một CSHT nhất định.",
      },
      {
        id: 15,
        term: "Quan hệ CSHT – KTTT",
        definition: "CSHT quyết định KTTT.",
        quiz: {
          question:
            "Trong mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng, yếu tố nào giữ vai trò quyết định?",
          options: [
            "KTTT quyết định CSHT",
            "CSHT quyết định KTTT",
            "Không có quan hệ với nhau",
            "Quyết định lẫn nhau ngang bằng",
          ],
          correct: 1,
        },
        fillAnswer: "Trong quan hệ CSHT–KTTT, ___ quyết định ___.",
        answer: "CSHT quyết định KTTT",
        fullFillAnswer:
          "Trong quan hệ CSHT – KTTT, CSHT giữ vai trò quyết định.",
      },
      {
        id: 16,
        term: "Yếu tố KTTT tác động mạnh nhất đến CSHT",
        definition: "Nhà nước.",
        quiz: {
          question:
            "Yếu tố nào trong kiến trúc thượng tầng có vai trò tác động trực tiếp và mạnh mẽ nhất tới cơ sở hạ tầng?",
          options: ["Nhà nước", "Tôn giáo", "Nghệ thuật", "Đạo đức"],
          correct: 0,
        },
        fillAnswer:
          "Trong KTTT, yếu tố tác động trực tiếp và mạnh nhất đến CSHT là ___.",
        answer: "Nhà nước",
        fullFillAnswer:
          "Trong KTTT, nhà nước tác động trực tiếp và mạnh nhất tới CSHT.",
      },
      {
        id: 17,
        term: "Hệ quả đổi thay CSHT",
        definition: "Biểu hiện tính quyết định của CSHT đối với KTTT.",
        quiz: {
          question:
            "Sự thay đổi của cơ sở hạ tầng sẽ dẫn đến sự thay đổi của kiến trúc thượng tầng. Đây là tính chất gì của mối quan hệ?",
          options: [
            "Tính độc lập tương đối của KTTT",
            "Tính quyết định của CSHT",
            "Tính tác động trở lại của KTTT",
            "Tính kế thừa của KTTT",
          ],
          correct: 1,
        },
        fillAnswer:
          "Sự đổi thay KTTT do CSHT thay đổi thể hiện tính ___ của ___.",
        answer: "Tính quyết định của CSHT",
        fullFillAnswer:
          "CSHT thay đổi kéo theo KTTT thay đổi – biểu hiện tính quyết định của CSHT.",
      },
      {
        id: 18,
        term: "Tính lịch sử – tự nhiên của phát triển xã hội",
        definition:
          "Sự phát triển của các hình thái kinh tế – xã hội là một quá trình lịch sử – tự nhiên.",
        quiz: {
          question:
            "Theo chủ nghĩa Mác – Lênin, sự phát triển của các hình thái kinh tế – xã hội là:",
          options: [
            "Một quá trình hoàn toàn ngẫu nhiên",
            "Một quá trình lịch sử – tự nhiên",
            "Một quá trình do ý chí của các vĩ nhân quyết định",
            "Một quá trình tuần hoàn, lặp đi lặp lại",
          ],
          correct: 1,
        },
        fillAnswer:
          "Sự phát triển các hình thái KT–XH là một quá trình ___ – ___.",
        answer: "Một quá trình lịch sử – tự nhiên",
        fullFillAnswer:
          "Các hình thái kinh tế – xã hội phát triển theo quá trình lịch sử – tự nhiên.",
      },
      {
        id: 19,
        term: "Các hình thái KT–XH trong lịch sử",
        definition:
          "“Toàn cầu hoá” không phải là một hình thái kinh tế – xã hội lịch sử.",
        quiz: {
          question:
            "Đâu không phải là một trong những hình thái kinh tế – xã hội đã tồn tại trong lịch sử?",
          options: [
            "Cộng sản nguyên thuỷ",
            "Chiếm hữu nô lệ",
            "Tư bản chủ nghĩa",
            "Toàn cầu hoá",
          ],
          correct: 3,
        },
        fillAnswer: "___ không phải là một hình thái KT–XH lịch sử.",
        answer: "Toàn cầu hoá",
        fullFillAnswer:
          "Toàn cầu hoá không phải là một hình thái kinh tế – xã hội lịch sử.",
      },
      {
        id: 20,
        term: "Giá trị học thuyết hình thái KT–XH",
        definition:
          "Cả a, b, c đều đúng (phương pháp luận khoa học; chỉ ra động lực; khẳng định quy luật khách quan).",
        quiz: {
          question:
            '"Giá trị của học thuyết hình thái kinh tế – xã hội" là gì?',
          options: [
            "Cung cấp phương pháp luận khoa học để phân tích, lý giải lịch sử xã hội",
            "Chỉ ra động lực phát triển của xã hội là sản xuất vật chất",
            "Khẳng định sự phát triển của xã hội tuân theo quy luật khách quan",
            "Cả a, b, c đều đúng",
          ],
          correct: 3,
        },
        fillAnswer: "Giá trị học thuyết hình thái KT–XH: ___.",
        answer: "Cả a, b, c đều đúng",
        fullFillAnswer:
          "Giá trị học thuyết hình thái KT–XH: Cả a, b, c đều đúng.",
      },
    ],
  },

  /* ===========================
   * C3.2 – Giai cấp, Dân tộc, Nhà nước & Cách mạng xã hội (21–35)
   * =========================== */
  {
    id: 30312,
    title: "Chương 3.2: Giai cấp, Dân tộc, Nhà nước & Cách mạng xã hội",
    description:
      "Nguồn gốc giai cấp, đấu tranh giai cấp, bản chất nhà nước và cách mạng xã hội.",
    icon: "🛡️",
    questions: [
      {
        id: 21,
        term: "Nguồn gốc ra đời giai cấp",
        definition:
          "Sự phân công lao động xã hội và sự xuất hiện tư hữu về tư liệu sản xuất.",
        quiz: {
          question:
            "Nguồn gốc trực tiếp và quyết định sự ra đời của giai cấp là gì?",
          options: [
            "Sự khác biệt về năng lực giữa con người",
            "Sự phân công lao động xã hội và sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
            "Sự khác biệt về chủng tộc và giới tính",
            "Kết quả của các cuộc chiến tranh xâm lược",
          ],
          correct: 1,
        },
        fillAnswer:
          "Giai cấp ra đời do ___ và sự xuất hiện ___ về tư liệu sản xuất.",
        answer:
          "Sự phân công lao động xã hội và sự xuất hiện tư hữu về tư liệu sản xuất",
        fullFillAnswer:
          "Giai cấp ra đời do phân công lao động xã hội và sự xuất hiện tư hữu về tư liệu sản xuất.",
      },
      {
        id: 22,
        term: "Đặc trưng bản chất của giai cấp (Lênin)",
        definition:
          "Tất cả các đặc trưng, trong đó khác nhau về sở hữu tư liệu sản xuất là cơ bản nhất.",
        quiz: {
          question:
            "Theo V.I. Lênin, đặc trưng cơ bản nhất của giai cấp là gì?",
          options: [
            "Sự khác nhau về địa vị trong một hệ thống sản xuất xã hội nhất định",
            "Sự khác nhau về vai trò trong tổ chức lao động xã hội",
            "Sự khác nhau về phương thức và quy mô thu nhập",
            "Tất cả các đặc trưng trên, trong đó sự khác nhau về sở hữu tư liệu sản xuất là cơ bản nhất",
          ],
          correct: 3,
        },
        fillAnswer:
          "Theo Lênin, đặc trưng cơ bản nhất của giai cấp là khác nhau về ___ đối với TLSX.",
        answer:
          "Tất cả các đặc trưng, trong đó khác nhau về sở hữu tư liệu sản xuất là cơ bản nhất",
        fullFillAnswer:
          "Theo Lênin, điểm cơ bản nhất là khác nhau về sở hữu tư liệu sản xuất.",
      },
      {
        id: 23,
        term: "Khái niệm đấu tranh giai cấp",
        definition:
          "Cuộc đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập nhau.",
        quiz: {
          question: "Đấu tranh giai cấp là gì?",
          options: [
            "Cuộc đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập nhau",
            "Mọi cuộc xung đột trong đời sống xã hội",
            "Cuộc đấu tranh giữa các quốc gia",
            "Cuộc đấu tranh giữa các cá nhân",
          ],
          correct: 0,
        },
        fillAnswer: "Đấu tranh giai cấp là: ___.",
        answer:
          "Cuộc đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập nhau",
        fullFillAnswer:
          "Đấu tranh giai cấp là đấu tranh giữa các tập đoàn người có lợi ích cơ bản đối lập.",
      },
      {
        id: 24,
        term: "Nguồn gốc đấu tranh giai cấp",
        definition:
          "Mâu thuẫn không thể điều hoà về lợi ích giữa các giai cấp.",
        quiz: {
          question: "Nguồn gốc của đấu tranh giai cấp là gì?",
          options: [
            "Mâu thuẫn về tư tưởng và tôn giáo",
            "Mâu thuẫn không thể điều hoà về lợi ích giữa các giai cấp",
            "Mâu thuẫn về văn hoá và lối sống",
            "Mâu thuẫn trong quan hệ gia đình",
          ],
          correct: 1,
        },
        fillAnswer: "Nguồn gốc đấu tranh giai cấp: ___.",
        answer: "Mâu thuẫn không thể điều hoà về lợi ích giữa các giai cấp",
        fullFillAnswer:
          "Nguồn gốc đấu tranh giai cấp là mâu thuẫn lợi ích giai cấp không thể điều hoà.",
      },
      {
        id: 25,
        term: "Vai trò đấu tranh giai cấp",
        definition: "Một động lực quan trọng của sự phát triển xã hội.",
        quiz: {
          question:
            "Theo quan điểm Mác-xít, vai trò của đấu tranh giai cấp trong xã hội có giai cấp là gì?",
          options: [
            "Gây ra sự hỗn loạn và thụt lùi cho xã hội",
            "Là một động lực quan trọng của sự phát triển xã hội",
            "Chỉ có ý nghĩa trong việc lật đổ chính quyền",
            "Không có vai trò gì đặc biệt",
          ],
          correct: 1,
        },
        fillAnswer: "Vai trò của đấu tranh giai cấp là ___.",
        answer: "Một động lực quan trọng của sự phát triển xã hội",
        fullFillAnswer:
          "Đấu tranh giai cấp là một động lực quan trọng của phát triển xã hội.",
      },
      {
        id: 26,
        term: "Đỉnh cao đấu tranh giai cấp",
        definition: "Cách mạng xã hội.",
        quiz: {
          question: "Đỉnh cao của đấu tranh giai cấp thường dẫn tới:",
          options: [
            "Cải cách xã hội",
            "Hoà giải giai cấp",
            "Cách mạng xã hội",
            "Bầu cử dân chủ",
          ],
          correct: 2,
        },
        fillAnswer: "Đỉnh cao của đấu tranh giai cấp thường dẫn tới ___.",
        answer: "Cách mạng xã hội",
        fullFillAnswer:
          "Đỉnh cao đấu tranh giai cấp thường dẫn tới cách mạng xã hội.",
      },
      {
        id: 27,
        term: "Cơ sở hình thành dân tộc",
        definition:
          "Sự thống nhất ngôn ngữ, lãnh thổ, đời sống kinh tế, văn hoá và sự gắn bó bền vững của cộng đồng.",
        quiz: {
          question: "Dân tộc được hình thành dựa trên cơ sở của:",
          options: [
            "Sự thống nhất về ngôn ngữ và lãnh thổ",
            "Sự thống nhất về đời sống kinh tế và văn hoá",
            "Sự gắn bó của một cộng đồng người ổn định, bền vững",
            "Tất cả các yếu tố trên",
          ],
          correct: 3,
        },
        fillAnswer: "Dân tộc được hình thành dựa trên: ___.",
        answer: "Tất cả các yếu tố trên",
        fullFillAnswer:
          "Dân tộc hình thành trên tổng hoà các yếu tố: ngôn ngữ, lãnh thổ, kinh tế, văn hoá, cộng đồng.",
      },
      {
        id: 28,
        term: "Thời điểm ra đời của dân tộc",
        definition: "Ra đời muộn hơn, gắn liền với thời kỳ chủ nghĩa tư bản.",
        quiz: {
          question: "So với giai cấp, khái niệm dân tộc:",
          options: [
            "Ra đời sớm hơn",
            "Ra đời muộn hơn, gắn liền với thời kỳ chủ nghĩa tư bản",
            "Ra đời cùng lúc",
            "Không liên quan đến nhau",
          ],
          correct: 1,
        },
        fillAnswer: "So với giai cấp, dân tộc ra đời ___.",
        answer: "Ra đời muộn hơn, gắn liền với thời kỳ chủ nghĩa tư bản",
        fullFillAnswer:
          "Dân tộc ra đời muộn hơn, gắn với quá trình phát triển của chủ nghĩa tư bản.",
      },
      {
        id: 29,
        term: "Quan hệ giai cấp – dân tộc",
        definition: "Có mối quan hệ biện chứng, thống nhất.",
        quiz: {
          question:
            "Mối quan hệ giữa giai cấp và dân tộc được thể hiện như thế nào?",
          options: [
            "Lợi ích giai cấp và lợi ích dân tộc hoàn toàn tách biệt",
            "Lợi ích giai cấp quyết định hoàn toàn lợi ích dân tộc",
            "Lợi ích giai cấp và lợi ích dân tộc có mối quan hệ biện chứng, thống nhất với nhau",
            "Lợi ích dân tộc quyết định hoàn toàn lợi ích giai cấp",
          ],
          correct: 2,
        },
        fillAnswer: "Quan hệ giữa giai cấp và dân tộc là mối quan hệ ___, ___.",
        answer: "mối quan hệ biện chứng, thống nhất",
        fullFillAnswer:
          "Giữa giai cấp và dân tộc tồn tại mối quan hệ biện chứng, thống nhất.",
      },
      {
        id: 30,
        term: "Nguồn gốc ra đời nhà nước",
        definition:
          "Khi xã hội xuất hiện chế độ tư hữu và phân chia giai cấp đối kháng.",
        quiz: {
          question: "Nhà nước ra đời khi nào?",
          options: [
            "Ngay từ khi xã hội loài người xuất hiện",
            "Khi xã hội xuất hiện tư hữu và phân chia giai cấp đối kháng",
            "Khi có nhu cầu quản lý các công việc chung của cộng đồng",
            "Khi dân số phát triển đến một quy mô nhất định",
          ],
          correct: 1,
        },
        fillAnswer:
          "Nhà nước ra đời khi xã hội xuất hiện ___ và phân chia ___ đối kháng.",
        answer: "Khi xã hội xuất hiện tư hữu và phân chia giai cấp đối kháng",
        fullFillAnswer:
          "Nhà nước ra đời khi xuất hiện tư hữu và sự đối kháng giai cấp.",
      },
      {
        id: 31,
        term: "Bản chất nhà nước (Mác – Lênin)",
        definition: "Công cụ chuyên chính của giai cấp thống trị.",
        quiz: {
          question: "Bản chất của nhà nước theo quan điểm Mác – Lênin là gì?",
          options: [
            "Là tổ chức công quyền trung lập, đứng trên mọi giai cấp",
            "Là công cụ chuyên chính của giai cấp thống trị",
            "Là tổ chức để điều hoà mâu thuẫn giai cấp",
            "Là cơ quan đại diện cho lợi ích của toàn thể nhân dân",
          ],
          correct: 1,
        },
        fillAnswer: "Bản chất nhà nước theo Mác – Lênin: ___.",
        answer: "Công cụ chuyên chính của giai cấp thống trị",
        fullFillAnswer:
          "Theo Mác – Lênin, nhà nước là công cụ chuyên chính của giai cấp thống trị.",
      },
      {
        id: 32,
        term: "Chức năng cơ bản của nhà nước",
        definition:
          "Chức năng thống trị chính trị (bạo lực trấn áp) và chức năng xã hội.",
        quiz: {
          question: "Chức năng cơ bản của nhà nước là gì?",
          options: [
            "Chức năng đối nội và chức năng đối ngoại",
            "Chức năng kinh tế và chức năng văn hoá",
            "Chức năng thống trị chính trị (bạo lực trấn áp) và chức năng xã hội",
            "Chức năng lập pháp, hành pháp và tư pháp",
          ],
          correct: 2,
        },
        fillAnswer: "Hai chức năng cơ bản của nhà nước là ___ và ___.",
        answer: "Chức năng thống trị chính trị và chức năng xã hội",
        fullFillAnswer:
          "Chức năng cơ bản của nhà nước gồm thống trị chính trị và chức năng xã hội.",
      },
      {
        id: 33,
        term: "Kiểu nhà nước đầu tiên",
        definition: "Nhà nước chủ nô.",
        quiz: {
          question: "Đâu là kiểu nhà nước đầu tiên trong lịch sử?",
          options: [
            "Nhà nước phong kiến",
            "Nhà nước tư sản",
            "Nhà nước chủ nô",
            "Nhà nước xã hội chủ nghĩa",
          ],
          correct: 2,
        },
        fillAnswer: "Kiểu nhà nước đầu tiên trong lịch sử là ___.",
        answer: "Nhà nước chủ nô",
        fullFillAnswer:
          "Kiểu nhà nước đầu tiên trong lịch sử là nhà nước chủ nô.",
      },
      {
        id: 34,
        term: "Khái niệm cách mạng xã hội (nghĩa hẹp)",
        definition:
          "Cuộc đấu tranh lật đổ một chế độ chính trị đã lỗi thời, thiết lập một chế độ tiến bộ hơn.",
        quiz: {
          question: "Cách mạng xã hội (CMXH) theo nghĩa hẹp là gì?",
          options: [
            "Sự thay đổi dần dần về văn hoá, xã hội",
            "Cuộc đấu tranh lật đổ một chế độ chính trị đã lỗi thời, thiết lập một chế độ tiến bộ hơn",
            "Mọi sự biến đổi trong đời sống",
            "Các cuộc cải cách kinh tế",
          ],
          correct: 1,
        },
        fillAnswer: "CMXH (nghĩa hẹp) là: ___.",
        answer:
          "Cuộc đấu tranh lật đổ một chế độ chính trị đã lỗi thời, thiết lập một chế độ tiến bộ hơn",
        fullFillAnswer:
          "CMXH (nghĩa hẹp) là đấu tranh lật đổ chế độ lỗi thời, thiết lập chế độ tiến bộ hơn.",
      },
      {
        id: 35,
        term: "Nguồn gốc CMXH",
        definition:
          "Bắt nguồn từ mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất.",
        quiz: {
          question: "Nguồn gốc của cách mạng xã hội là gì?",
          options: [
            "Do ý muốn chủ quan của các nhà lãnh đạo",
            "Do sự tuyên truyền của các thế lực bên ngoài",
            "Bắt nguồn từ mâu thuẫn gay gắt giữa LLSX và QHSX",
            "Do sự khủng hoảng về đạo đức xã hội",
          ],
          correct: 2,
        },
        fillAnswer:
          "Nguồn gốc cách mạng xã hội: mâu thuẫn gay gắt giữa ___ và ___.",
        answer: "Mâu thuẫn gay gắt giữa LLSX và QHSX",
        fullFillAnswer: "Nguồn gốc CMXH: mâu thuẫn gay gắt giữa LLSX và QHSX.",
      },
    ],
  },

  /* ===========================
   * C3.3 – Tồn tại xã hội, Ý thức xã hội & Con người (36–50)
   * =========================== */
  {
    id: 30313,
    title: "Chương 3.3: Tồn tại xã hội, Ý thức xã hội & Con người",
    description:
      "Quan hệ TTXH – YTXH, các tính chất của YTXH và triết học về con người.",
    icon: "🌐",
    questions: [
      {
        id: 36,
        term: "Khái niệm Tồn tại xã hội (TTXH)",
        definition:
          "Toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
        quiz: {
          question: "Tồn tại xã hội (TTXH) là gì?",
          options: [
            "Toàn bộ đời sống tinh thần",
            "Toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất",
            "Toàn bộ các mối quan hệ chính trị – pháp lý",
            "Toàn bộ các công trình kiến trúc, hạ tầng kỹ thuật",
          ],
          correct: 1,
        },
        fillAnswer: "TTXH là: ___.",
        answer:
          "Toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất",
        fullFillAnswer:
          "TTXH là toàn bộ đời sống vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
      },
      {
        id: 37,
        term: "Các yếu tố của TTXH (loại trừ)",
        definition: "Hệ tư tưởng chính trị không thuộc về TTXH.",
        quiz: {
          question: "Yếu tố nào sau đây không thuộc về tồn tại xã hội?",
          options: [
            "Điều kiện địa lý",
            "Dân cư",
            "Phương thức sản xuất",
            "Hệ tư tưởng chính trị",
          ],
          correct: 3,
        },
        fillAnswer: "Yếu tố KHÔNG thuộc TTXH là ___.",
        answer: "Hệ tư tưởng chính trị",
        fullFillAnswer: "Hệ tư tưởng chính trị không thuộc TTXH (thuộc YTXH).",
      },
      {
        id: 38,
        term: "Yếu tố quyết định nhất của TTXH",
        definition: "Phương thức sản xuất vật chất.",
        quiz: {
          question:
            "Trong các yếu tố của tồn tại xã hội, yếu tố nào là cơ bản và quyết định nhất?",
          options: [
            "Phương thức sản xuất vật chất",
            "Điều kiện tự nhiên – hoàn cảnh địa lý",
            "Yếu tố dân cư",
            "Tất cả đều quan trọng như nhau",
          ],
          correct: 0,
        },
        fillAnswer: "Yếu tố cơ bản và quyết định nhất của TTXH là ___.",
        answer: "Phương thức sản xuất vật chất",
        fullFillAnswer:
          "Yếu tố cơ bản, quyết định nhất của TTXH là phương thức sản xuất vật chất.",
      },
      {
        id: 39,
        term: "Khái niệm Ý thức xã hội (YTXH)",
        definition:
          "Phương diện sinh hoạt tinh thần của xã hội, phản ánh TTXH.",
        quiz: {
          question: "Ý thức xã hội (YTXH) là gì?",
          options: [
            "Toàn bộ đời sống vật chất của xã hội",
            "Phương diện sinh hoạt tinh thần của xã hội, phản ánh TTXH",
            "Ý thức của một cá nhân riêng lẻ",
            "Hệ thống pháp luật của nhà nước",
          ],
          correct: 1,
        },
        fillAnswer: "YTXH là: ___.",
        answer: "Phương diện sinh hoạt tinh thần của xã hội, phản ánh TTXH",
        fullFillAnswer:
          "YTXH là phương diện sinh hoạt tinh thần của xã hội, phản ánh TTXH.",
      },
      {
        id: 40,
        term: "Quan hệ TTXH – YTXH",
        definition:
          "TTXH quyết định YTXH; YTXH có tính độc lập tương đối và tác động trở lại TTXH.",
        quiz: {
          question: "Mối quan hệ giữa tồn tại xã hội và ý thức xã hội là gì?",
          options: [
            "YTXH quyết định TTXH",
            "TTXH quyết định YTXH, đồng thời YTXH có tính độc lập tương đối và tác động trở lại TTXH",
            "Chúng tồn tại độc lập, không liên quan đến nhau",
            "Chúng quyết định lẫn nhau một cách ngang bằng",
          ],
          correct: 1,
        },
        fillAnswer:
          "TTXH quyết định YTXH, đồng thời YTXH có tính ___ và tác động trở lại ___.",
        answer:
          "TTXH quyết định YTXH; YTXH có tính độc lập tương đối và tác động trở lại TTXH",
        fullFillAnswer:
          "TTXH quyết định YTXH; YTXH độc lập tương đối và tác động trở lại TTXH.",
      },
      {
        id: 41,
        term: "Biểu hiện vai trò quyết định của TTXH",
        definition: "Khi TTXH thay đổi, YTXH cũng thay đổi theo.",
        quiz: {
          question:
            "Biểu hiện nào sau đây thể hiện vai trò quyết định của tồn tại xã hội đối với ý thức xã hội?",
          options: [
            "Khi TTXH thay đổi, YTXH cũng thay đổi theo",
            "YTXH thường lạc hậu hơn TTXH",
            "YTXH có thể vượt trước TTXH",
            "YTXH có tính kế thừa",
          ],
          correct: 0,
        },
        fillAnswer: "Khi ___ thay đổi, ___ cũng thay đổi theo.",
        answer: "TTXH; YTXH",
        fullFillAnswer: "TTXH thay đổi kéo theo YTXH thay đổi.",
      },
      {
        id: 42,
        term: "Tính lạc hậu của YTXH",
        definition:
          "Một số phong tục, tập quán lạc hậu vẫn tồn tại trong xã hội hiện đại.",
        quiz: {
          question:
            "Hiện tượng một số phong tục, tập quán lạc hậu vẫn tồn tại trong xã hội hiện đại là biểu hiện cho tính chất nào của ý thức xã hội?",
          options: [
            "Tính vượt trước",
            "Tính kế thừa",
            "Tính lạc hậu hơn so với tồn tại xã hội",
            "Tính tác động trở lại",
          ],
          correct: 2,
        },
        fillAnswer:
          "Phong tục lạc hậu còn tồn tại là biểu hiện tính ___ của YTXH so với TTXH.",
        answer: "Tính lạc hậu hơn so với tồn tại xã hội",
        fullFillAnswer: "Đó là biểu hiện tính lạc hậu của YTXH so với TTXH.",
      },
      {
        id: 43,
        term: "Tính vượt trước của YTXH",
        definition:
          "Các học thuyết khoa học dự báo về tương lai phát triển của xã hội.",
        quiz: {
          question:
            "Các học thuyết khoa học dự báo về tương lai phát triển của xã hội là biểu hiện cho tính chất nào của ý thức xã hội?",
          options: [
            "Tính vượt trước so với tồn tại xã hội",
            "Tính lạc hậu",
            "Tính giai cấp",
            "Tính kế thừa",
          ],
          correct: 0,
        },
        fillAnswer:
          "Dự báo khoa học về tương lai xã hội thể hiện tính ___ của YTXH.",
        answer: "Tính vượt trước so với tồn tại xã hội",
        fullFillAnswer:
          "Dự báo khoa học là biểu hiện tính vượt trước của YTXH.",
      },
      {
        id: 44,
        term: "Hai cấp độ của YTXH",
        definition: "Tâm lý xã hội và hệ tư tưởng.",
        quiz: {
          question: "Ý thức xã hội bao gồm hai cấp độ nào?",
          options: [
            "Tâm lý xã hội và hệ tư tưởng",
            "Ý thức cá nhân và ý thức tập thể",
            "Ý thức khoa học và ý thức thông thường",
            "Ý thức chính trị và ý thức pháp quyền",
          ],
          correct: 0,
        },
        fillAnswer: "Hai cấp độ của YTXH: ___ và ___.",
        answer: "Tâm lý xã hội và hệ tư tưởng",
        fullFillAnswer: "Hai cấp độ của YTXH: tâm lý xã hội và hệ tư tưởng.",
      },
      {
        id: 45,
        term: "Hình thái YTXH (loại trừ)",
        definition:
          "Ý thức sản xuất không phải là một hình thái của ý thức xã hội.",
        quiz: {
          question: "Đâu không phải là một hình thái của ý thức xã hội?",
          options: [
            "Ý thức chính trị",
            "Ý thức đạo đức",
            "Ý thức sản xuất",
            "Ý thức nghệ thuật",
          ],
          correct: 2,
        },
        fillAnswer: "Hình thái KHÔNG thuộc YTXH là ___.",
        answer: "Ý thức sản xuất",
        fullFillAnswer: "Ý thức sản xuất không phải là một hình thái của YTXH.",
      },
      {
        id: 46,
        term: "Bản chất con người (Mác – Lênin)",
        definition: "Tổng hoà các mối quan hệ xã hội.",
        quiz: {
          question: "Theo chủ nghĩa Mác – Lênin, bản chất con người là:",
          options: [
            "Tổng hoà các mối quan hệ xã hội",
            "Một thực thể sinh vật thuần tuý",
            "Một thực thể có lý tính, bất biến",
            "Một thực thể do thượng đế sinh ra",
          ],
          correct: 0,
        },
        fillAnswer: "Bản chất con người theo Mác – Lênin là ___.",
        answer: "Tổng hoà các mối quan hệ xã hội",
        fullFillAnswer:
          "Bản chất con người là tổng hoà các mối quan hệ xã hội.",
      },
      {
        id: 47,
        term: "Con người – chủ thể và sản phẩm của lịch sử",
        definition: "Con người vừa là chủ thể, vừa là sản phẩm của lịch sử.",
        quiz: {
          question:
            '"Con người là sản phẩm của lịch sử và của chính bản thân con người" có nghĩa là gì?',
          options: [
            "Con người tự tạo ra mình mà không cần điều kiện khách quan",
            "Con người vừa là chủ thể, vừa là sản phẩm của lịch sử",
            "Lịch sử quyết định hoàn toàn con người",
            "Con người không thể thay đổi được lịch sử",
          ],
          correct: 1,
        },
        fillAnswer: "Con người vừa là ___, vừa là ___ của lịch sử.",
        answer: "chủ thể; sản phẩm",
        fullFillAnswer:
          "Con người vừa là chủ thể, vừa là sản phẩm của lịch sử.",
      },
      {
        id: 48,
        term: "Khác biệt căn bản người – vật",
        definition: "Con người biết lao động sản xuất.",
        quiz: {
          question:
            "Theo quan điểm Mác-xít, sự khác biệt căn bản giữa con người và con vật là gì?",
          options: [
            "Con người biết sử dụng công cụ",
            "Con người có ngôn ngữ",
            "Con người có tư duy",
            "Con người biết lao động sản xuất",
          ],
          correct: 3,
        },
        fillAnswer: "Sự khác biệt căn bản: con người biết ___.",
        answer: "Con người biết lao động sản xuất",
        fullFillAnswer: "Khác biệt căn bản: con người biết lao động sản xuất.",
      },
      {
        id: 49,
        term: "Nguồn gốc tha hoá con người",
        definition:
          "Nảy sinh trong xã hội có chế độ tư hữu, có giai cấp đối kháng.",
        quiz: {
          question: "Hiện tượng tha hoá con người nảy sinh trong xã hội nào?",
          options: [
            "Xã hội cộng sản nguyên thuỷ",
            "Xã hội có chế độ tư hữu, có giai cấp đối kháng",
            "Xã hội xã hội chủ nghĩa",
            "Mọi xã hội trong lịch sử",
          ],
          correct: 1,
        },
        fillAnswer: "Tha hoá nảy sinh trong xã hội có ___ và ___ giai cấp.",
        answer: "Xã hội có chế độ tư hữu, có giai cấp đối kháng",
        fullFillAnswer:
          "Tha hoá nảy sinh trong xã hội có tư hữu và đối kháng giai cấp.",
      },
      {
        id: 50,
        term: "Vai trò quần chúng nhân dân",
        definition:
          "Là lực lượng sáng tạo ra lịch sử, quyết định sự phát triển của lịch sử.",
        quiz: {
          question: "Vai trò của quần chúng nhân dân trong lịch sử là gì?",
          options: [
            "Là lực lượng sáng tạo ra lịch sử, quyết định sự phát triển của lịch sử",
            "Chỉ là đám đông thụ động, bị các vĩ nhân chi phối",
            "Chỉ đóng vai trò phụ trong các sự kiện lịch sử",
            "Không có vai trò gì đáng kể",
          ],
          correct: 0,
        },
        fillAnswer: "Quần chúng nhân dân là lực lượng ___ ra lịch sử.",
        answer: "sáng tạo",
        fullFillAnswer:
          "Quần chúng nhân dân là lực lượng sáng tạo ra lịch sử, quyết định sự phát triển của lịch sử.",
      },
    ],
  },
];
